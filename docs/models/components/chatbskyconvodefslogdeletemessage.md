# ChatBskyConvoDefsLogDeleteMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogDeleteMessage } from "@speakeasy-sdks/bluesky/models/components";

let value: ChatBskyConvoDefsLogDeleteMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-06-27T19:34:07.225Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `rev`                                                 | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `convoId`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `message`                                             | *components.ChatBskyConvoDefsLogDeleteMessageMessage* | :heavy_check_mark:                                    | N/A                                                   |