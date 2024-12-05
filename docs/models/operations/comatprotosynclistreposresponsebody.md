# ComAtprotoSyncListReposResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoSyncListReposResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoSyncListReposResponseBody = {
  repos: [
    {
      did: "<id>",
      head: "<id>",
      rev: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `repos`                                                                                            | [components.ComAtprotoSyncListReposRepo](../../models/components/comatprotosynclistreposrepo.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |