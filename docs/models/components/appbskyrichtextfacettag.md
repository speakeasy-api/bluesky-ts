# AppBskyRichtextFacetTag

Facet feature for a hashtag. The text usually includes a '#' prefix, but the facet reference should not (except in the case of 'double hash tags').

## Example Usage

```typescript
import { AppBskyRichtextFacetTag } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyRichtextFacetTag = {
  tag: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `tag`              | *string*           | :heavy_check_mark: | N/A                |