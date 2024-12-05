# AppBskyGraphGetRelationshipsResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetRelationshipsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyGraphGetRelationshipsResponseBody = {
  relationships: [
    {
      did: "<id>",
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `actor`                      | *string*                     | :heavy_minus_sign:           | N/A                          |
| `relationships`              | *operations.Relationships*[] | :heavy_check_mark:           | N/A                          |