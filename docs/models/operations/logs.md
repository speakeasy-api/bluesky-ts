# Logs


## Supported Types

### `components.ChatBskyConvoDefsLogBeginConvo`

```typescript
const value: components.ChatBskyConvoDefsLogBeginConvo = {
  rev: "<value>",
  convoId: "<id>",
};
```

### `components.ChatBskyConvoDefsLogLeaveConvo`

```typescript
const value: components.ChatBskyConvoDefsLogLeaveConvo = {
  rev: "<value>",
  convoId: "<id>",
};
```

### `components.ChatBskyConvoDefsLogCreateMessage`

```typescript
const value: components.ChatBskyConvoDefsLogCreateMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2022-02-04T21:29:28.328Z"),
  },
};
```

### `components.ChatBskyConvoDefsLogDeleteMessage`

```typescript
const value: components.ChatBskyConvoDefsLogDeleteMessage = {
  rev: "<value>",
  convoId: "<id>",
  message: {
    id: "<id>",
    rev: "<value>",
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-11-13T03:22:04.343Z"),
  },
};
```

