# ChatBskyConvoDefsLogCreateMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogCreateMessage } from "@speakeasy-sdks/bluesky/models/components";

let value: ChatBskyConvoDefsLogCreateMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2024-12-15T12:06:50.393Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `rev`                                                 | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `convoId`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `message`                                             | *components.ChatBskyConvoDefsLogCreateMessageMessage* | :heavy_check_mark:                                    | N/A                                                   |