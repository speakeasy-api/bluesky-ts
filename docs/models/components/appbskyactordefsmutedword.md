# AppBskyActorDefsMutedWord

A word that the account owner has muted.

## Example Usage

```typescript
import { AppBskyActorDefsMutedWord } from "bluesky/models/components";

let value: AppBskyActorDefsMutedWord = {
  value: "<value>",
  targets: [
    "tag",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The muted word itself.                                                                                     |
| `targets`                                                                                                  | [components.AppBskyActorDefsMutedWordTarget](../../models/components/appbskyactordefsmutedwordtarget.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actorTarget`                                                                                              | [components.ActorTarget](../../models/components/actortarget.md)                                           | :heavy_minus_sign:                                                                                         | Groups of users to apply the muted word to. If undefined, applies to all users.                            |
| `expiresAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | The date and time at which the muted word will expire and no longer be applied.                            |