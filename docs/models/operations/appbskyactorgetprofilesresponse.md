# AppBskyActorGetProfilesResponse

OK

## Example Usage

```typescript
import { AppBskyActorGetProfilesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyActorGetProfilesResponse = {
  profiles: [
    {
      did: "<id>",
      handle: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `profiles`                                                                                                         | [components.AppBskyActorDefsProfileViewDetailed](../../models/components/appbskyactordefsprofileviewdetailed.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |