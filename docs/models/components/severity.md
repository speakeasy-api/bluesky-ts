# Severity

How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.

## Example Usage

```typescript
import { Severity } from "bluesky/models/components";

let value: Severity = "alert";
```

## Values

```typescript
"inform" | "alert" | "none"
```