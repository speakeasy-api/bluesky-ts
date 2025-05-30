/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { signatureFindCorrelation } from "../funcs/signatureFindCorrelation.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

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
    return unwrapAsync(signatureFindCorrelation(
      this,
      request,
      options,
    ));
  }
}
