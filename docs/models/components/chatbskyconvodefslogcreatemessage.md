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
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2024-12-13T20:14:50.509Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `rev`                | *string*             | :heavy_check_mark:   | N/A                  |
| `convoId`            | *string*             | :heavy_check_mark:   | N/A                  |
| `message`            | *components.Message* | :heavy_check_mark:   | N/A                  |