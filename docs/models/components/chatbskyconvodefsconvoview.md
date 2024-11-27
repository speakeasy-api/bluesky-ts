# ChatBskyConvoDefsConvoView

## Example Usage

```typescript
import { ChatBskyConvoDefsConvoView } from "bluesky/models/components";

let value: ChatBskyConvoDefsConvoView = {
  id: "<id>",
  rev: "<value>",
  members: [],
  muted: false,
  unreadCount: 792499,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `rev`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `members`                                                                                                      | [components.ChatBskyActorDefsProfileViewBasic](../../models/components/chatbskyactordefsprofileviewbasic.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `lastMessage`                                                                                                  | *components.LastMessage*                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `muted`                                                                                                        | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `opened`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `unreadCount`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |