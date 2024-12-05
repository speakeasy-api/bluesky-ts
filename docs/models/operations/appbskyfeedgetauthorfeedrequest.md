# AppBskyFeedGetAuthorFeedRequest

## Example Usage

```typescript
import { AppBskyFeedGetAuthorFeedRequest } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedGetAuthorFeedRequest = {
  actor: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `actor`                                                   | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `cursor`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `filter`                                                  | [operations.Filter](../../models/operations/filter.md)    | :heavy_minus_sign:                                        | Combinations of post/repost types to include in response. |
| `includePins`                                             | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       |