# ComAtprotoRepoCreateRecordResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoCreateRecordResponseBody } from "bluesky/models/operations";

let value: ComAtprotoRepoCreateRecordResponseBody = {
  uri: "https://frail-designation.com",
  cid: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `uri`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `cid`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `commit`                                                                                           | [components.ComAtprotoRepoDefsCommitMeta](../../models/components/comatprotorepodefscommitmeta.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `validationStatus`                                                                                 | [operations.ValidationStatus](../../models/operations/validationstatus.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |