# AppBskyActorDefsViewerState

Metadata about the requesting account's relationship with the subject account. Only has meaningful content for authed requests.

## Example Usage

```typescript
import { AppBskyActorDefsViewerState } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyActorDefsViewerState = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `muted`                                                                                                | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `mutedByList`                                                                                          | [components.AppBskyGraphDefsListViewBasic](../../models/components/appbskygraphdefslistviewbasic.md)   | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blockedBy`                                                                                            | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blocking`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `blockingByList`                                                                                       | [components.AppBskyGraphDefsListViewBasic](../../models/components/appbskygraphdefslistviewbasic.md)   | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `following`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `followedBy`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `knownFollowers`                                                                                       | [components.AppBskyActorDefsKnownFollowers](../../models/components/appbskyactordefsknownfollowers.md) | :heavy_minus_sign:                                                                                     | The subject's followers whom you also follow                                                           |