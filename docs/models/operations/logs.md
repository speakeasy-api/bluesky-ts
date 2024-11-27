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
    sentAt: new Date("2022-09-03T10:06:53.981Z"),
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
    sentAt: new Date("2024-10-14T04:15:01.236Z"),
  },
};
```

