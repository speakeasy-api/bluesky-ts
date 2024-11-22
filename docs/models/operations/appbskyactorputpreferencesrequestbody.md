# AppBskyActorPutPreferencesRequestBody

## Example Usage

```typescript
import { AppBskyActorPutPreferencesRequestBody } from "bluesky/models/operations";

let value: AppBskyActorPutPreferencesRequestBody = {
  preferences: [
    {
      items: [
        {
          value: "<value>",
          targets: [
            "tag",
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `preferences`                              | *components.AppBskyActorDefsPreferences*[] | :heavy_check_mark:                         | N/A                                        |