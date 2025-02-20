# ComAtprotoLabelDefsLabelValueDefinitionStrings

Strings which describe the label in the UI, localized into a specific language.

## Example Usage

```typescript
import { ComAtprotoLabelDefsLabelValueDefinitionStrings } from "@speakeasy-sdks/bluesky/models/components";

let value: ComAtprotoLabelDefsLabelValueDefinitionStrings = {
  lang: "<value>",
  name: "<value>",
  description: "with close jeopardise probable",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lang`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The code of the language these strings are written in.                    |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | A short human-readable name for the label.                                |
| `description`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | A longer description of what the label means and why it might be applied. |