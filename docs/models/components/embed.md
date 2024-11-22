# Embed


## Supported Types

### `components.AppBskyEmbedImagesView`

```typescript
const value: components.AppBskyEmbedImagesView = {
  images: [
    {
      thumb: "https://stylish-wallaby.org",
      fullsize: "https://rundown-fisherman.com",
      alt: "<value>",
    },
  ],
};
```

### `components.AppBskyEmbedVideoView`

```typescript
const value: components.AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://excellent-hospitalization.name/",
};
```

### `components.AppBskyEmbedExternalView`

```typescript
const value: components.AppBskyEmbedExternalView = {
  external: {
    uri: "https://which-carboxyl.com",
    title: "<value>",
    description:
      "consequently athwart um rationalize blank kiddingly overheard",
  },
};
```

### `components.AppBskyEmbedRecordView`

```typescript
const value: components.AppBskyEmbedRecordView = {
  record: {
    uri: "https://trim-allegation.name/",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2023-03-20T01:13:26.854Z"),
  },
};
```

### `components.AppBskyEmbedRecordWithMediaView`

```typescript
const value: components.AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://different-aftermath.name/",
      cid: "<id>",
      did: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      displayName: "Rory.Fadel8",
      indexedAt: new Date("2022-04-20T14:46:11.490Z"),
    },
  },
  media: {
    images: [
      {
        thumb: "https://big-stool.com/",
        fullsize: "https://sore-import.com",
        alt: "<value>",
      },
    ],
  },
};
```

