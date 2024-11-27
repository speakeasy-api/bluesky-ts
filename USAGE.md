<!-- Start SDK Example Usage [usage] -->
```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actor.getPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->