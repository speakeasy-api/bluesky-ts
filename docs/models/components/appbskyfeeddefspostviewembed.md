# AppBskyFeedDefsPostViewEmbed


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://paltry-hyphenation.biz/",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://weary-cinder.org",
    title: "<value>",
    description: "whereas madly phooey exploration joyously gadzooks",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://possible-disconnection.com",
    cid: "<id>",
    did: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    displayName: "Jeanie.Bauch91",
    indexedAt: new Date("2024-01-07T23:48:39.193Z"),
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://immediate-developmental.biz/",
      notFound: true,
    },
  },
  media: {
    external: {
      uri: "https://weary-cinder.org",
      title: "<value>",
      description: "whereas madly phooey exploration joyously gadzooks",
    },
  },
};
```

