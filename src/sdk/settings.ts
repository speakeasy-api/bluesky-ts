/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { settingsList } from "../funcs/settingsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Settings extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * List settings with optional filtering
   */
  async list(
    request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ToolsOzoneSettingListOptionsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(settingsList(
      this,
      request,
      options,
    ));
  }
}
