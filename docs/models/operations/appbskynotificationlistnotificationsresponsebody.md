# AppBskyNotificationListNotificationsResponseBody

OK

## Example Usage

```typescript
import { AppBskyNotificationListNotificationsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyNotificationListNotificationsResponseBody = {
  notifications: [
    {
      uri: "https://accurate-substitution.biz",
      cid: "<id>",
      author: {
        did: "<id>",
        handle: "<value>",
      },
      reason: "mention",
      record: "<value>",
      isRead: true,
      indexedAt: new Date("2025-10-23T02:45:08.468Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                     | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `notifications`                                                                                                                              | [components.AppBskyNotificationListNotificationsNotification](../../models/components/appbskynotificationlistnotificationsnotification.md)[] | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `priority`                                                                                                                                   | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `seenAt`                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |