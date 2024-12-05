# ComAtprotoRepoListRecordsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoListRecordsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoRepoListRecordsResponseBody = {
  records: [
    {
      uri: "https://sorrowful-finger.com",
      cid: "<id>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `records`                                                                                                  | [components.ComAtprotoRepoListRecordsRecord](../../models/components/comatprotorepolistrecordsrecord.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |