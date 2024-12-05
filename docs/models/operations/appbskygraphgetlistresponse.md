# AppBskyGraphGetListResponse

## Example Usage

```typescript
import { AppBskyGraphGetListResponse } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyGraphGetListResponse = {
  result: {
    list: {
      uri: "https://serpentine-knight.org",
      cid: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      name: "<value>",
      purpose: "<value>",
      indexedAt: new Date("2023-12-07T19:31:05.522Z"),
    },
    items: [],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.AppBskyGraphGetListResponseBody](../../models/operations/appbskygraphgetlistresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |