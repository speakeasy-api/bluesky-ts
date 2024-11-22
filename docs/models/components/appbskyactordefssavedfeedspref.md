# AppBskyActorDefsSavedFeedsPref

## Example Usage

```typescript
import { AppBskyActorDefsSavedFeedsPref } from "bluesky/models/components";

let value: AppBskyActorDefsSavedFeedsPref = {
  pinned: [
    "https://guilty-relative.net/",
  ],
  saved: [
    "https://scary-creature.info",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `pinned`           | *string*[]         | :heavy_check_mark: | N/A                |
| `saved`            | *string*[]         | :heavy_check_mark: | N/A                |
| `timelineIndex`    | *number*           | :heavy_minus_sign: | N/A                |