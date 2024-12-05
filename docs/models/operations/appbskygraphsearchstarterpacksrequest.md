# AppBskyGraphSearchStarterPacksRequest

## Example Usage

```typescript
import { AppBskyGraphSearchStarterPacksRequest } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyGraphSearchStarterPacksRequest = {
  q: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `q`                                                                                                                | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `cursor`                                                                                                           | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |