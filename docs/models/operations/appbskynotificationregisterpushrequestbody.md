# AppBskyNotificationRegisterPushRequestBody

## Example Usage

```typescript
import { AppBskyNotificationRegisterPushRequestBody } from "bluesky/models/operations";

let value: AppBskyNotificationRegisterPushRequestBody = {
  serviceDid: "<id>",
  token: "<value>",
  platform: "ios",
  appId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `serviceDid`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `token`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `platform`                                                 | [operations.Platform](../../models/operations/platform.md) | :heavy_check_mark:                                         | N/A                                                        |
| `appId`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |