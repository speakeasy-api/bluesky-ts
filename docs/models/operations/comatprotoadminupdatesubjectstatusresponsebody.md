# ComAtprotoAdminUpdateSubjectStatusResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminUpdateSubjectStatusResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoAdminUpdateSubjectStatusResponseBody = {
  subject: {
    did: "<id>",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.ComAtprotoAdminUpdateSubjectStatusSubject*                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |