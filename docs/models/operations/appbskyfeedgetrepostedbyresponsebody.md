# AppBskyFeedGetRepostedByResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetRepostedByResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetRepostedByResponseBody = {
  uri: "https://white-digestive.name",
  repostedBy: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `uri`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cid`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `repostedBy`                                                                                       | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |