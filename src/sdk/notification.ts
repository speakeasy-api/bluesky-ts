/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationGetUnreadCount } from "../funcs/notificationGetUnreadCount.js";
import { notificationListNotifications } from "../funcs/notificationListNotifications.js";
import { notificationPutPreferences } from "../funcs/notificationPutPreferences.js";
import { notificationRegisterPush } from "../funcs/notificationRegisterPush.js";
import { notificationUpdateSeen } from "../funcs/notificationUpdateSeen.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Notification extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Count the number of unread notifications for the requesting account. Requires auth.
   */
  async getUnreadCount(
    request?: operations.AppBskyNotificationGetUnreadCountRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.AppBskyNotificationGetUnreadCountResponseBody> {
    return unwrapAsync(notificationGetUnreadCount(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Enumerate notifications for the requesting account. Requires auth.
   */
  async listNotifications(
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
    return unwrapResultIterator(notificationListNotifications(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Set notification-related preferences for an account. Requires auth.
   */
  async putPreferences(
    request: operations.AppBskyNotificationPutPreferencesRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(notificationPutPreferences(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Register to receive push notifications, via a specified service, for the requesting account. Requires auth.
   */
  async registerPush(
    request: operations.AppBskyNotificationRegisterPushRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(notificationRegisterPush(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Notify server that the requesting account has seen notifications. Requires auth.
   */
  async updateSeen(
    request: operations.AppBskyNotificationUpdateSeenRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(notificationUpdateSeen(
      this,
      request,
      options,
    ));
  }
}
