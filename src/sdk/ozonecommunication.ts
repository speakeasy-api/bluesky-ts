/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ozoneCommunicationDelete } from "../funcs/ozoneCommunicationDelete.js";
import { ozoneCommunicationListTemplates } from "../funcs/ozoneCommunicationListTemplates.js";
import { ozoneCommunicationUpdateTemplate } from "../funcs/ozoneCommunicationUpdateTemplate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class OzoneCommunication extends ClientSDK {
  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Delete a communication template.
   */
  async delete(
    request: operations.ToolsOzoneCommunicationDeleteTemplateBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(ozoneCommunicationDelete(
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
   * Get list of all communication templates.
   */
  async listTemplates(
    options?: RequestOptions,
  ): Promise<operations.ToolsOzoneCommunicationListTemplatesResponseBody> {
    return unwrapAsync(ozoneCommunicationListTemplates(
      this,
      options,
    ));
  }

  /**
   * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   *
   * Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.
   */
  async updateTemplate(
    request: operations.ToolsOzoneCommunicationUpdateTemplateBody,
    options?: RequestOptions,
  ): Promise<components.ToolsOzoneCommunicationDefsTemplateView> {
    return unwrapAsync(ozoneCommunicationUpdateTemplate(
      this,
      request,
      options,
    ));
  }
}
