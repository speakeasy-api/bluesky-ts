/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoModerationCreateReport } from "../funcs/atprotoModerationCreateReport.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class BlueskyModeration extends ClientSDK {
  /**
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.
   */
  async createReport(
    request: operations.ComAtprotoModerationCreateReportRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoModerationCreateReportResponseBody> {
    return unwrapAsync(atprotoModerationCreateReport(
      this,
      request,
      options,
    ));
  }
}
