# AppBskyGraphGetFollowersResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetFollowersResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetFollowersResponseBody = {
  subject: {
    did: "<id>",
    handle: "<value>",
  },
  followers: [
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
| `followers`                                                                                        | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |