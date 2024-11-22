/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Actor } from "./actor.js";
import { Feed } from "./feed.js";
import { Graph } from "./graph.js";
import { Labeler } from "./labeler.js";
import { Notification } from "./notification.js";
import { Video } from "./video.js";

export class Bsky extends ClientSDK {
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
}
