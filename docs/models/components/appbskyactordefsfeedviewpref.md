# AppBskyActorDefsFeedViewPref

## Example Usage

```typescript
import { AppBskyActorDefsFeedViewPref } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyActorDefsFeedViewPref = {
  feed: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `feed`                                                          | *string*                                                        | :heavy_check_mark:                                              | The URI of the feed, or an identifier which describes the feed. |
| `hideReplies`                                                   | *boolean*                                                       | :heavy_minus_sign:                                              | Hide replies in the feed.                                       |
| `hideRepliesByUnfollowed`                                       | *boolean*                                                       | :heavy_minus_sign:                                              | Hide replies in the feed if they are not by followed users.     |
| `hideRepliesByLikeCount`                                        | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `hideReposts`                                                   | *boolean*                                                       | :heavy_minus_sign:                                              | Hide reposts in the feed.                                       |
| `hideQuotePosts`                                                | *boolean*                                                       | :heavy_minus_sign:                                              | Hide quote posts in the feed.                                   |