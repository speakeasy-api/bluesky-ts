# ChatBskyConvoDefsDeletedMessageView

## Example Usage

```typescript
import { ChatBskyConvoDefsDeletedMessageView } from "bluesky/models/components";

let value: ChatBskyConvoDefsDeletedMessageView = {
  id: "<id>",
  rev: "<value>",
  sender: {
    did: "<id>",
  },
  sentAt: new Date("2022-07-05T03:25:57.186Z"),
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rev`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sender`                                                                                                       | [components.ChatBskyConvoDefsMessageViewSender](../../models/components/chatbskyconvodefsmessageviewsender.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sentAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |