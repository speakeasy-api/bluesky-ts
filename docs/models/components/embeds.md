# Embeds


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [
    {
      thumb: "https://poor-kiss.org",
      fullsize: "https://important-heartbeat.net",
      alt: "<value>",
    },
  ],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://each-bakeware.org/",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://cloudy-fireplace.biz",
    title: "<value>",
    description: "hm zowie utterly",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://buzzing-interchange.net/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    value: "<value>",
    indexedAt: new Date("2022-11-23T19:31:13.111Z"),
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://stylish-character.biz/",
    },
  },
  media: {
    images: [
      {
        thumb: "https://immense-experience.net",
        fullsize: "https://shabby-singing.biz/",
        alt: "<value>",
      },
    ],
  },
};
```

