/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { settingRemoveOptions } from "../funcs/settingRemoveOptions.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Setting extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete settings by key
   */
  async removeOptions(
    request: operations.ToolsOzoneSettingRemoveOptionsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneSettingRemoveOptionsResponseBody> {
    return unwrapAsync(settingRemoveOptions(
      this,
      request,
      options,
    ));
  }
}
