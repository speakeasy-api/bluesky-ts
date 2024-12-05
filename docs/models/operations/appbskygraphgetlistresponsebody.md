# AppBskyGraphGetListResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetListResponseBody } from "bluesky/models/operations";

let value: AppBskyGraphGetListResponseBody = {
  list: {
    uri: "https://impartial-swine.name",
    cid: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    name: "<value>",
    purpose: "<value>",
    indexedAt: new Date("2024-08-24T09:10:01.050Z"),
  },
  items: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `list`                                                                                               | [components.AppBskyGraphDefsListView](../../models/components/appbskygraphdefslistview.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `items`                                                                                              | [components.AppBskyGraphDefsListItemView](../../models/components/appbskygraphdefslistitemview.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |