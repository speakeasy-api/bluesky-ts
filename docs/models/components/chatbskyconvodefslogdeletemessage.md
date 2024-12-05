# ChatBskyConvoDefsLogDeleteMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogDeleteMessage } from "@speakeasy-api/bluesky/models/components";

let value: ChatBskyConvoDefsLogDeleteMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2024-10-24T21:35:04.220Z"),
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `rev`                                                 | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `convoId`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `message`                                             | *components.ChatBskyConvoDefsLogDeleteMessageMessage* | :heavy_check_mark:                                    | N/A                                                   |