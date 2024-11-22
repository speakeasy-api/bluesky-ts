# ChatBskyConvoDefsLogDeleteMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogDeleteMessage } from "bluesky/models/components";

let value: ChatBskyConvoDefsLogDeleteMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-08-24T21:19:59.665Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `rev`                                                 | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `convoId`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `message`                                             | *components.ChatBskyConvoDefsLogDeleteMessageMessage* | :heavy_check_mark:                                    | N/A                                                   |