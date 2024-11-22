/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appBskyFeedAppBskyFeedDescribeFeedGenerator } from "../funcs/appBskyFeedAppBskyFeedDescribeFeedGenerator.js";
import { appBskyFeedAppBskyFeedGetActorFeeds } from "../funcs/appBskyFeedAppBskyFeedGetActorFeeds.js";
import { appBskyFeedAppBskyFeedGetActorLikes } from "../funcs/appBskyFeedAppBskyFeedGetActorLikes.js";
import { appBskyFeedAppBskyFeedGetAuthorFeed } from "../funcs/appBskyFeedAppBskyFeedGetAuthorFeed.js";
import { appBskyFeedAppBskyFeedGetFeed } from "../funcs/appBskyFeedAppBskyFeedGetFeed.js";
import { appBskyFeedAppBskyFeedGetFeedGenerator } from "../funcs/appBskyFeedAppBskyFeedGetFeedGenerator.js";
import { appBskyFeedAppBskyFeedGetFeedGenerators } from "../funcs/appBskyFeedAppBskyFeedGetFeedGenerators.js";
import { appBskyFeedAppBskyFeedGetFeedSkeleton } from "../funcs/appBskyFeedAppBskyFeedGetFeedSkeleton.js";
import { appBskyFeedAppBskyFeedGetLikes } from "../funcs/appBskyFeedAppBskyFeedGetLikes.js";
import { appBskyFeedAppBskyFeedGetListFeed } from "../funcs/appBskyFeedAppBskyFeedGetListFeed.js";
import { appBskyFeedAppBskyFeedGetPosts } from "../funcs/appBskyFeedAppBskyFeedGetPosts.js";
import { appBskyFeedAppBskyFeedGetPostThread } from "../funcs/appBskyFeedAppBskyFeedGetPostThread.js";
import { appBskyFeedAppBskyFeedGetQuotes } from "../funcs/appBskyFeedAppBskyFeedGetQuotes.js";
import { appBskyFeedAppBskyFeedGetRepostedBy } from "../funcs/appBskyFeedAppBskyFeedGetRepostedBy.js";
import { appBskyFeedAppBskyFeedGetSuggestedFeeds } from "../funcs/appBskyFeedAppBskyFeedGetSuggestedFeeds.js";
import { appBskyFeedAppBskyFeedGetTimeline } from "../funcs/appBskyFeedAppBskyFeedGetTimeline.js";
import { appBskyFeedAppBskyFeedSearchPosts } from "../funcs/appBskyFeedAppBskyFeedSearchPosts.js";
import { appBskyFeedAppBskyFeedSendInteractions } from "../funcs/appBskyFeedAppBskyFeedSendInteractions.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Feed extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
   */
  async appBskyFeedDescribeFeedGenerator(
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedDescribeFeedGeneratorResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedDescribeFeedGenerator(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
   */
  async appBskyFeedGetActorFeeds(
    request: operations.AppBskyFeedGetActorFeedsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetActorFeedsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetActorFeeds(
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
   * Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
   */
  async appBskyFeedGetActorLikes(
    request: operations.AppBskyFeedGetActorLikesRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetActorLikesResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetActorLikes(
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
   * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
   */
  async appBskyFeedGetAuthorFeed(
    request: operations.AppBskyFeedGetAuthorFeedRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetAuthorFeedResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetAuthorFeed(
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
   * Get a hydrated feed from an actor's selected feed generator. Implemented by App View.
   */
  async appBskyFeedGetFeed(
    request: operations.AppBskyFeedGetFeedRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetFeed(
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
   * Get information about a feed generator. Implemented by AppView.
   */
  async appBskyFeedGetFeedGenerator(
    request: operations.AppBskyFeedGetFeedGeneratorRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedGeneratorResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetFeedGenerator(
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
   * Get information about a list of feed generators.
   */
  async appBskyFeedGetFeedGenerators(
    request: operations.AppBskyFeedGetFeedGeneratorsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedGeneratorsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetFeedGenerators(
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
   * Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.
   */
  async appBskyFeedGetFeedSkeleton(
    request: operations.AppBskyFeedGetFeedSkeletonRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedSkeletonResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetFeedSkeleton(
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
   * Get like records which reference a subject (by AT-URI and CID).
   */
  async appBskyFeedGetLikes(
    request: operations.AppBskyFeedGetLikesRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetLikesResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetLikes(
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
  async appBskyFeedGetListFeed(
    request: operations.AppBskyFeedGetListFeedRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetListFeedResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetListFeed(
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
  async appBskyFeedGetPostThread(
    request: operations.AppBskyFeedGetPostThreadRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetPostThreadResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetPostThread(
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
  async appBskyFeedGetPosts(
    request: operations.AppBskyFeedGetPostsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetPostsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetPosts(
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
  async appBskyFeedGetQuotes(
    request: operations.AppBskyFeedGetQuotesRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetQuotesResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetQuotes(
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
  async appBskyFeedGetRepostedBy(
    request: operations.AppBskyFeedGetRepostedByRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetRepostedByResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetRepostedBy(
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
   * Get a list of suggested feeds (feed generators) for the requesting account.
   */
  async appBskyFeedGetSuggestedFeeds(
    request: operations.AppBskyFeedGetSuggestedFeedsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetSuggestedFeedsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetSuggestedFeeds(
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
   * Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.
   */
  async appBskyFeedGetTimeline(
    request: operations.AppBskyFeedGetTimelineRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetTimelineResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedGetTimeline(
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
   * Find posts matching search criteria, returning views of those posts.
   */
  async appBskyFeedSearchPosts(
    request: operations.AppBskyFeedSearchPostsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedSearchPostsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedSearchPosts(
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
  async appBskyFeedSendInteractions(
    request: operations.AppBskyFeedSendInteractionsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedSendInteractionsResponseBody> {
    return unwrapAsync(appBskyFeedAppBskyFeedSendInteractions(
      this,
      request,
      options,
    ));
  }
}
