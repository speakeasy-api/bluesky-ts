# AppBskyFeedGetListFeedRequest

## Example Usage

```typescript
import { AppBskyFeedGetListFeedRequest } from "bluesky/models/operations";

let value: AppBskyFeedGetListFeedRequest = {
  list: "https://quarrelsome-disappointment.info/",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `list`                                 | *string*                               | :heavy_check_mark:                     | Reference (AT-URI) to the list record. |
| `limit`                                | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `cursor`                               | *string*                               | :heavy_minus_sign:                     | N/A                                    |