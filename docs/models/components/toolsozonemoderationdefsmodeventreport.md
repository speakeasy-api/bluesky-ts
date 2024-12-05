# ToolsOzoneModerationDefsModEventReport

Report a subject

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventReport } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventReport = {
  reportType: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                                 | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `isReporterMuted`                                                                                                                         | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject. |
| `reportType`                                                                                                                              | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |