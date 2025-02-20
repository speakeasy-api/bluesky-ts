# AppBskyFeedDefsViewerState

Metadata about the requesting account's relationship with the subject content. Only has meaningful content for authed requests.

## Example Usage

```typescript
import { AppBskyFeedDefsViewerState } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedDefsViewerState = {};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `repost`            | *string*            | :heavy_minus_sign:  | N/A                 |
| `like`              | *string*            | :heavy_minus_sign:  | N/A                 |
| `threadMuted`       | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `replyDisabled`     | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `embeddingDisabled` | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `pinned`            | *boolean*           | :heavy_minus_sign:  | N/A                 |