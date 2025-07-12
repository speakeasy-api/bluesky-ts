# ToolsOzoneCommunicationListTemplatesResponse

OK

## Example Usage

```typescript
import { ToolsOzoneCommunicationListTemplatesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneCommunicationListTemplatesResponse = {
  communicationTemplates: [
    {
      id: "<id>",
      name: "<value>",
      contentMarkdown: "<value>",
      disabled: false,
      lastUpdatedBy: "<id>",
      createdAt: new Date("2024-11-04T18:31:57.829Z"),
      updatedAt: new Date("2024-12-26T19:23:38.071Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `communicationTemplates`                                                                                                   | [components.ToolsOzoneCommunicationDefsTemplateView](../../models/components/toolsozonecommunicationdefstemplateview.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |