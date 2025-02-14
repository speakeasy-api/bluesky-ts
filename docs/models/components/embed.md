# Embed


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [
    {
      thumb: "https://clear-cut-dredger.info",
      fullsize: "https://reckless-flu.net/",
      alt: "<value>",
    },
  ],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://impish-hose.name",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://super-pendant.net/",
    title: "<value>",
    description: "cake although misfire breastplate whenever whenever pomelo",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://hefty-knight.info",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2024-02-04T22:38:27.365Z"),
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://responsible-dusk.name/",
      blocked: true,
      author: {
        did: "<id>",
      },
    },
  },
  media: {
    images: [
      {
        thumb: "https://athletic-vision.com/",
        fullsize: "https://pleasant-birdcage.org/",
        alt: "<value>",
      },
    ],
  },
};
```

