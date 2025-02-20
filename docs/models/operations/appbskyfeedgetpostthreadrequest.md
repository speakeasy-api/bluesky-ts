# AppBskyFeedGetPostThreadRequest

## Example Usage

```typescript
import { AppBskyFeedGetPostThreadRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetPostThreadRequest = {
  uri: "https://close-paintwork.com",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `uri`                                                             | *string*                                                          | :heavy_check_mark:                                                | Reference (AT-URI) to post record.                                |
| `depth`                                                           | *number*                                                          | :heavy_minus_sign:                                                | How many levels of reply depth should be included in response.    |
| `parentHeight`                                                    | *number*                                                          | :heavy_minus_sign:                                                | How many levels of parent (and grandparent, etc) post to include. |