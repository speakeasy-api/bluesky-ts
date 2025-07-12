# AppBskyGraphGetActorStarterPacksResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetActorStarterPacksResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetActorStarterPacksResponseBody = {
  starterPacks: [
    {
      uri: "https://parallel-flat.com",
      cid: "<id>",
      record: "<value>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      indexedAt: new Date("2025-05-23T15:47:08.506Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `starterPacks`                                                                                                       | [components.AppBskyGraphDefsStarterPackViewBasic](../../models/components/appbskygraphdefsstarterpackviewbasic.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |