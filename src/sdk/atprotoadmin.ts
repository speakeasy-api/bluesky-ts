/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoAdminDisableAccountInvites } from "../funcs/atprotoAdminDisableAccountInvites.js";
import { atprotoAdminGetInviteCodes } from "../funcs/atprotoAdminGetInviteCodes.js";
import { atprotoAdminSearchAccounts } from "../funcs/atprotoAdminSearchAccounts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AtprotoAdmin extends ClientSDK {
  /**
   * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Disable an account from receiving new invite codes, but does not invalidate existing codes.
   */
  async disableAccountInvites(
    request: operations.ComAtprotoAdminDisableAccountInvitesBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoAdminDisableAccountInvites(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get an admin view of invite codes.
   */
  async getInviteCodes(
    request?: operations.ComAtprotoAdminGetInviteCodesRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ComAtprotoAdminGetInviteCodesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(atprotoAdminGetInviteCodes(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Get list of accounts that matches your search query.
   */
  async searchAccounts(
    request?: operations.ComAtprotoAdminSearchAccountsRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ComAtprotoAdminSearchAccountsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(atprotoAdminSearchAccounts(
      this,
      request,
      options,
    ));
  }
}
