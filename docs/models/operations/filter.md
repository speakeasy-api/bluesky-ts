# Filter

Combinations of post/repost types to include in response.

## Example Usage

```typescript
import { Filter } from "bluesky/models/operations";

let value: Filter = "posts_and_author_threads";
```

## Values

```typescript
"posts_with_replies" | "posts_no_replies" | "posts_with_media" | "posts_and_author_threads"
```