# ChatBskyModerationGetActorMetadataResponseBody

OK

## Example Usage

```typescript
import { ChatBskyModerationGetActorMetadataResponseBody } from "bluesky/models/operations";

let value: ChatBskyModerationGetActorMetadataResponseBody = {
  day: {
    messagesSent: 237893,
    messagesReceived: 934214,
    convos: 613966,
    convosStarted: 535633,
  },
  month: {
    messagesSent: 589910,
    messagesReceived: 730122,
    convos: 311945,
    convosStarted: 398221,
  },
  all: {
    messagesSent: 209843,
    messagesReceived: 186193,
    convos: 944373,
    convosStarted: 739551,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `month`                                                                                                                        | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `all`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |