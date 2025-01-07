# ChatBskyConvoDefsLogCreateMessage

## Example Usage

```typescript
import { ChatBskyConvoDefsLogCreateMessage } from "@speakeasy-api/bluesky/models/components";

let value: ChatBskyConvoDefsLogCreateMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-11-19T12:22:37.852Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `rev`                | *string*             | :heavy_check_mark:   | N/A                  |
| `convoId`            | *string*             | :heavy_check_mark:   | N/A                  |
| `message`            | *components.Message* | :heavy_check_mark:   | N/A                  |