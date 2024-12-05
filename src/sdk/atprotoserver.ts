/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoServerActivateAccount } from "../funcs/atprotoServerActivateAccount.js";
import { atprotoServerCreateAccount } from "../funcs/atprotoServerCreateAccount.js";
import { atprotoServerCreateAppPassword } from "../funcs/atprotoServerCreateAppPassword.js";
import { atprotoServerCreateInviteCode } from "../funcs/atprotoServerCreateInviteCode.js";
import { atprotoServerCreateInviteCodes } from "../funcs/atprotoServerCreateInviteCodes.js";
import { atprotoServerDeleteAccount } from "../funcs/atprotoServerDeleteAccount.js";
import { atprotoServerDeleteSession } from "../funcs/atprotoServerDeleteSession.js";
import { atprotoServerDescribe } from "../funcs/atprotoServerDescribe.js";
import { atprotoServerRefreshSession } from "../funcs/atprotoServerRefreshSession.js";
import { atprotoServerRequestEmailConfirmation } from "../funcs/atprotoServerRequestEmailConfirmation.js";
import { atprotoServerRequestPasswordReset } from "../funcs/atprotoServerRequestPasswordReset.js";
import { atprotoServerResetPassword } from "../funcs/atprotoServerResetPassword.js";
import { atprotoServerRevokeAppPassword } from "../funcs/atprotoServerRevokeAppPassword.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AtprotoServer extends ClientSDK {
  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
   */
  async activateAccount(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerActivateAccount(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Create an account. Implemented by PDS.
   */
  async createAccount(
    request: operations.ComAtprotoServerCreateAccountRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoServerCreateAccountResponseBody> {
    return unwrapAsync(atprotoServerCreateAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Create an App Password.
   */
  async createAppPassword(
    request: operations.ComAtprotoServerCreateAppPasswordRequestBody,
    options?: RequestOptions,
  ): Promise<components.ComAtprotoServerCreateAppPasswordAppPassword> {
    return unwrapAsync(atprotoServerCreateAppPassword(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Create an invite code.
   */
  async createInviteCode(
    request: operations.ComAtprotoServerCreateInviteCodeRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoServerCreateInviteCodeResponseBody> {
    return unwrapAsync(atprotoServerCreateInviteCode(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Create invite codes.
   */
  async createInviteCodes(
    request: operations.ComAtprotoServerCreateInviteCodesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoServerCreateInviteCodesResponseBody> {
    return unwrapAsync(atprotoServerCreateInviteCodes(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.
   */
  async deleteAccount(
    request: operations.ComAtprotoServerDeleteAccountRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerDeleteAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete the current session. Requires auth.
   */
  async deleteSession(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerDeleteSession(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Describes the server's account creation requirements and capabilities. Implemented by PDS.
   */
  async describe(
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoServerDescribeServerResponseBody> {
    return unwrapAsync(atprotoServerDescribe(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').
   */
  async refreshSession(
    options?: RequestOptions,
  ): Promise<operations.ComAtprotoServerRefreshSessionResponseBody> {
    return unwrapAsync(atprotoServerRefreshSession(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Request an email with a code to confirm ownership of email.
   */
  async requestEmailConfirmation(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerRequestEmailConfirmation(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Initiate a user account password reset via email.
   */
  async requestPasswordReset(
    request: operations.ComAtprotoServerRequestPasswordResetRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerRequestPasswordReset(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Reset a user account password using a token.
   */
  async resetPassword(
    request: operations.ComAtprotoServerResetPasswordRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerResetPassword(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Revoke an App Password by name.
   */
  async revokeAppPassword(
    request: operations.ComAtprotoServerRevokeAppPasswordRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(atprotoServerRevokeAppPassword(
      this,
      request,
      options,
    ));
  }
}
