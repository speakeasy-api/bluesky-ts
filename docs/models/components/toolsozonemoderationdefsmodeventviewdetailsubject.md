# ToolsOzoneModerationDefsModEventViewDetailSubject


## Supported Types

### `components.ToolsOzoneModerationDefsRepoView`

```typescript
const value: components.ToolsOzoneModerationDefsRepoView = {
  did: "<id>",
  handle: "<value>",
  relatedRecords: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  indexedAt: new Date("2023-07-25T22:04:36.167Z"),
  moderation: {},
};
```

### `components.ToolsOzoneModerationDefsRepoViewNotFound`

```typescript
const value: components.ToolsOzoneModerationDefsRepoViewNotFound = {
  did: "<id>",
};
```

### `components.ToolsOzoneModerationDefsRecordView`

```typescript
const value: components.ToolsOzoneModerationDefsRecordView = {
  uri: "https://wordy-scout.com",
  cid: "<id>",
  value: "<value>",
  blobCids: [
    "<id 1>",
    "<id 2>",
  ],
  indexedAt: new Date("2025-12-06T20:49:52.605Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    indexedAt: new Date("2024-06-24T11:12:34.140Z"),
    moderation: {},
  },
};
```

### `components.ToolsOzoneModerationDefsRecordViewNotFound`

```typescript
const value: components.ToolsOzoneModerationDefsRecordViewNotFound = {
  uri: "https://frightened-swine.name/",
};
```

