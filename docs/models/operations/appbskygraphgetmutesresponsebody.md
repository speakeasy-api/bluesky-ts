# AppBskyGraphGetMutesResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetMutesResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetMutesResponseBody = {
  mutes: [
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
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `mutes`                                                                                            | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |