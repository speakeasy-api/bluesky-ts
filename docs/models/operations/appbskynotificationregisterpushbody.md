# AppBskyNotificationRegisterPushBody

## Example Usage

```typescript
import { AppBskyNotificationRegisterPushBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyNotificationRegisterPushBody = {
  serviceDid: "<id>",
  token: "<value>",
  platform: "android",
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