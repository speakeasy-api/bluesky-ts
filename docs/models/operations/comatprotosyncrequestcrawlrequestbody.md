# ComAtprotoSyncRequestCrawlRequestBody

## Example Usage

```typescript
import { ComAtprotoSyncRequestCrawlRequestBody } from "bluesky/models/operations";

let value: ComAtprotoSyncRequestCrawlRequestBody = {
  hostname: "entire-follower.net",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `hostname`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | Hostname of the current service (eg, PDS) that is requesting to be crawled. |