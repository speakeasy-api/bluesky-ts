# AppBskyRichtextFacetMention

Facet feature for mention of another account. The text is usually a handle, including a '@' prefix, but the facet reference is a DID.

## Example Usage

```typescript
import { AppBskyRichtextFacetMention } from "bluesky/models/components";

let value: AppBskyRichtextFacetMention = {
  did: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `did`              | *string*           | :heavy_check_mark: | N/A                |