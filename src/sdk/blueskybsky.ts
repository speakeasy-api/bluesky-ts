/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { BlueskyActor } from "./blueskyactor.js";
import { Convo } from "./convo.js";
import { Moderation } from "./moderation.js";

export class BlueskyBsky extends ClientSDK {
  private _actor?: BlueskyActor;
  get actor(): BlueskyActor {
    return (this._actor ??= new BlueskyActor(this._options));
  }

  private _convo?: Convo;
  get convo(): Convo {
    return (this._convo ??= new Convo(this._options));
  }

  private _moderation?: Moderation;
  get moderation(): Moderation {
    return (this._moderation ??= new Moderation(this._options));
  }
}
