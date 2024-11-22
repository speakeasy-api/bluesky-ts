# AppBskyGraphGetRelationshipsRequest

## Example Usage

```typescript
import { AppBskyGraphGetRelationshipsRequest } from "bluesky/models/operations";

let value: AppBskyGraphGetRelationshipsRequest = {
  actor: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `actor`                                                     | *string*                                                    | :heavy_check_mark:                                          | Primary account requesting relationships for.               |
| `others`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | List of 'other' accounts to be related back to the primary. |