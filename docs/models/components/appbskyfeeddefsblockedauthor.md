# AppBskyFeedDefsBlockedAuthor

## Example Usage

```typescript
import { AppBskyFeedDefsBlockedAuthor } from "bluesky/models/components";

let value: AppBskyFeedDefsBlockedAuthor = {
  did: "<id>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `did`                                                                                                                           | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `viewer`                                                                                                                        | [components.AppBskyActorDefsViewerState](../../models/components/appbskyactordefsviewerstate.md)                                | :heavy_minus_sign:                                                                                                              | Metadata about the requesting account's relationship with the subject account. Only has meaningful content for authed requests. |