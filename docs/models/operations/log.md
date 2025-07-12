# Log


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
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2024-12-15T12:06:50.393Z"),
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
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-06-27T19:34:07.225Z"),
  },
};
```

