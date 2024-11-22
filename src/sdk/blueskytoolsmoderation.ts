/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { toolsOzoneModerationToolsOzoneModerationEmitEvent } from "../funcs/toolsOzoneModerationToolsOzoneModerationEmitEvent.js";
import { toolsOzoneModerationToolsOzoneModerationGetEvent } from "../funcs/toolsOzoneModerationToolsOzoneModerationGetEvent.js";
import { toolsOzoneModerationToolsOzoneModerationGetRecord } from "../funcs/toolsOzoneModerationToolsOzoneModerationGetRecord.js";
import { toolsOzoneModerationToolsOzoneModerationGetRecords } from "../funcs/toolsOzoneModerationToolsOzoneModerationGetRecords.js";
import { toolsOzoneModerationToolsOzoneModerationGetRepo } from "../funcs/toolsOzoneModerationToolsOzoneModerationGetRepo.js";
import { toolsOzoneModerationToolsOzoneModerationGetRepos } from "../funcs/toolsOzoneModerationToolsOzoneModerationGetRepos.js";
import { toolsOzoneModerationToolsOzoneModerationQueryEvents } from "../funcs/toolsOzoneModerationToolsOzoneModerationQueryEvents.js";
import { toolsOzoneModerationToolsOzoneModerationQueryStatuses } from "../funcs/toolsOzoneModerationToolsOzoneModerationQueryStatuses.js";
import { toolsOzoneModerationToolsOzoneModerationSearchRepos } from "../funcs/toolsOzoneModerationToolsOzoneModerationSearchRepos.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class BlueskyToolsModeration extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Take a moderation action on an actor.
   */
  async toolsOzoneModerationEmitEvent(
    request: operations.ToolsOzoneModerationEmitEventRequestBody,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneModerationDefsModEventView> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationEmitEvent(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get details about a moderation event.
   */
  async toolsOzoneModerationGetEvent(
    request: operations.ToolsOzoneModerationGetEventRequest,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneModerationDefsModEventViewDetail> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationGetEvent(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get details about a record.
   */
  async toolsOzoneModerationGetRecord(
    request: operations.ToolsOzoneModerationGetRecordRequest,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneModerationDefsRecordViewDetail> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationGetRecord(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get details about some records.
   */
  async toolsOzoneModerationGetRecords(
    request: operations.ToolsOzoneModerationGetRecordsRequest,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneModerationGetRecordsResponseBody> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationGetRecords(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get details about a repository.
   */
  async toolsOzoneModerationGetRepo(
    request: operations.ToolsOzoneModerationGetRepoRequest,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneModerationDefsRepoViewDetail> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationGetRepo(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get details about some repositories.
   */
  async toolsOzoneModerationGetRepos(
    request: operations.ToolsOzoneModerationGetReposRequest,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneModerationGetReposResponseBody> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationGetRepos(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * List moderation events related to a subject.
   */
  async toolsOzoneModerationQueryEvents(
    request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneModerationQueryEventsResponseBody> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationQueryEvents(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * View moderation statuses of subjects (record or repo).
   */
  async toolsOzoneModerationQueryStatuses(
    request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneModerationQueryStatusesResponseBody> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationQueryStatuses(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Find repositories based on a search term.
   */
  async toolsOzoneModerationSearchRepos(
    request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneModerationSearchReposResponseBody> {
    return unwrapAsync(toolsOzoneModerationToolsOzoneModerationSearchRepos(
      this,
      request,
      options,
    ));
  }
}
