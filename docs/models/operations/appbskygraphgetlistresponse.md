# AppBskyGraphGetListResponse

## Example Usage

```typescript
import { AppBskyGraphGetListResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetListResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.AppBskyGraphGetListResponseBody](../../models/operations/appbskygraphgetlistresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |