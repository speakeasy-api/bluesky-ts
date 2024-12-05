# ChatBskyConvoUnmuteConvoResponseBody

OK

## Example Usage

```typescript
import { ChatBskyConvoUnmuteConvoResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ChatBskyConvoUnmuteConvoResponseBody = {
  convo: {
    id: "<id>",
    rev: "<value>",
    members: [],
    muted: false,
    unreadCount: 237893,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `convo`                                                                                        | [components.ChatBskyConvoDefsConvoView](../../models/components/chatbskyconvodefsconvoview.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |