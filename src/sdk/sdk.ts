/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Actor } from "./actor.js";
import { Atproto } from "./atproto.js";
import { Chat } from "./chat.js";
import { Feed } from "./feed.js";
import { Graph } from "./graph.js";
import { Labeler } from "./labeler.js";
import { Notification } from "./notification.js";
import { Ozone } from "./ozone.js";
import { Video } from "./video.js";

export class Bluesky extends ClientSDK {
  private _actor?: Actor;
  get actor(): Actor {
    return (this._actor ??= new Actor(this._options));
  }

  private _feed?: Feed;
  get feed(): Feed {
    return (this._feed ??= new Feed(this._options));
  }

  private _graph?: Graph;
  get graph(): Graph {
    return (this._graph ??= new Graph(this._options));
  }

  private _labeler?: Labeler;
  get labeler(): Labeler {
    return (this._labeler ??= new Labeler(this._options));
  }

  private _notification?: Notification;
  get notification(): Notification {
    return (this._notification ??= new Notification(this._options));
  }

  private _video?: Video;
  get video(): Video {
    return (this._video ??= new Video(this._options));
  }

  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _atproto?: Atproto;
  get atproto(): Atproto {
    return (this._atproto ??= new Atproto(this._options));
  }

  private _ozone?: Ozone;
  get ozone(): Ozone {
    return (this._ozone ??= new Ozone(this._options));
  }
}
