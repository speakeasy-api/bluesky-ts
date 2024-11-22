/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { comAtprotoIdentityComAtprotoIdentityGetRecommendedDidCredentials } from "../funcs/comAtprotoIdentityComAtprotoIdentityGetRecommendedDidCredentials.js";
import { comAtprotoIdentityComAtprotoIdentityRequestPlcOperationSignature } from "../funcs/comAtprotoIdentityComAtprotoIdentityRequestPlcOperationSignature.js";
import { comAtprotoIdentityComAtprotoIdentityResolveHandle } from "../funcs/comAtprotoIdentityComAtprotoIdentityResolveHandle.js";
import { comAtprotoIdentityComAtprotoIdentitySignPlcOperation } from "../funcs/comAtprotoIdentityComAtprotoIdentitySignPlcOperation.js";
import { comAtprotoIdentityComAtprotoIdentitySubmitPlcOperation } from "../funcs/comAtprotoIdentityComAtprotoIdentitySubmitPlcOperation.js";
import { comAtprotoIdentityComAtprotoIdentityUpdateHandle } from "../funcs/comAtprotoIdentityComAtprotoIdentityUpdateHandle.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Identity extends ClientSDK {
  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Describe the credentials that should be included in the DID doc of an account that is migrating to this service.
   */
  async comAtprotoIdentityGetRecommendedDidCredentials(
    options?: RequestOptions,
  ): Promise<
    operations.ComAtprotoIdentityGetRecommendedDidCredentialsResponseBody
  > {
    return unwrapAsync(
      comAtprotoIdentityComAtprotoIdentityGetRecommendedDidCredentials(
        this,
        options,
      ),
    );
  }

  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Request an email with a code to in order to request a signed PLC operation. Requires Auth.
   */
  async comAtprotoIdentityRequestPlcOperationSignature(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(
      comAtprotoIdentityComAtprotoIdentityRequestPlcOperationSignature(
        this,
        options,
      ),
    );
  }

  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Resolves a handle (domain name) to a DID.
   */
  async comAtprotoIdentityResolveHandle(
    request: operations.ComAtprotoIdentityResolveHandleRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoIdentityResolveHandleResponseBody> {
    return unwrapAsync(comAtprotoIdentityComAtprotoIdentityResolveHandle(
      this,
      request,
      options,
    ));
  }

  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Signs a PLC operation to update some value(s) in the requesting DID's document.
   */
  async comAtprotoIdentitySignPlcOperation(
    request: operations.ComAtprotoIdentitySignPlcOperationRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoIdentitySignPlcOperationResponseBody> {
    return unwrapAsync(comAtprotoIdentityComAtprotoIdentitySignPlcOperation(
      this,
      request,
      options,
    ));
  }

  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry
   */
  async comAtprotoIdentitySubmitPlcOperation(
    request: operations.ComAtprotoIdentitySubmitPlcOperationRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoIdentityComAtprotoIdentitySubmitPlcOperation(
      this,
      request,
      options,
    ));
  }

  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.
   */
  async comAtprotoIdentityUpdateHandle(
    request: operations.ComAtprotoIdentityUpdateHandleRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoIdentityComAtprotoIdentityUpdateHandle(
      this,
      request,
      options,
    ));
  }
}
