/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Admin } from "./admin.js";
import { BlueskyModeration } from "./blueskymoderation.js";
import { Identity } from "./identity.js";
import { Label } from "./label.js";
import { Repo } from "./repo.js";
import { Server } from "./server.js";
import { Sync } from "./sync.js";

export class Atproto extends ClientSDK {
  private _admin?: Admin;
  get admin(): Admin {
    return (this._admin ??= new Admin(this._options));
  }

  private _identity?: Identity;
  get identity(): Identity {
    return (this._identity ??= new Identity(this._options));
  }

  private _label?: Label;
  get label(): Label {
    return (this._label ??= new Label(this._options));
  }

  private _moderation?: BlueskyModeration;
  get moderation(): BlueskyModeration {
    return (this._moderation ??= new BlueskyModeration(this._options));
  }

  private _repo?: Repo;
  get repo(): Repo {
    return (this._repo ??= new Repo(this._options));
  }

  private _server?: Server;
  get server(): Server {
    return (this._server ??= new Server(this._options));
  }

  private _sync?: Sync;
  get sync(): Sync {
    return (this._sync ??= new Sync(this._options));
  }
}
