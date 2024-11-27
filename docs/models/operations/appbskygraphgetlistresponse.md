# AppBskyGraphGetListResponse

## Example Usage

```typescript
import { AppBskyGraphGetListResponse } from "bluesky/models/operations";

let value: AppBskyGraphGetListResponse = {
  result: {
    list: {
      uri: "https://mature-vanadyl.name",
      cid: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      name: "<value>",
      purpose: "<value>",
      indexedAt: new Date("2023-04-10T13:04:59.510Z"),
    },
    items: [],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.AppBskyGraphGetListResponseBody](../../models/operations/appbskygraphgetlistresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |