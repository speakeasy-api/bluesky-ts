# ChatBskyConvoSendMessageBatchBatchItem

## Example Usage

```typescript
import { ChatBskyConvoSendMessageBatchBatchItem } from "bluesky/models/components";

let value: ChatBskyConvoSendMessageBatchBatchItem = {
  convoId: "<id>",
  message: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `convoId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `message`                                                                                            | [components.ChatBskyConvoDefsMessageInput](../../models/components/chatbskyconvodefsmessageinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |