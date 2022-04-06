// package: faethm.querydomain.translationservices
// file: services/translation-services/role-family.proto

var services_translation_services_role_family_pb = require("../../services/translation-services/role-family_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RoleFamily = (function () {
  function RoleFamily() {}
  RoleFamily.serviceName = "faethm.querydomain.translationservices.RoleFamily";
  return RoleFamily;
}());

RoleFamily.GetRoleFamily = {
  methodName: "GetRoleFamily",
  service: RoleFamily,
  requestStream: false,
  responseStream: false,
  requestType: services_translation_services_role_family_pb.RoleFamilyRequest,
  responseType: services_translation_services_role_family_pb.RoleFamilyResponse
};

RoleFamily.GetRoleFamilyStream = {
  methodName: "GetRoleFamilyStream",
  service: RoleFamily,
  requestStream: false,
  responseStream: true,
  requestType: services_translation_services_role_family_pb.RoleFamilyStreamRequest,
  responseType: services_translation_services_role_family_pb.RoleFamilyResponse
};

RoleFamily.GetRoleFamilyBidi = {
  methodName: "GetRoleFamilyBidi",
  service: RoleFamily,
  requestStream: true,
  responseStream: true,
  requestType: services_translation_services_role_family_pb.RoleFamilyRequest,
  responseType: services_translation_services_role_family_pb.RoleFamilyResponse
};

exports.RoleFamily = RoleFamily;

function RoleFamilyClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RoleFamilyClient.prototype.getRoleFamily = function getRoleFamily(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RoleFamily.GetRoleFamily, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RoleFamilyClient.prototype.getRoleFamilyStream = function getRoleFamilyStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(RoleFamily.GetRoleFamilyStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

RoleFamilyClient.prototype.getRoleFamilyBidi = function getRoleFamilyBidi(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(RoleFamily.GetRoleFamilyBidi, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.RoleFamilyClient = RoleFamilyClient;

