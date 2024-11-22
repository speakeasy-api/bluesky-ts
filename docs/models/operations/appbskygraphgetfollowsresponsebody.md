# AppBskyGraphGetFollowsResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetFollowsResponseBody } from "bluesky/models/operations";

let value: AppBskyGraphGetFollowsResponseBody = {
  subject: {
    did: "<id>",
    handle: "<value>",
  },
  follows: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `subject`                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `follows`                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |