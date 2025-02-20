# ChatBskyConvoSendMessageBatchBody

## Example Usage

```typescript
import { ChatBskyConvoSendMessageBatchBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoSendMessageBatchBody = {
  items: [
    {
      convoId: "<id>",
      message: {
        text: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                                  | [components.ChatBskyConvoSendMessageBatchBatchItem](../../models/components/chatbskyconvosendmessagebatchbatchitem.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |