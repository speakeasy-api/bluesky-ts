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
    text: "<value>",
    sender: {
      did: "<id>",
    },
    sentAt: new Date("2023-11-06T15:40:43.604Z"),
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
    sentAt: new Date("2024-07-18T10:00:30.471Z"),
  },
};
```

