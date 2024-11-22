# ToolsOzoneCommunicationUpdateTemplateRequestBody

## Example Usage

```typescript
import { ToolsOzoneCommunicationUpdateTemplateRequestBody } from "bluesky/models/operations";

let value: ToolsOzoneCommunicationUpdateTemplateRequestBody = {
  id: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | ID of the template to be updated.                                               |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the template.                                                           |
| `lang`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Message language.                                                               |
| `contentMarkdown`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | Content of the template, markdown supported, can contain variable placeholders. |
| `subject`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Subject of the message, used in emails.                                         |
| `updatedBy`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | DID of the user who is updating the template.                                   |
| `disabled`                                                                      | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |