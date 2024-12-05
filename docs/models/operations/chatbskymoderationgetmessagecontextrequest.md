# ChatBskyModerationGetMessageContextRequest

## Example Usage

```typescript
import { ChatBskyModerationGetMessageContextRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ChatBskyModerationGetMessageContextRequest = {
  messageId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `convoId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Conversation that the message is from. NOTE: this field will eventually be required. |
| `messageId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `before`                                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `after`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |