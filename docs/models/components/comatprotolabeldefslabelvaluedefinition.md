# ComAtprotoLabelDefsLabelValueDefinition

Declares a label value and its expected interpretations and behaviors.

## Example Usage

```typescript
import { ComAtprotoLabelDefsLabelValueDefinition } from "@speakeasy-api/bluesky/models/components";

let value: ComAtprotoLabelDefsLabelValueDefinition = {
  identifier: "<value>",
  severity: "none",
  blurs: "media",
  locales: [
    {
      lang: "<value>",
      name: "<value>",
      description: "whereas merit loosely fumigate duster",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+).                                                 |
| `severity`                                                                                                                                               | [components.Severity](../../models/components/severity.md)                                                                                               | :heavy_check_mark:                                                                                                                                       | How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing. |
| `blurs`                                                                                                                                                  | [components.Blurs](../../models/components/blurs.md)                                                                                                     | :heavy_check_mark:                                                                                                                                       | What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.        |
| `defaultSetting`                                                                                                                                         | [components.DefaultSetting](../../models/components/defaultsetting.md)                                                                                   | :heavy_minus_sign:                                                                                                                                       | The default setting for this label.                                                                                                                      |
| `adultOnly`                                                                                                                                              | *boolean*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                       | Does the user need to have adult content enabled in order to configure this label?                                                                       |
| `locales`                                                                                                                                                | [components.ComAtprotoLabelDefsLabelValueDefinitionStrings](../../models/components/comatprotolabeldefslabelvaluedefinitionstrings.md)[]                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |