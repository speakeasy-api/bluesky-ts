# AppBskyGraphGetFollowsResponse

## Example Usage

```typescript
import { AppBskyGraphGetFollowsResponse } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyGraphGetFollowsResponse = {
  result: {
    subject: {
      did: "<id>",
      handle: "<value>",
    },
    follows: [],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.AppBskyGraphGetFollowsResponseBody](../../models/operations/appbskygraphgetfollowsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |