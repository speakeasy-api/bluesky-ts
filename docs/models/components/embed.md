# Embed


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [
    {
      thumb: "https://petty-pressure.name/",
      fullsize: "https://careless-suitcase.com",
      alt: "<value>",
    },
  ],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://impressionable-lieu.info",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://agreeable-legend.org/",
    title: "<value>",
    description: "bide daintily vast scamper over",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://clear-cut-coal.com",
    author: {
      did: "<id>",
    },
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://definitive-nun.com/",
      cid: "<id>",
      record: "<value>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      indexedAt: new Date("2024-08-24T13:24:20.223Z"),
    },
  },
  media: {
    external: {
      uri: "https://mediocre-eternity.name",
      title: "<value>",
      description:
        "factorise yearly defiantly cool briefly waist on uselessly custody honesty",
    },
  },
};
```

