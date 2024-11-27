# ChatBskyConvoDefsMessageView

## Example Usage

```typescript
import { ChatBskyConvoDefsMessageView } from "bluesky/models/components";

let value: ChatBskyConvoDefsMessageView = {
  id: "<id>",
  rev: "<value>",
  text: "<value>",
  sender: {
    did: "<id>",
  },
  sentAt: new Date("2023-08-01T03:15:58.659Z"),
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rev`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `facets`                                                                                                       | [components.AppBskyRichtextFacet](../../models/components/appbskyrichtextfacet.md)[]                           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `embed`                                                                                                        | *components.ChatBskyConvoDefsMessageViewEmbed*                                                                 | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sender`                                                                                                       | [components.ChatBskyConvoDefsMessageViewSender](../../models/components/chatbskyconvodefsmessageviewsender.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sentAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |