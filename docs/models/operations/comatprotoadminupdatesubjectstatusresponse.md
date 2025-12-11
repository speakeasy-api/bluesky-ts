# ComAtprotoAdminUpdateSubjectStatusResponse

OK

## Example Usage

```typescript
import { ComAtprotoAdminUpdateSubjectStatusResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminUpdateSubjectStatusResponse = {
  subject: {
    uri: "https://reflecting-outlaw.org",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subject`                                                                                            | *operations.ComAtprotoAdminUpdateSubjectStatusSubjectResponse*                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `takedown`                                                                                           | [components.ComAtprotoAdminDefsStatusAttr](../../models/components/comatprotoadmindefsstatusattr.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |