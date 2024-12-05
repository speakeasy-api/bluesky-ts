# ComAtprotoServerListAppPasswordsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerListAppPasswordsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerListAppPasswordsResponseBody = {
  passwords: [
    {
      name: "<value>",
      createdAt: new Date("2023-12-02T01:59:21.357Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `passwords`                                                                                                                        | [components.ComAtprotoServerListAppPasswordsAppPassword](../../models/components/comatprotoserverlistapppasswordsapppassword.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |