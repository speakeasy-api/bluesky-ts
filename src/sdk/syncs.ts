/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { syncsGetBlocks } from "../funcs/syncsGetBlocks.js";
import { syncsGetLatestCommit } from "../funcs/syncsGetLatestCommit.js";
import { syncsGetRepoStatus } from "../funcs/syncsGetRepoStatus.js";
import { syncsRequestCrawl } from "../funcs/syncsRequestCrawl.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Syncs extends ClientSDK {
  /**
   * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.
   */
  async getBlocks(
    request: operations.ComAtprotoSyncGetBlocksRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(syncsGetBlocks(
      this,
      request,
      options,
    ));
  }

  /**
   * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get the current commit CID & revision of the specified repo. Does not require auth.
   */
  async getLatestCommit(
    request: operations.ComAtprotoSyncGetLatestCommitRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoSyncGetLatestCommitResponseBody> {
    return unwrapAsync(syncsGetLatestCommit(
      this,
      request,
      options,
    ));
  }

  /**
   * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
   */
  async getRepoStatus(
    request: operations.ComAtprotoSyncGetRepoStatusRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoSyncGetRepoStatusResponseBody> {
    return unwrapAsync(syncsGetRepoStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.
   */
  async requestCrawl(
    request: operations.ComAtprotoSyncRequestCrawlBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(syncsRequestCrawl(
      this,
      request,
      options,
    ));
  }
}
