/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationList } from "../funcs/notificationList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Notification extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Enumerate notifications for the requesting account. Requires auth.
   */
  async list(
    request?:
      | operations.AppBskyNotificationListNotificationsRequest
      | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyNotificationListNotificationsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(notificationList(
      this,
      request,
      options,
    ));
  }
}
