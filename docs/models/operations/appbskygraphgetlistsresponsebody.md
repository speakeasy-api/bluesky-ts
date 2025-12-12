# AppBskyGraphGetListsResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetListsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetListsResponseBody = {
  lists: [
    {
      uri: "https://trusty-pupil.name/",
      cid: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      name: "<value>",
      purpose: "<value>",
      indexedAt: new Date("2024-05-16T10:19:56.425Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `lists`                                                                                      | [components.AppBskyGraphDefsListView](../../models/components/appbskygraphdefslistview.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |