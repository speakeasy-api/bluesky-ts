# ComAtprotoAdminUpdateSubjectStatusRequestBody

## Example Usage

```typescript
import { ComAtprotoAdminUpdateSubjectStatusRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoAdminUpdateSubjectStatusRequestBody = {
  subject: {
    uri: "https://second-hand-gripper.name/",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.Subject*                                                                                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deactivated`                                                                                        | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |