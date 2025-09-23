# ChatBskyConvoMuteConvoResponse

OK

## Example Usage

```typescript
import { ChatBskyConvoMuteConvoResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoMuteConvoResponse = {
  convo: {
    id: "<id>",
    rev: "<value>",
    members: [
      {
        did: "<id>",
        handle: "<value>",
      },
    ],
    muted: true,
    unreadCount: 917478,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `convo`                                                                                        | [components.ChatBskyConvoDefsConvoView](../../models/components/chatbskyconvodefsconvoview.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |