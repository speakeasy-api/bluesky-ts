# ChatBskyModerationGetActorMetadataResponseBody

OK

## Example Usage

```typescript
import { ChatBskyModerationGetActorMetadataResponseBody } from "bluesky/models/operations";

let value: ChatBskyModerationGetActorMetadataResponseBody = {
  day: {
    messagesSent: 453543,
    messagesReceived: 722056,
    convos: 866383,
    convosStarted: 975522,
  },
  month: {
    messagesSent: 855804,
    messagesReceived: 11714,
    convos: 359978,
    convosStarted: 729991,
  },
  all: {
    messagesSent: 171629,
    messagesReceived: 521037,
    convos: 54338,
    convosStarted: 199996,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `month`                                                                                                                        | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `all`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |