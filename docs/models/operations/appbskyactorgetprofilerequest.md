# AppBskyActorGetProfileRequest

## Example Usage

```typescript
import { AppBskyActorGetProfileRequest } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyActorGetProfileRequest = {
  actor: "did:plc:z72i7hdynmk6r22z27h6tvur",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `actor`                                       | *string*                                      | :heavy_check_mark:                            | Handle or DID of account to fetch profile of. | did:plc:z72i7hdynmk6r22z27h6tvur              |