# ComAtprotoServerDeactivateAccountBody

## Example Usage

```typescript
import { ComAtprotoServerDeactivateAccountBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerDeactivateAccountBody = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `deleteAfter`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | A recommendation to server as to how long they should hold onto the deactivated account before deleting. |