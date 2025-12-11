# AppBskyFeedGetLikesLike

## Example Usage

```typescript
import { AppBskyFeedGetLikesLike } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedGetLikesLike = {
  indexedAt: new Date("2025-05-18T18:21:26.381Z"),
  createdAt: new Date("2025-03-30T20:23:29.117Z"),
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