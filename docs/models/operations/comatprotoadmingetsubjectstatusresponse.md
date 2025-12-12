# ComAtprotoAdminGetSubjectStatusResponse

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetSubjectStatusResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetSubjectStatusResponse = {
  subject: {
    uri: "https://reflecting-outlaw.org",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.ComAtprotoAdminGetSubjectStatusSubject*                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deactivated`                                                                                        | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |