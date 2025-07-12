# ChatBskyConvoGetLogResponseBody

OK

## Example Usage

```typescript
import { ChatBskyConvoGetLogResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ChatBskyConvoGetLogResponseBody = {
  logs: [
    {
      rev: "<value>",
      convoId: "<id>",
    },
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                |
| `logs`             | *operations.Log*[] | :heavy_check_mark: | N/A                |