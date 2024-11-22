# AppBskyNotificationListNotificationsResponseBody

OK

## Example Usage

```typescript
import { AppBskyNotificationListNotificationsResponseBody } from "bluesky/models/operations";

let value: AppBskyNotificationListNotificationsResponseBody = {
  notifications: [],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                     | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `notifications`                                                                                                                              | [components.AppBskyNotificationListNotificationsNotification](../../models/components/appbskynotificationlistnotificationsnotification.md)[] | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `priority`                                                                                                                                   | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `seenAt`                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |