# ToolsOzoneCommunicationListTemplatesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneCommunicationListTemplatesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneCommunicationListTemplatesResponseBody = {
  communicationTemplates: [
    {
      id: "<id>",
      name: "<value>",
      contentMarkdown: "<value>",
      disabled: false,
      lastUpdatedBy: "<id>",
      createdAt: new Date("2024-12-16T02:21:59.446Z"),
      updatedAt: new Date("2024-11-27T23:49:54.191Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `communicationTemplates`                                                                                                   | [components.ToolsOzoneCommunicationDefsTemplateView](../../models/components/toolsozonecommunicationdefstemplateview.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |