# AppBskyNotificationRegisterPushRequest

## Example Usage

```typescript
import { AppBskyNotificationRegisterPushRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyNotificationRegisterPushRequest = {
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