# ComAtprotoAdminUpdateSubjectStatusBody

## Example Usage

```typescript
import { ComAtprotoAdminUpdateSubjectStatusBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminUpdateSubjectStatusBody = {
  subject: {
    uri: "https://second-hand-gripper.name/",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.ComAtprotoAdminUpdateSubjectStatusBodySubject*                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deactivated`                                                                                        | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |