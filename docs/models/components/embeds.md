# Embeds


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [
    {
      thumb: "https://fortunate-confusion.info/",
      fullsize: "https://mixed-stir-fry.org/",
      alt: "<value>",
    },
  ],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://portly-cannon.info/",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://giving-jacket.net/",
    title: "<value>",
    description: "around separate stealthily",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://energetic-lace.net/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    value: "<value>",
    indexedAt: new Date("2023-04-18T01:16:45.009Z"),
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://enchanting-planula.name",
      cid: "<id>",
      did: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      displayName: "Adeline.Quitzon",
      indexedAt: new Date("2023-02-03T14:30:29.574Z"),
    },
  },
  media: {
    images: [
      {
        thumb: "https://our-bungalow.biz",
        fullsize: "https://ajar-handover.info/",
        alt: "<value>",
      },
    ],
  },
};
```

