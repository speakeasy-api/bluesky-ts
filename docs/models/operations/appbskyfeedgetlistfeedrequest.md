# AppBskyFeedGetListFeedRequest

## Example Usage

```typescript
import { AppBskyFeedGetListFeedRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetListFeedRequest = {
  list: "https://wonderful-sediment.info",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `list`                                 | *string*                               | :heavy_check_mark:                     | Reference (AT-URI) to the list record. |
| `limit`                                | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `cursor`                               | *string*                               | :heavy_minus_sign:                     | N/A                                    |