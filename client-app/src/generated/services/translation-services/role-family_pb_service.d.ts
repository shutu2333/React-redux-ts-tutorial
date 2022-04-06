// package: faethm.querydomain.translationservices
// file: services/translation-services/role-family.proto

import * as services_translation_services_role_family_pb from "../../services/translation-services/role-family_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RoleFamilyGetRoleFamily = {
  readonly methodName: string;
  readonly service: typeof RoleFamily;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_translation_services_role_family_pb.RoleFamilyRequest;
  readonly responseType: typeof services_translation_services_role_family_pb.RoleFamilyResponse;
};

type RoleFamilyGetRoleFamilyStream = {
  readonly methodName: string;
  readonly service: typeof RoleFamily;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof services_translation_services_role_family_pb.RoleFamilyStreamRequest;
  readonly responseType: typeof services_translation_services_role_family_pb.RoleFamilyResponse;
};

type RoleFamilyGetRoleFamilyBidi = {
  readonly methodName: string;
  readonly service: typeof RoleFamily;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof services_translation_services_role_family_pb.RoleFamilyRequest;
  readonly responseType: typeof services_translation_services_role_family_pb.RoleFamilyResponse;
};

export class RoleFamily {
  static readonly serviceName: string;
  static readonly GetRoleFamily: RoleFamilyGetRoleFamily;
  static readonly GetRoleFamilyStream: RoleFamilyGetRoleFamilyStream;
  static readonly GetRoleFamilyBidi: RoleFamilyGetRoleFamilyBidi;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class RoleFamilyClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getRoleFamily(
    requestMessage: services_translation_services_role_family_pb.RoleFamilyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_translation_services_role_family_pb.RoleFamilyResponse|null) => void
  ): UnaryResponse;
  getRoleFamily(
    requestMessage: services_translation_services_role_family_pb.RoleFamilyRequest,
    callback: (error: ServiceError|null, responseMessage: services_translation_services_role_family_pb.RoleFamilyResponse|null) => void
  ): UnaryResponse;
  getRoleFamilyStream(requestMessage: services_translation_services_role_family_pb.RoleFamilyStreamRequest, metadata?: grpc.Metadata): ResponseStream<services_translation_services_role_family_pb.RoleFamilyResponse>;
  getRoleFamilyBidi(metadata?: grpc.Metadata): BidirectionalStream<services_translation_services_role_family_pb.RoleFamilyRequest, services_translation_services_role_family_pb.RoleFamilyResponse>;
}

