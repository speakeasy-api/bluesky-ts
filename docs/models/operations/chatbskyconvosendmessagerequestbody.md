# ChatBskyConvoSendMessageRequestBody

## Example Usage

```typescript
import { ChatBskyConvoSendMessageRequestBody } from "bluesky/models/operations";

let value: ChatBskyConvoSendMessageRequestBody = {
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