# AppBskyFeedGetLikesLike

## Example Usage

```typescript
import { AppBskyFeedGetLikesLike } from "bluesky/models/components";

let value: AppBskyFeedGetLikesLike = {
  indexedAt: new Date("2024-01-10T22:30:43.334Z"),
  createdAt: new Date("2022-01-24T09:49:07.665Z"),
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