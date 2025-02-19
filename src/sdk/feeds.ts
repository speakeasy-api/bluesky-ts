/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedsDescribeGenerator } from "../funcs/feedsDescribeGenerator.js";
import { feedsGet } from "../funcs/feedsGet.js";
import { feedsGetLikes } from "../funcs/feedsGetLikes.js";
import { feedsGetList } from "../funcs/feedsGetList.js";
import { feedsGetPostThread } from "../funcs/feedsGetPostThread.js";
import { feedsGetQuotes } from "../funcs/feedsGetQuotes.js";
import { feedsGetRepostedBy } from "../funcs/feedsGetRepostedBy.js";
import { feedsSendInteractions } from "../funcs/feedsSendInteractions.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Feeds extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
   */
  async describeGenerator(
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedDescribeFeedGeneratorResponseBody> {
    return unwrapAsync(feedsDescribeGenerator(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get like records which reference a subject (by AT-URI and CID).
   */
  async getLikes(
    request: operations.AppBskyFeedGetLikesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedGetLikesResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedsGetLikes(
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
   * Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.
   */
  async getList(
    request: operations.AppBskyFeedGetListFeedRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedGetListFeedResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedsGetList(
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
   * Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
   */
  async getPostThread(
    request: operations.AppBskyFeedGetPostThreadRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetPostThreadResponseBody> {
    return unwrapAsync(feedsGetPostThread(
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
   * Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.
   */
  async get(
    request: operations.AppBskyFeedGetPostsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetPostsResponseBody> {
    return unwrapAsync(feedsGet(
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
   * Get a list of quotes for a given post.
   */
  async getQuotes(
    request: operations.AppBskyFeedGetQuotesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedGetQuotesResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedsGetQuotes(
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
   * Get a list of reposts for a given post.
   */
  async getRepostedBy(
    request: operations.AppBskyFeedGetRepostedByRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetRepostedByResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedsGetRepostedBy(
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
   * Send information about interactions with feed items back to the feed generator that served them.
   */
  async sendInteractions(
    request: operations.AppBskyFeedSendInteractionsBody,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedSendInteractionsResponseBody> {
    return unwrapAsync(feedsSendInteractions(
      this,
      request,
      options,
    ));
  }
}
