# AppBskyGraphGetFollowsResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetFollowsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetFollowsResponseBody = {
  subject: {
    did: "<id>",
    handle: "<value>",
  },
  follows: [
    {
      did: "<id>",
      handle: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `subject`                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `follows`                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |