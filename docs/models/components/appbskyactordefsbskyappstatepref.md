# AppBskyActorDefsBskyAppStatePref

A grab bag of state that's specific to the bsky.app program. Third-party apps shouldn't use this.

## Example Usage

```typescript
import { AppBskyActorDefsBskyAppStatePref } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyActorDefsBskyAppStatePref = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `activeProgressGuide`                                                                                                      | [components.AppBskyActorDefsBskyAppProgressGuide](../../models/components/appbskyactordefsbskyappprogressguide.md)         | :heavy_minus_sign:                                                                                                         | If set, an active progress guide. Once completed, can be set to undefined. Should have unspecced fields tracking progress. |
| `queuedNudges`                                                                                                             | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `nuxs`                                                                                                                     | [components.AppBskyActorDefsNux](../../models/components/appbskyactordefsnux.md)[]                                         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |