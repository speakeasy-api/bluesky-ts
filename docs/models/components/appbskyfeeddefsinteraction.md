# AppBskyFeedDefsInteraction

## Example Usage

```typescript
import { AppBskyFeedDefsInteraction } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyFeedDefsInteraction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `item`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `event`                                                                                       | [components.Event](../../models/components/event.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `feedContext`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Context on a feed item that was originally supplied by the feed generator on getFeedSkeleton. |