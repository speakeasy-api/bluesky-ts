/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { comAtprotoAdminComAtprotoAdminDeleteAccount } from "../funcs/comAtprotoAdminComAtprotoAdminDeleteAccount.js";
import { comAtprotoAdminComAtprotoAdminDisableAccountInvites } from "../funcs/comAtprotoAdminComAtprotoAdminDisableAccountInvites.js";
import { comAtprotoAdminComAtprotoAdminDisableInviteCodes } from "../funcs/comAtprotoAdminComAtprotoAdminDisableInviteCodes.js";
import { comAtprotoAdminComAtprotoAdminEnableAccountInvites } from "../funcs/comAtprotoAdminComAtprotoAdminEnableAccountInvites.js";
import { comAtprotoAdminComAtprotoAdminGetAccountInfo } from "../funcs/comAtprotoAdminComAtprotoAdminGetAccountInfo.js";
import { comAtprotoAdminComAtprotoAdminGetAccountInfos } from "../funcs/comAtprotoAdminComAtprotoAdminGetAccountInfos.js";
import { comAtprotoAdminComAtprotoAdminGetInviteCodes } from "../funcs/comAtprotoAdminComAtprotoAdminGetInviteCodes.js";
import { comAtprotoAdminComAtprotoAdminGetSubjectStatus } from "../funcs/comAtprotoAdminComAtprotoAdminGetSubjectStatus.js";
import { comAtprotoAdminComAtprotoAdminSearchAccounts } from "../funcs/comAtprotoAdminComAtprotoAdminSearchAccounts.js";
import { comAtprotoAdminComAtprotoAdminSendEmail } from "../funcs/comAtprotoAdminComAtprotoAdminSendEmail.js";
import { comAtprotoAdminComAtprotoAdminUpdateAccountEmail } from "../funcs/comAtprotoAdminComAtprotoAdminUpdateAccountEmail.js";
import { comAtprotoAdminComAtprotoAdminUpdateAccountHandle } from "../funcs/comAtprotoAdminComAtprotoAdminUpdateAccountHandle.js";
import { comAtprotoAdminComAtprotoAdminUpdateAccountPassword } from "../funcs/comAtprotoAdminComAtprotoAdminUpdateAccountPassword.js";
import { comAtprotoAdminComAtprotoAdminUpdateSubjectStatus } from "../funcs/comAtprotoAdminComAtprotoAdminUpdateSubjectStatus.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Admin extends ClientSDK {
  /**
   * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete a user account as an administrator.
   */
  async comAtprotoAdminDeleteAccount(
    request: operations.ComAtprotoAdminDeleteAccountRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminDeleteAccount(
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
   * Disable an account from receiving new invite codes, but does not invalidate existing codes.
   */
  async comAtprotoAdminDisableAccountInvites(
    request: operations.ComAtprotoAdminDisableAccountInvitesRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminDisableAccountInvites(
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
   * Disable some set of codes and/or all codes associated with a set of users.
   */
  async comAtprotoAdminDisableInviteCodes(
    request: operations.ComAtprotoAdminDisableInviteCodesRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminDisableInviteCodes(
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
   * Re-enable an account's ability to receive invite codes.
   */
  async comAtprotoAdminEnableAccountInvites(
    request: operations.ComAtprotoAdminEnableAccountInvitesRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminEnableAccountInvites(
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
   * Get details about an account.
   */
  async comAtprotoAdminGetAccountInfo(
    request: operations.ComAtprotoAdminGetAccountInfoRequest,
    options?: RequestOptions,
  ): Promise<components.ComAtprotoAdminDefsAccountView> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminGetAccountInfo(
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
   * Get details about some accounts.
   */
  async comAtprotoAdminGetAccountInfos(
    request: operations.ComAtprotoAdminGetAccountInfosRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminGetAccountInfosResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminGetAccountInfos(
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
  async comAtprotoAdminGetInviteCodes(
    request: operations.ComAtprotoAdminGetInviteCodesRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminGetInviteCodesResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminGetInviteCodes(
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
   * Get the service-specific admin status of a subject (account, record, or blob).
   */
  async comAtprotoAdminGetSubjectStatus(
    request: operations.ComAtprotoAdminGetSubjectStatusRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminGetSubjectStatusResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminGetSubjectStatus(
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
  async comAtprotoAdminSearchAccounts(
    request: operations.ComAtprotoAdminSearchAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminSearchAccountsResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminSearchAccounts(
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
   * Send email to a user's account email address.
   */
  async comAtprotoAdminSendEmail(
    request: operations.ComAtprotoAdminSendEmailRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminSendEmailResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminSendEmail(
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
   * Administrative action to update an account's email.
   */
  async comAtprotoAdminUpdateAccountEmail(
    request: operations.ComAtprotoAdminUpdateAccountEmailRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminUpdateAccountEmail(
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
   * Administrative action to update an account's handle.
   */
  async comAtprotoAdminUpdateAccountHandle(
    request: operations.ComAtprotoAdminUpdateAccountHandleRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminUpdateAccountHandle(
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
   * Update the password for a user account as an administrator.
   */
  async comAtprotoAdminUpdateAccountPassword(
    request: operations.ComAtprotoAdminUpdateAccountPasswordRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminUpdateAccountPassword(
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
   * Update the service-specific admin status of a subject (account, record, or blob).
   */
  async comAtprotoAdminUpdateSubjectStatus(
    request: operations.ComAtprotoAdminUpdateSubjectStatusRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoAdminUpdateSubjectStatusResponseBody> {
    return unwrapAsync(comAtprotoAdminComAtprotoAdminUpdateSubjectStatus(
      this,
      request,
      options,
    ));
  }
}
