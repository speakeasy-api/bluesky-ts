# AppBskyActorSearchActorsRequest

## Example Usage

```typescript
import { AppBskyActorSearchActorsRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyActorSearchActorsRequest = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `q`                                                                                                                | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `cursor`                                                                                                           | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |