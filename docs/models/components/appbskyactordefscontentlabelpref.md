# AppBskyActorDefsContentLabelPref

## Example Usage

```typescript
import { AppBskyActorDefsContentLabelPref } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyActorDefsContentLabelPref = {
  label: "<value>",
  visibility: "hide",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `labelerDid`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Which labeler does this preference apply to? If undefined, applies globally. |
| `label`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `visibility`                                                                 | [components.Visibility](../../models/components/visibility.md)               | :heavy_check_mark:                                                           | N/A                                                                          |