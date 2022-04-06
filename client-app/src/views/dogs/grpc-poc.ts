import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";

import { Message } from "google-protobuf";
import { grpc } from "@improbable-eng/grpc-web";
import { MethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
// Import code-generated data structures.
import { RoleFamily } from "../../generated/services/translation-services/role-family_pb_service";
import {
  RoleFamilyResponse,
  RoleFamilyRequest,
} from "../../generated/services/translation-services/role-family_pb";
import { RoleFamilyCodeMap } from "../../generated/common/role-family_pb";

const { invoke } = grpc;

// @ts-ignore
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

type Result = {
  error?: GrpcBaseQueryError;
  data?: Message | Message[];
};

export interface GrpcArgs {
  method: MethodDefinition<Message, Message>;
  request: Message;
}

export type GrpcBaseQueryArgs = {
  host: string;
  metadata?: grpc.Metadata;
};

export type GrpcBaseQueryError = {
  /**
   * * `grpc.Code`:
   *   GRPC status code
   */
  code: grpc.Code;
  message: string;
};

/**
 * This is a very small wrapper around grpc-web that aims to simplify requests.
 * {@link [grpc-web](https://github.com/improbable-eng/grpc-web)}.
 *
 * @example
 * ```ts
 * const baseQuery = fetchBaseQuery({
 *   host: 'https://api.your-really-great-app.com/v1/',
 * })
 * ```
 *
 * @param {string} host
 * The host for an grpc-web proxy.
 * Typically in the format of http://example.com/
 *
 */
export function grpcBaseQuery({
  host,
  metadata,
}: GrpcBaseQueryArgs): BaseQueryFn<
  GrpcArgs,
  any,
  GrpcBaseQueryError | undefined
> {
  if (typeof invoke === "undefined" || typeof host === "undefined") {
    console.warn(
      "Warning: `grpc invoke` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
    );
  }

  enableDevTools([]);
  return async ({ method, request }) => {
    const response = await new Promise((resolve, reject) => {
      const result: Result = {};

      invoke(method, {
        request,
        host,
        metadata,
        onMessage: (message: Message) => {
          method.responseStream
            ? (result.data as Message[]).push(message)
            : (result.data = message);
        },
        onEnd: (code: grpc.Code, message: string | undefined) => {
          if (code === grpc.Code.OK) {
            resolve(result);
          } else {
            reject({ code, message });
          }
        },
      });
    }).catch(error => {
      return {
        error,
      } as Result;
    });

    const { error, data } = response as Result;
    return error ? { error: error } : { data: data };
  };
}

interface RoleFamilyType {
  category: string;
  roleFamily: number;
}

export const roleFamilySlice = createApi({
  reducerPath: "roleFamilyGrpc",
  baseQuery: grpcBaseQuery({
    host: "https://au.aws.api.development.faethm.ai",
    //   metadata:
  }),
  endpoints: builder => ({
    getRoleFamily: builder.query<
      RoleFamilyType,
      RoleFamilyCodeMap[keyof RoleFamilyCodeMap]
    >({
      queryFn: async (
        arg: RoleFamilyCodeMap[keyof RoleFamilyCodeMap],
        queryApi,
        extraOptions,
        baseQuery,
      ) => {
        const request = new RoleFamilyRequest();
        request.setRolefamily(arg);
        const { data, error } = await baseQuery({
          method: RoleFamily.GetRoleFamily,
          request,
        });
        const response: RoleFamilyResponse = data;
        return error
          ? { error: error }
          : {
              data: {
                roleFamily: response.getRolefamily(),
                category: response.getCategory(),
              },
            };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRoleFamilyQuery } = roleFamilySlice;
