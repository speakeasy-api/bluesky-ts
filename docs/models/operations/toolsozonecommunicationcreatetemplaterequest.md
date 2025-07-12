# ToolsOzoneCommunicationCreateTemplateRequest

## Example Usage

```typescript
import { ToolsOzoneCommunicationCreateTemplateRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneCommunicationCreateTemplateRequest = {
  name: "<value>",
  contentMarkdown: "<value>",
  subject: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | Name of the template.                                                           |
| `contentMarkdown`                                                               | *string*                                                                        | :heavy_check_mark:                                                              | Content of the template, markdown supported, can contain variable placeholders. |
| `subject`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | Subject of the message, used in emails.                                         |
| `lang`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Message language.                                                               |
| `createdBy`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | DID of the user who is creating the template.                                   |