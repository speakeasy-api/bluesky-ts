# ComAtprotoSyncGetRepoRequest

## Example Usage

```typescript
import { ComAtprotoSyncGetRepoRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoSyncGetRepoRequest = {
  did: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `did`                                                   | *string*                                                | :heavy_check_mark:                                      | The DID of the repo.                                    |
| `since`                                                 | *string*                                                | :heavy_minus_sign:                                      | The revision ('rev') of the repo to create a diff from. |