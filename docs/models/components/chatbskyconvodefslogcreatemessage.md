# ChatBskyConvoDefsLogCreateMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogCreateMessage } from "bluesky/models/components";

let value: ChatBskyConvoDefsLogCreateMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2024-01-25T19:07:43.861Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `rev`                | *string*             | :heavy_check_mark:   | N/A                  |
| `convoId`            | *string*             | :heavy_check_mark:   | N/A                  |
| `message`            | *components.Message* | :heavy_check_mark:   | N/A                  |