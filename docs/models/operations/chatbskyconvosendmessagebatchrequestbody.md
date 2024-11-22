# ChatBskyConvoSendMessageBatchRequestBody

## Example Usage

```typescript
import { ChatBskyConvoSendMessageBatchRequestBody } from "bluesky/models/operations";

let value: ChatBskyConvoSendMessageBatchRequestBody = {
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