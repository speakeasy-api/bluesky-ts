# AppBskyNotificationListNotificationsNotification

## Example Usage

```typescript
import { AppBskyNotificationListNotificationsNotification } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyNotificationListNotificationsNotification = {
  uri: "https://meager-scholarship.net",
  cid: "<id>",
  author: {
    did: "<id>",
    handle: "<value>",
  },
  reason: "quote",
  record: "<value>",
  isRead: false,
  indexedAt: new Date("2023-11-26T12:19:41.082Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `cid`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `author`                                                                                               | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `reason`                                                                                               | [components.ReasonEnum](../../models/components/reasonenum.md)                                         | :heavy_check_mark:                                                                                     | Expected values are 'like', 'repost', 'follow', 'mention', 'reply', 'quote', and 'starterpack-joined'. |
| `reasonSubject`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `record`                                                                                               | *any*                                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isRead`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `indexedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `labels`                                                                                               | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |