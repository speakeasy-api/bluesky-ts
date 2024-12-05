# ComAtprotoLabelDefsLabel

Metadata tag on an atproto resource (eg, repo or record).

## Example Usage

```typescript
import { ComAtprotoLabelDefsLabel } from "@speakeasy-api/bluesky/models/components";

let value: ComAtprotoLabelDefsLabel = {
  src: "<id>",
  uri: "https://zany-freckle.info/",
  val: "<value>",
  cts: new Date("2023-02-19T13:21:39.892Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ver`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `src`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | DID of the actor who created this label.                                                      |
| `uri`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | AT URI of the record, repository (account), or other resource that this label applies to.     |
| `cid`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optionally, CID specifying the specific version of 'uri' resource this label applies to.      |
| `val`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The short string name of the value or type of this label.                                     |
| `neg`                                                                                         | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | If true, this is a negation label, overwriting a previous label.                              |
| `cts`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when this label was created.                                                        |
| `exp`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which this label expires (no longer applies).                                    |
| `sig`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Signature of dag-cbor encoded label.                                                          |