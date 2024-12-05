/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedFetch } from "../funcs/feedFetch.js";
import { feedGetActor } from "../funcs/feedGetActor.js";
import { feedGetActorLikes } from "../funcs/feedGetActorLikes.js";
import { feedGetAuthor } from "../funcs/feedGetAuthor.js";
import { feedGetGenerator } from "../funcs/feedGetGenerator.js";
import { feedGetGenerators } from "../funcs/feedGetGenerators.js";
import { feedGetSkeleton } from "../funcs/feedGetSkeleton.js";
import { feedGetSuggested } from "../funcs/feedGetSuggested.js";
import { feedGetTimeline } from "../funcs/feedGetTimeline.js";
import { feedSearch } from "../funcs/feedSearch.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Feed extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
   */
  async getActor(
    request: operations.AppBskyFeedGetActorFeedsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetActorFeedsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedGetActor(
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
  async getActorLikes(
    request: operations.AppBskyFeedGetActorLikesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetActorLikesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedGetActorLikes(
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
  async getAuthor(
    request: operations.AppBskyFeedGetAuthorFeedRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetAuthorFeedResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedGetAuthor(
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
  async fetch(
    request: operations.AppBskyFeedGetFeedRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedGetFeedResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedFetch(
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
  async getGenerator(
    request: operations.AppBskyFeedGetFeedGeneratorRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedGeneratorResponseBody> {
    return unwrapAsync(feedGetGenerator(
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
  async getGenerators(
    request: operations.AppBskyFeedGetFeedGeneratorsRequest,
    options?: RequestOptions,
  ): Promise<operations.AppBskyFeedGetFeedGeneratorsResponseBody> {
    return unwrapAsync(feedGetGenerators(
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
  async getSkeleton(
    request: operations.AppBskyFeedGetFeedSkeletonRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetFeedSkeletonResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedGetSkeleton(
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
  async getSuggested(
    request?: operations.AppBskyFeedGetSuggestedFeedsRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AppBskyFeedGetSuggestedFeedsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(feedGetSuggested(
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
  async getTimeline(
    request?: operations.AppBskyFeedGetTimelineRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedGetTimelineResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedGetTimeline(
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
  async search(
    request: operations.AppBskyFeedSearchPostsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.AppBskyFeedSearchPostsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(feedSearch(
      this,
      request,
      options,
    ));
  }
}
