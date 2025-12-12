# AppBskyGraphGetListResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetListResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetListResponseBody = {
  list: {
    uri: "https://moist-silk.com/",
    cid: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    name: "<value>",
    purpose: "<value>",
    indexedAt: new Date("2025-08-28T03:04:04.412Z"),
  },
  items: [
    {
      uri: "https://gaseous-metal.com/",
      subject: {
        did: "<id>",
        handle: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `list`                                                                                               | [components.AppBskyGraphDefsListView](../../models/components/appbskygraphdefslistview.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `items`                                                                                              | [components.AppBskyGraphDefsListItemView](../../models/components/appbskygraphdefslistitemview.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |