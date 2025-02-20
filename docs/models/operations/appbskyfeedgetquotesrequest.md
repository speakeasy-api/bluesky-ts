# AppBskyFeedGetQuotesRequest

## Example Usage

```typescript
import { AppBskyFeedGetQuotesRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetQuotesRequest = {
  uri: "https://oily-hundred.org/",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `uri`                                                                           | *string*                                                                        | :heavy_check_mark:                                                              | Reference (AT-URI) of post record                                               |
| `cid`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | If supplied, filters to quotes of specific version (by CID) of the post record. |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `cursor`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |