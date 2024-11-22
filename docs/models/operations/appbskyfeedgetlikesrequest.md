# AppBskyFeedGetLikesRequest

## Example Usage

```typescript
import { AppBskyFeedGetLikesRequest } from "bluesky/models/operations";

let value: AppBskyFeedGetLikesRequest = {
  uri: "https://hateful-humor.net",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `uri`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | AT-URI of the subject (eg, a post record).                                    |
| `cid`                                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | CID of the subject record (aka, specific version of record), to filter likes. |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `cursor`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |