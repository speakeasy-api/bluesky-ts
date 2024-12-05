# ComAtprotoRepoApplyWritesRequestBody

## Example Usage

```typescript
import { ComAtprotoRepoApplyWritesRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoRepoApplyWritesRequestBody = {
  repo: "<value>",
  writes: [
    {
      collection: "<id>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo`                                                                                                                                                                  | *string*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The handle or DID of the repo (aka, current account).                                                                                                                   |
| `validate`                                                                                                                                                              | *boolean*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                      | Can be set to 'false' to skip Lexicon schema validation of record data across all operations, 'true' to require it, or leave unset to validate only for known Lexicons. |
| `writes`                                                                                                                                                                | *operations.Writes*[]                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `swapCommit`                                                                                                                                                            | *string*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                      | If provided, the entire operation will fail if the current repo commit CID does not match this value. Used to prevent conflicting repo mutations.                       |