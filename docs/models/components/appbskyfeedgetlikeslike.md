# AppBskyFeedGetLikesLike

## Example Usage

```typescript
import { AppBskyFeedGetLikesLike } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyFeedGetLikesLike = {
  indexedAt: new Date("2024-01-12T08:34:33.723Z"),
  createdAt: new Date("2024-10-09T18:22:17.762Z"),
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