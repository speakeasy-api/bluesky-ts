# ComAtprotoRepoPutRecordResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoPutRecordResponseBody } from "bluesky/models/operations";

let value: ComAtprotoRepoPutRecordResponseBody = {
  uri: "https://waterlogged-sediment.name",
  cid: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `cid`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `commit`                                                                                                                 | [components.ComAtprotoRepoDefsCommitMeta](../../models/components/comatprotorepodefscommitmeta.md)                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `validationStatus`                                                                                                       | [operations.ComAtprotoRepoPutRecordValidationStatus](../../models/operations/comatprotorepoputrecordvalidationstatus.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |