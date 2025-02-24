/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsDeleteMember } from "../funcs/teamsDeleteMember.js";
import { teamsUpdateMember } from "../funcs/teamsUpdateMember.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Teams extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete a member from ozone team. Requires admin role.
   */
  async deleteMember(
    request: operations.ToolsOzoneTeamDeleteMemberBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(teamsDeleteMember(
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
   * Update a member in the ozone service. Requires admin role.
   */
  async updateMember(
    request: operations.ToolsOzoneTeamUpdateMemberBody,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneTeamDefsMember> {
    return unwrapAsync(teamsUpdateMember(
      this,
      request,
      options,
    ));
  }
}
