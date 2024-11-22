# AppBskyRichtextFacetByteSlice

Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets.

## Example Usage

```typescript
import { AppBskyRichtextFacetByteSlice } from "bluesky/models/components";

let value: AppBskyRichtextFacetByteSlice = {
  byteStart: 886305,
  byteEnd: 446394,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `byteStart`        | *number*           | :heavy_check_mark: | N/A                |
| `byteEnd`          | *number*           | :heavy_check_mark: | N/A                |