/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { convoDeleteMessageForSelf } from "../funcs/convoDeleteMessageForSelf.js";
import { convoList } from "../funcs/convoList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Convo extends ClientSDK {
  /**
   * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   */
  async deleteMessageForSelf(
    request: operations.ChatBskyConvoDeleteMessageForSelfBody,
    options?: RequestOptions,
  ): Promise<components.ChatBskyConvoDefsDeletedMessageView> {
    return unwrapAsync(convoDeleteMessageForSelf(
      this,
      request,
      options,
    ));
  }

  /**
   * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
   *
   * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
   */
  async list(
    request?: operations.ChatBskyConvoListConvosRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ChatBskyConvoListConvosResponse, { cursor: string }>
  > {
    return unwrapResultIterator(convoList(
      this,
      request,
      options,
    ));
  }
}
