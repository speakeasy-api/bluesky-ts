# AppBskyActorDefsSavedFeedsPref

## Example Usage

```typescript
import { AppBskyActorDefsSavedFeedsPref } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyActorDefsSavedFeedsPref = {
  pinned: [
    "https://little-sauerkraut.name",
    "https://striking-procurement.info",
  ],
  saved: [
    "https://cheap-overheard.name",
    "https://unsightly-vein.info/",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `pinned`           | *string*[]         | :heavy_check_mark: | N/A                |
| `saved`            | *string*[]         | :heavy_check_mark: | N/A                |
| `timelineIndex`    | *number*           | :heavy_minus_sign: | N/A                |