# AppBskyGraphDefsRelationship

lists the bi-directional graph relationships between one actor (not indicated in the object), and the target actors (the DID included in the object)

## Example Usage

```typescript
import { AppBskyGraphDefsRelationship } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyGraphDefsRelationship = {
  did: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `did`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `following`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | if the actor follows this DID, this is the AT-URI of the follow record         |
| `followedBy`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | if the actor is followed by this DID, contains the AT-URI of the follow record |