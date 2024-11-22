# AppBskyGraphGetListsRequest

## Example Usage

```typescript
import { AppBskyGraphGetListsRequest } from "bluesky/models/operations";

let value: AppBskyGraphGetListsRequest = {
  actor: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `actor`                                      | *string*                                     | :heavy_check_mark:                           | The account (actor) to enumerate lists from. |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `cursor`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |