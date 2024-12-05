# ChatBskyModerationGetActorMetadataResponseBody

OK

## Example Usage

```typescript
import { ChatBskyModerationGetActorMetadataResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ChatBskyModerationGetActorMetadataResponseBody = {
  day: {
    messagesSent: 934214,
    messagesReceived: 613966,
    convos: 535633,
    convosStarted: 589910,
  },
  month: {
    messagesSent: 730122,
    messagesReceived: 311945,
    convos: 398221,
    convosStarted: 209843,
  },
  all: {
    messagesSent: 186193,
    messagesReceived: 944373,
    convos: 739551,
    convosStarted: 490459,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `month`                                                                                                                        | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `all`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |