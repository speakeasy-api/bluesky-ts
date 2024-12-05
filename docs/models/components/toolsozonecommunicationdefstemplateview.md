# ToolsOzoneCommunicationDefsTemplateView

## Example Usage

```typescript
import { ToolsOzoneCommunicationDefsTemplateView } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneCommunicationDefsTemplateView = {
  id: "<id>",
  name: "<value>",
  contentMarkdown: "<value>",
  disabled: false,
  lastUpdatedBy: "<id>",
  createdAt: new Date("2023-08-19T12:20:52.263Z"),
  updatedAt: new Date("2024-03-21T15:17:35.920Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the template.                                                                         |
| `subject`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Content of the template, can contain markdown and variable placeholders.                      |
| `contentMarkdown`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | Subject of the message, used in emails.                                                       |
| `disabled`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lang`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Message language.                                                                             |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | DID of the user who last updated the template.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |