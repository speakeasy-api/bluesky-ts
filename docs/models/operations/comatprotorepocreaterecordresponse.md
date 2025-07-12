# ComAtprotoRepoCreateRecordResponse

OK

## Example Usage

```typescript
import { ComAtprotoRepoCreateRecordResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoRepoCreateRecordResponse = {
  uri: "https://ajar-compromise.org/",
  cid: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `cid`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `commit`                                                                                                                       | [components.ComAtprotoRepoDefsCommitMeta](../../models/components/comatprotorepodefscommitmeta.md)                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `validationStatus`                                                                                                             | [operations.ComAtprotoRepoCreateRecordValidationStatus](../../models/operations/comatprotorepocreaterecordvalidationstatus.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |