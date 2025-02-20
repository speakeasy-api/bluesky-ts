# ComAtprotoServerListAppPasswordsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerListAppPasswordsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerListAppPasswordsResponseBody = {
  passwords: [
    {
      name: "<value>",
      createdAt: new Date("2024-12-01T01:59:21.357Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `passwords`                                                                                                                        | [components.ComAtprotoServerListAppPasswordsAppPassword](../../models/components/comatprotoserverlistapppasswordsapppassword.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |