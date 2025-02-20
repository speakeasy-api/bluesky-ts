# ComAtprotoAdminGetSubjectStatusResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetSubjectStatusResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetSubjectStatusResponseBody = {
  subject: {
    did: "<id>",
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