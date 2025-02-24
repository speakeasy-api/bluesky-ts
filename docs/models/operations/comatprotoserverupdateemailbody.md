# ComAtprotoServerUpdateEmailBody

## Example Usage

```typescript
import { ComAtprotoServerUpdateEmailBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerUpdateEmailBody = {
  email: "Dayton_Franecki@gmail.com",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `email`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `emailAuthFactor`                                                                                     | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `token`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Requires a token from com.atproto.sever.requestEmailUpdate if the account's email has been confirmed. |