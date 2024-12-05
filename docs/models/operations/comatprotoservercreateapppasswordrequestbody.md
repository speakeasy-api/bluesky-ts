# ComAtprotoServerCreateAppPasswordRequestBody

## Example Usage

```typescript
import { ComAtprotoServerCreateAppPasswordRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerCreateAppPasswordRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A short name for the App Password, to help distinguish them.                                                        |
| `privileged`                                                                                                        | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | If an app password has 'privileged' access to possibly sensitive account state. Meant for use with trusted clients. |