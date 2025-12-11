# ComAtprotoAdminUpdateSubjectStatusRequest

## Example Usage

```typescript
import { ComAtprotoAdminUpdateSubjectStatusRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminUpdateSubjectStatusRequest = {
  subject: {
    did: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.ComAtprotoAdminUpdateSubjectStatusSubjectRequest*                                        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deactivated`                                                                                        | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |