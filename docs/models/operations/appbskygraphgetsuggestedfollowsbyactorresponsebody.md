# AppBskyGraphGetSuggestedFollowsByActorResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetSuggestedFollowsByActorResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetSuggestedFollowsByActorResponseBody = {
  suggestions: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `suggestions`                                                                                      | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `isFallback`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | If true, response has fallen-back to generic results, and is not scoped using relativeToDid        |