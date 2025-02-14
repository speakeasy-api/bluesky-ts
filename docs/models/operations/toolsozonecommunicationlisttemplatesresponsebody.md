# ToolsOzoneCommunicationListTemplatesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneCommunicationListTemplatesResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneCommunicationListTemplatesResponseBody = {
  communicationTemplates: [
    {
      id: "<id>",
      name: "<value>",
      contentMarkdown: "<value>",
      disabled: false,
      lastUpdatedBy: "<id>",
      createdAt: new Date("2023-02-20T10:10:34.700Z"),
      updatedAt: new Date("2023-09-12T23:01:13.510Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `communicationTemplates`                                                                                                   | [components.ToolsOzoneCommunicationDefsTemplateView](../../models/components/toolsozonecommunicationdefstemplateview.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |