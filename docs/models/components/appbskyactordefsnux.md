# AppBskyActorDefsNux

A new user experiences (NUX) storage object

## Example Usage

```typescript
import { AppBskyActorDefsNux } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyActorDefsNux = {
  id: "<id>",
  completed: false,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completed`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Arbitrary data for the NUX. The structure is defined by the NUX itself. Limited to 300 characters. |
| `expiresAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The date and time at which the NUX will expire and should be considered completed.                 |