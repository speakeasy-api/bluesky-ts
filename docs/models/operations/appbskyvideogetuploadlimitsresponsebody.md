# AppBskyVideoGetUploadLimitsResponseBody

OK

## Example Usage

```typescript
import { AppBskyVideoGetUploadLimitsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyVideoGetUploadLimitsResponseBody = {
  canUpload: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `canUpload`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `remainingDailyVideos` | *number*               | :heavy_minus_sign:     | N/A                    |
| `remainingDailyBytes`  | *number*               | :heavy_minus_sign:     | N/A                    |
| `message`              | *string*               | :heavy_minus_sign:     | N/A                    |
| `error`                | *string*               | :heavy_minus_sign:     | N/A                    |