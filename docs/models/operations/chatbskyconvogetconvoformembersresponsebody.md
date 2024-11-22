# ChatBskyConvoGetConvoForMembersResponseBody

OK

## Example Usage

```typescript
import { ChatBskyConvoGetConvoForMembersResponseBody } from "bluesky/models/operations";

let value: ChatBskyConvoGetConvoForMembersResponseBody = {
  convo: {
    id: "<id>",
    rev: "<value>",
    members: [],
    muted: false,
    unreadCount: 868126,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `convo`                                                                                        | [components.ChatBskyConvoDefsConvoView](../../models/components/chatbskyconvodefsconvoview.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |