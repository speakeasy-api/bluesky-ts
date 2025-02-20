# ToolsOzoneModerationDefsModEventLabel

Apply/Negate labels on a subject

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventLabel } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventLabel = {
  createLabelVals: [
    "<value>",
  ],
  negateLabelVals: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |
| `createLabelVals`  | *string*[]         | :heavy_check_mark: | N/A                |
| `negateLabelVals`  | *string*[]         | :heavy_check_mark: | N/A                |