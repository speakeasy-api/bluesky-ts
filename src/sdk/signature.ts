/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ozoneSignatureFindCorrelation } from "../funcs/ozoneSignatureFindCorrelation.js";
import { ozoneSignatureFindRelatedAccounts } from "../funcs/ozoneSignatureFindRelatedAccounts.js";
import { ozoneSignatureSearchAccounts } from "../funcs/ozoneSignatureSearchAccounts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Signature extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Find all correlated threat signatures between 2 or more accounts.
   */
  async findCorrelation(
    request: operations.ToolsOzoneSignatureFindCorrelationRequest,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneSignatureFindCorrelationResponseBody> {
    return unwrapAsync(ozoneSignatureFindCorrelation(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get accounts that share some matching threat signatures with the root account.
   */
  async findRelatedAccounts(
    request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(ozoneSignatureFindRelatedAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Search for accounts that match one or more threat signature values.
   */
  async searchAccounts(
    request: operations.ToolsOzoneSignatureSearchAccountsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ToolsOzoneSignatureSearchAccountsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(ozoneSignatureSearchAccounts(
      this,
      request,
      options,
    ));
  }
}
