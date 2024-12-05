# ComAtprotoServerUpdateEmailRequestBody

## Example Usage

```typescript
import { ComAtprotoServerUpdateEmailRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerUpdateEmailRequestBody = {
  email: "Dayton_Franecki@gmail.com",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `email`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `emailAuthFactor`                                                                                     | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `token`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Requires a token from com.atproto.sever.requestEmailUpdate if the account's email has been confirmed. |