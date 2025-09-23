# ChatBskyConvoGetConvoForMembersResponse

OK

## Example Usage

```typescript
import { ChatBskyConvoGetConvoForMembersResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoGetConvoForMembersResponse = {
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