# ChatBskyConvoSendMessageBody

## Example Usage

```typescript
import { ChatBskyConvoSendMessageBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoSendMessageBody = {
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