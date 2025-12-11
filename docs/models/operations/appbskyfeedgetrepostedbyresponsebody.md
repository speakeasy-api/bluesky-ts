# AppBskyFeedGetRepostedByResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetRepostedByResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetRepostedByResponseBody = {
  uri: "https://mealy-bowling.name/",
  repostedBy: [
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
| `uri`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cid`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `repostedBy`                                                                                       | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |