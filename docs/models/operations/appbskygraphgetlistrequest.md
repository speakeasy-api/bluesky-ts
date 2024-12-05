# AppBskyGraphGetListRequest

## Example Usage

```typescript
import { AppBskyGraphGetListRequest } from "bluesky/models/operations";

let value: AppBskyGraphGetListRequest = {
  list: "https://that-premeditation.biz/",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `list`                                            | *string*                                          | :heavy_check_mark:                                | Reference (AT-URI) of the list record to hydrate. |
| `limit`                                           | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `cursor`                                          | *string*                                          | :heavy_minus_sign:                                | N/A                                               |