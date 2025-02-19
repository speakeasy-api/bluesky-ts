# ComAtprotoRepoCreateRecordResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoCreateRecordResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoRepoCreateRecordResponseBody = {
  uri: "https://creamy-wedding.info/",
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