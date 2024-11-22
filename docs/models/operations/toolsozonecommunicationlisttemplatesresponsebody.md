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
      createdAt: new Date("2023-11-05T10:52:46.701Z"),
      updatedAt: new Date("2022-02-06T05:59:38.595Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `communicationTemplates`                                                                                                   | [components.ToolsOzoneCommunicationDefsTemplateView](../../models/components/toolsozonecommunicationdefstemplateview.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |