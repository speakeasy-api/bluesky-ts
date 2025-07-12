# ChatBskyModerationGetActorMetadataResponse

OK

## Example Usage

```typescript
import { ChatBskyModerationGetActorMetadataResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyModerationGetActorMetadataResponse = {
  day: {
    messagesSent: 120436,
    messagesReceived: 917753,
    convos: 687816,
    convosStarted: 658181,
  },
  month: {
    messagesSent: 126578,
    messagesReceived: 946028,
    convos: 213045,
    convosStarted: 561102,
  },
  all: {
    messagesSent: 567130,
    messagesReceived: 110265,
    convos: 827866,
    convosStarted: 384498,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `day`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `month`                                                                                                                        | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `all`                                                                                                                          | [components.ChatBskyModerationGetActorMetadataMetadata](../../models/components/chatbskymoderationgetactormetadatametadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |