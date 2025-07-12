# AppBskyGraphGetListBlocksResponse

## Example Usage

```typescript
import { AppBskyGraphGetListBlocksResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetListBlocksResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.AppBskyGraphGetListBlocksResponseBody](../../models/operations/appbskygraphgetlistblocksresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |