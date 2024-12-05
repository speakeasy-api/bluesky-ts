# AppBskyFeedGetRepostedByRequest

## Example Usage

```typescript
import { AppBskyFeedGetRepostedByRequest } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedGetRepostedByRequest = {
  uri: "https://querulous-chap.biz/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uri`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Reference (AT-URI) of post record                                                |
| `cid`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | If supplied, filters to reposts of specific version (by CID) of the post record. |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `cursor`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |