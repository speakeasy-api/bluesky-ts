# AppBskyActorPutPreferencesBody

## Example Usage

```typescript
import { AppBskyActorPutPreferencesBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyActorPutPreferencesBody = {
  preferences: [
    {
      items: [
        {
          value: "<value>",
          targets: [
            "tag",
          ],
          actorTarget: "all",
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