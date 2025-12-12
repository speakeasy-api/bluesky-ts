# ChatBskyConvoSendMessageRequest

## Example Usage

```typescript
import { ChatBskyConvoSendMessageRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoSendMessageRequest = {
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