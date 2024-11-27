# ComAtprotoServerListAppPasswordsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerListAppPasswordsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerListAppPasswordsResponseBody = {
  passwords: [
    {
      name: "<value>",
      createdAt: new Date("2022-02-06T12:02:41.628Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `passwords`                                                                                                                        | [components.ComAtprotoServerListAppPasswordsAppPassword](../../models/components/comatprotoserverlistapppasswordsapppassword.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |