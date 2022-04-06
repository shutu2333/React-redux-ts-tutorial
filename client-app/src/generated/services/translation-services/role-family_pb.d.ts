// package: faethm.querydomain.translationservices
// file: services/translation-services/role-family.proto

import * as jspb from "google-protobuf";
import * as common_role_family_pb from "../../common/role-family_pb";

export class RoleFamilyRequest extends jspb.Message {
  getRolefamily(): common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap];
  setRolefamily(value: common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleFamilyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleFamilyRequest): RoleFamilyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleFamilyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleFamilyRequest;
  static deserializeBinaryFromReader(message: RoleFamilyRequest, reader: jspb.BinaryReader): RoleFamilyRequest;
}

export namespace RoleFamilyRequest {
  export type AsObject = {
    rolefamily: common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap],
  }
}

export class RoleFamilyResponse extends jspb.Message {
  getRolefamily(): common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap];
  setRolefamily(value: common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap]): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleFamilyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoleFamilyResponse): RoleFamilyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleFamilyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleFamilyResponse;
  static deserializeBinaryFromReader(message: RoleFamilyResponse, reader: jspb.BinaryReader): RoleFamilyResponse;
}

export namespace RoleFamilyResponse {
  export type AsObject = {
    rolefamily: common_role_family_pb.RoleFamilyCodeMap[keyof common_role_family_pb.RoleFamilyCodeMap],
    category: string,
  }
}

export class RoleFamilyStreamRequest extends jspb.Message {
  clearRolefamilyrequestsList(): void;
  getRolefamilyrequestsList(): Array<RoleFamilyRequest>;
  setRolefamilyrequestsList(value: Array<RoleFamilyRequest>): void;
  addRolefamilyrequests(value?: RoleFamilyRequest, index?: number): RoleFamilyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleFamilyStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleFamilyStreamRequest): RoleFamilyStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleFamilyStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleFamilyStreamRequest;
  static deserializeBinaryFromReader(message: RoleFamilyStreamRequest, reader: jspb.BinaryReader): RoleFamilyStreamRequest;
}

export namespace RoleFamilyStreamRequest {
  export type AsObject = {
    rolefamilyrequestsList: Array<RoleFamilyRequest.AsObject>,
  }
}

