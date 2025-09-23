# ComAtprotoSyncRequestCrawlRequest

## Example Usage

```typescript
import { ComAtprotoSyncRequestCrawlRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoSyncRequestCrawlRequest = {
  hostname: "dark-thread.com",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `hostname`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | Hostname of the current service (eg, PDS) that is requesting to be crawled. |