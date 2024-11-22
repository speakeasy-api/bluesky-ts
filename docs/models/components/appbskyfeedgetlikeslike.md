# AppBskyFeedGetLikesLike

## Example Usage

```typescript
import { AppBskyFeedGetLikesLike } from "bluesky/models/components";

let value: AppBskyFeedGetLikesLike = {
  indexedAt: new Date("2024-04-03T03:09:12.985Z"),
  createdAt: new Date("2022-06-20T22:50:36.308Z"),
  actor: {
    did: "<id>",
    handle: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `indexedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `actor`                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |