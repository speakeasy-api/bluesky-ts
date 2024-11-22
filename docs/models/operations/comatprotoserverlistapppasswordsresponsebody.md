# ComAtprotoServerListAppPasswordsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerListAppPasswordsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerListAppPasswordsResponseBody = {
  passwords: [
    {
      name: "<value>",
      createdAt: new Date("2024-03-04T16:30:19.849Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `passwords`                                                                                                                        | [components.ComAtprotoServerListAppPasswordsAppPassword](../../models/components/comatprotoserverlistapppasswordsapppassword.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |