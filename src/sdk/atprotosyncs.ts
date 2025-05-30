/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoSyncsGetRecord } from "../funcs/atprotoSyncsGetRecord.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AtprotoSyncs extends ClientSDK {
  /**
   * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.
   */
  async getRecord(
    request: operations.ComAtprotoSyncGetRecordRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoSyncsGetRecord(
      this,
      request,
      options,
    ));
  }
}
