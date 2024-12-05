# AppBskyGraphDefsListItemView

## Example Usage

```typescript
import { AppBskyGraphDefsListItemView } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyGraphDefsListItemView = {
  uri: "https://hidden-printer.name/",
  subject: {
    did: "<id>",
    handle: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `uri`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `subject`                                                                                        | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |