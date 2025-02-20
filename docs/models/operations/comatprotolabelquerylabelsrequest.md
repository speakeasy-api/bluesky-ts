# ComAtprotoLabelQueryLabelsRequest

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsRequest = {
  uriPatterns: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uriPatterns`                                                                                                                                              | *string*[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                         | List of AT URI patterns to match (boolean 'OR'). Each may be a prefix (ending with '*'; will match inclusive of the string leading to '*'), or a full URI. |
| `sources`                                                                                                                                                  | *string*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | Optional list of label sources (DIDs) to filter on.                                                                                                        |
| `limit`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `cursor`                                                                                                                                                   | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |