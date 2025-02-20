# @speakeasy-api/bluesky

Developer-friendly & type-safe Typescript SDK specifically catered to leverage _@speakeasy-api/bluesky_ API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@speakeasy-api/bluesky&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

> [!IMPORTANT]
> This SDK is not yet ready for production use. Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

AT Protocol XRPC API: Conversion of AT Protocol's lexicons to OpenAPI's schema format.

This section contains HTTP API reference docs for Bluesky and AT Protocol lexicons. Generate a bearer token to test API calls directly from the docs.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@speakeasy-api/bluesky](#speakeasy-apibluesky)
  * [SDK Installation](#sdk-installation)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-sdks/bluesky
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @speakeasy-sdks/bluesky
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @speakeasy-sdks/bluesky
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @speakeasy-sdks/bluesky zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@speakeasy-sdks/bluesky")` to import and use this package.

### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Bluesky": {
      "command": "npx",
      "args": [
        "-y",
        "--project",
        "@speakeasy-sdks/bluesky",
        "--",
        "mcp",
        "start",
        "--server",
        "public"
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

1. Create a shell script called `mcp-bluesky.sh` with the following content:

    ```sh
    #!/bin/sh
     
    exec npx -y --package @speakeasy-sdks/bluesky -- mcp start "$@"
    ```

2. Then make it executable with the following command:

    ```sh
    chmod +x mcp-bluesky.sh
    ```

3. In Cursor, `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

    | Field   | Value |
    | ------- | ----- |
    | Name    | Bluesky |
    | Type    | `command` |
    | Command | `/path/to/mcp-bluesky.sh --server public` |

</details>

For a full list of server arguments, run:

```sh
npx -y --package @speakeasy-sdks/bluesky -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getProfile({
    actor: "did:plc:z72i7hdynmk6r22z27h6tvur",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `bearer` | http | HTTP Bearer | `BLUESKY_BEARER`     |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [delete](docs/sdks/account/README.md#delete) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [exportData](docs/sdks/account/README.md#exportdata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [accounts](docs/sdks/accounts/README.md)

* [getInviteCodes](docs/sdks/accounts/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get all invite codes for the current account. Requires auth.

### [actor](docs/sdks/actor/README.md)

* [getSuggestions](docs/sdks/actor/README.md#getsuggestions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.
* [searchTypeahead](docs/sdks/actor/README.md#searchtypeahead) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.

### [actors](docs/sdks/actors/README.md)

* [getPreferences](docs/sdks/actors/README.md#getpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.
* [getProfile](docs/sdks/actors/README.md#getprofile) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.
* [getProfiles](docs/sdks/actors/README.md#getprofiles) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile views of multiple actors.
* [putPreferences](docs/sdks/actors/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set the private preferences attached to the account.
* [search](docs/sdks/actors/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actors (profiles) matching search criteria. Does not require auth.

### [admin](docs/sdks/admin/README.md)

* [disableInviteCodes](docs/sdks/admin/README.md#disableinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable some set of codes and/or all codes associated with a set of users.
* [getAccountInfo](docs/sdks/admin/README.md#getaccountinfo) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about an account.
* [getSubjectStatus](docs/sdks/admin/README.md#getsubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the service-specific admin status of a subject (account, record, or blob).
* [sendEmail](docs/sdks/admin/README.md#sendemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send email to a user's account email address.
* [updateAccountEmail](docs/sdks/admin/README.md#updateaccountemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.
* [updateAccountHandle](docs/sdks/admin/README.md#updateaccounthandle) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's handle.
* [updateAccountPassword](docs/sdks/admin/README.md#updateaccountpassword) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the password for a user account as an administrator.
* [updateSubjectStatus](docs/sdks/admin/README.md#updatesubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the service-specific admin status of a subject (account, record, or blob).

### [admins](docs/sdks/admins/README.md)

* [deleteAccount](docs/sdks/admins/README.md#deleteaccount) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.
* [enableAccountInvites](docs/sdks/admins/README.md#enableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Re-enable an account's ability to receive invite codes.
* [getAccountInfos](docs/sdks/admins/README.md#getaccountinfos) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.

### [atprotoAdmin](docs/sdks/atprotoadmin/README.md)

* [disableAccountInvites](docs/sdks/atprotoadmin/README.md#disableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.
* [getInviteCodes](docs/sdks/atprotoadmin/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get an admin view of invite codes.
* [searchAccounts](docs/sdks/atprotoadmin/README.md#searchaccounts) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of accounts that matches your search query.

### [atprotoIdentity](docs/sdks/atprotoidentity/README.md)

* [requestPlcOperationSignature](docs/sdks/atprotoidentity/README.md#requestplcoperationsignature) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.
* [resolveHandle](docs/sdks/atprotoidentity/README.md#resolvehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.
* [signPlcOperation](docs/sdks/atprotoidentity/README.md#signplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Signs a PLC operation to update some value(s) in the requesting DID's document.

### [atprotoLabels](docs/sdks/atprotolabels/README.md)

* [query](docs/sdks/atprotolabels/README.md#query) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.

### [atprotoModeration](docs/sdks/atprotomoderation/README.md)

* [createReport](docs/sdks/atprotomoderation/README.md#createreport) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.

### [atprotoRepo](docs/sdks/atprotorepo/README.md)

* [delete](docs/sdks/atprotorepo/README.md#delete) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.
* [import](docs/sdks/atprotorepo/README.md#import) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.
* [uploadBlob](docs/sdks/atprotorepo/README.md#uploadblob) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.

### [atprotoServer](docs/sdks/atprotoserver/README.md)

* [activateAccount](docs/sdks/atprotoserver/README.md#activateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
* [createAccount](docs/sdks/atprotoserver/README.md#createaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.
* [createAppPassword](docs/sdks/atprotoserver/README.md#createapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an App Password.
* [createInviteCode](docs/sdks/atprotoserver/README.md#createinvitecode) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an invite code.
* [createInviteCodes](docs/sdks/atprotoserver/README.md#createinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create invite codes.
* [deleteAccount](docs/sdks/atprotoserver/README.md#deleteaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.
* [deleteSession](docs/sdks/atprotoserver/README.md#deletesession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete the current session. Requires auth.
* [describe](docs/sdks/atprotoserver/README.md#describe) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describes the server's account creation requirements and capabilities. Implemented by PDS.
* [refreshSession](docs/sdks/atprotoserver/README.md#refreshsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').
* [requestEmailConfirmation](docs/sdks/atprotoserver/README.md#requestemailconfirmation) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to confirm ownership of email.
* [requestPasswordReset](docs/sdks/atprotoserver/README.md#requestpasswordreset) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account password reset via email.
* [resetPassword](docs/sdks/atprotoserver/README.md#resetpassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reset a user account password using a token.
* [revokeAppPassword](docs/sdks/atprotoserver/README.md#revokeapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Revoke an App Password by name.

### [atprotoSync](docs/sdks/atprotosync/README.md)

* [getBlob](docs/sdks/atprotosync/README.md#getblob) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
* [listRepos](docs/sdks/atprotosync/README.md#listrepos) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.

### [atprotoSyncs](docs/sdks/atprotosyncs/README.md)

* [getRecord](docs/sdks/atprotosyncs/README.md#getrecord) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.


### [chatConvo](docs/sdks/chatconvo/README.md)

* [sendMessageBatch](docs/sdks/chatconvo/README.md#sendmessagebatch) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [unmute](docs/sdks/chatconvo/README.md#unmute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [chatConvos](docs/sdks/chatconvos/README.md)

* [getForMembers](docs/sdks/chatconvos/README.md#getformembers) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [getMessages](docs/sdks/chatconvos/README.md#getmessages) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [sendMessage](docs/sdks/chatconvos/README.md#sendmessage) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [updateRead](docs/sdks/chatconvos/README.md#updateread) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [chatModeration](docs/sdks/chatmoderation/README.md)

* [getActorMetadata](docs/sdks/chatmoderation/README.md#getactormetadata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [updateActorAccess](docs/sdks/chatmoderation/README.md#updateactoraccess) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [chats](docs/sdks/chats/README.md)

* [getConvo](docs/sdks/chats/README.md#getconvo) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [getMessageContext](docs/sdks/chats/README.md#getmessagecontext) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [communications](docs/sdks/communications/README.md)

* [createTemplate](docs/sdks/communications/README.md#createtemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to create a new, re-usable communication (email for now) template.

### [conversations](docs/sdks/conversations/README.md)

* [getLog](docs/sdks/conversations/README.md#getlog) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [leave](docs/sdks/conversations/README.md#leave) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [convo](docs/sdks/convo/README.md)

* [deleteMessageForSelf](docs/sdks/convo/README.md#deletemessageforself) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [list](docs/sdks/convo/README.md#list) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [convos](docs/sdks/convos/README.md)

* [mute](docs/sdks/convos/README.md#mute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### [feed](docs/sdks/feed/README.md)

* [getActor](docs/sdks/feed/README.md#getactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
* [getActorLikes](docs/sdks/feed/README.md#getactorlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
* [getAuthor](docs/sdks/feed/README.md#getauthor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
* [fetch](docs/sdks/feed/README.md#fetch) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a hydrated feed from an actor's selected feed generator. Implemented by App View.
* [getGenerator](docs/sdks/feed/README.md#getgenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator. Implemented by AppView.
* [getGenerators](docs/sdks/feed/README.md#getgenerators) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of feed generators.
* [getSkeleton](docs/sdks/feed/README.md#getskeleton) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.
* [getSuggested](docs/sdks/feed/README.md#getsuggested) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.
* [getTimeline](docs/sdks/feed/README.md#gettimeline) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.
* [search](docs/sdks/feed/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find posts matching search criteria, returning views of those posts.

### [feeds](docs/sdks/feeds/README.md)

* [describeGenerator](docs/sdks/feeds/README.md#describegenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
* [getLikes](docs/sdks/feeds/README.md#getlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get like records which reference a subject (by AT-URI and CID).
* [getList](docs/sdks/feeds/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.
* [getPostThread](docs/sdks/feeds/README.md#getpostthread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
* [get](docs/sdks/feeds/README.md#get) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.
* [getQuotes](docs/sdks/feeds/README.md#getquotes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of quotes for a given post.
* [getRepostedBy](docs/sdks/feeds/README.md#getrepostedby) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of reposts for a given post.
* [sendInteractions](docs/sdks/feeds/README.md#sendinteractions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send information about interactions with feed items back to the feed generator that served them.

### [graph](docs/sdks/graph/README.md)

* [getActorStarterPacks](docs/sdks/graph/README.md#getactorstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of starter packs created by the actor.
* [getFollows](docs/sdks/graph/README.md#getfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which a specified account (actor) follows.
* [getList](docs/sdks/graph/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a 'view' (with additional context) of a specified list.
* [getListMutes](docs/sdks/graph/README.md#getlistmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.
* [getLists](docs/sdks/graph/README.md#getlists) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates the lists created by a specified account (actor).
* [getRelationships](docs/sdks/graph/README.md#getrelationships) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates public relationships between one account, and a list of other accounts. Does not require auth.
* [getStarterPack](docs/sdks/graph/README.md#getstarterpack) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a view of a starter pack.
* [muteActor](docs/sdks/graph/README.md#muteactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.
* [muteActorList](docs/sdks/graph/README.md#muteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.
* [searchStarterPacks](docs/sdks/graph/README.md#searchstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find starter packs matching search criteria. Does not require auth.
* [unmuteThread](docs/sdks/graph/README.md#unmutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified thread. Requires auth.

### [graphs](docs/sdks/graphs/README.md)

* [getBlocks](docs/sdks/graphs/README.md#getblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates which accounts the requesting account is currently blocking. Requires auth.
* [getKnownFollowers](docs/sdks/graphs/README.md#getknownfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.
* [getListBlocks](docs/sdks/graphs/README.md#getlistblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.
* [getMutes](docs/sdks/graphs/README.md#getmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts that the requesting account (actor) currently has muted. Requires auth.
* [getStarterPacks](docs/sdks/graphs/README.md#getstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get views for a list of starter packs.
* [muteThread](docs/sdks/graphs/README.md#mutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.
* [unmuteActorList](docs/sdks/graphs/README.md#unmuteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified list of accounts. Requires auth.

### [identities](docs/sdks/identities/README.md)

* [updateHandle](docs/sdks/identities/README.md#updatehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.

### [identity](docs/sdks/identity/README.md)

* [getRecommendedDidCredentials](docs/sdks/identity/README.md#getrecommendeddidcredentials) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describe the credentials that should be included in the DID doc of an account that is migrating to this service.
* [submitPlcOperation](docs/sdks/identity/README.md#submitplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry

### [labelers](docs/sdks/labelers/README.md)

* [getServices](docs/sdks/labelers/README.md#getservices) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of labeler services.

### [moderation](docs/sdks/moderation/README.md)

* [getEvent](docs/sdks/moderation/README.md#getevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a moderation event.
* [queryEvents](docs/sdks/moderation/README.md#queryevents) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List moderation events related to a subject.

### [moderations](docs/sdks/moderations/README.md)

* [getRecords](docs/sdks/moderations/README.md#getrecords) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some records.
* [getRepos](docs/sdks/moderations/README.md#getrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some repositories.
* [queryStatuses](docs/sdks/moderations/README.md#querystatuses) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

View moderation statuses of subjects (record or repo).

### [notification](docs/sdks/notification/README.md)

* [list](docs/sdks/notification/README.md#list) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerate notifications for the requesting account. Requires auth.

### [notifications](docs/sdks/notifications/README.md)

* [getUnreadCount](docs/sdks/notifications/README.md#getunreadcount) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Count the number of unread notifications for the requesting account. Requires auth.
* [putPreferences](docs/sdks/notifications/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set notification-related preferences for an account. Requires auth.
* [registerPush](docs/sdks/notifications/README.md#registerpush) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.
* [updateSeen](docs/sdks/notifications/README.md#updateseen) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify server that the requesting account has seen notifications. Requires auth.

### [ozone](docs/sdks/ozone/README.md)

* [addMember](docs/sdks/ozone/README.md#addmember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add a member to the ozone team. Requires admin role.

### [ozoneCommunication](docs/sdks/ozonecommunication/README.md)

* [delete](docs/sdks/ozonecommunication/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a communication template.
* [listTemplates](docs/sdks/ozonecommunication/README.md#listtemplates) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of all communication templates.
* [updateTemplate](docs/sdks/ozonecommunication/README.md#updatetemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.

### [ozoneModeration](docs/sdks/ozonemoderation/README.md)

* [emitEvent](docs/sdks/ozonemoderation/README.md#emitevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Take a moderation action on an actor.
* [getRecord](docs/sdks/ozonemoderation/README.md#getrecord) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a record.
* [get](docs/sdks/ozonemoderation/README.md#get) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a repository.

### [ozoneModerations](docs/sdks/ozonemoderations/README.md)

* [searchRepos](docs/sdks/ozonemoderations/README.md#searchrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find repositories based on a search term.

### [ozoneServer](docs/sdks/ozoneserver/README.md)

* [getConfig](docs/sdks/ozoneserver/README.md#getconfig) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about ozone's server configuration.

### [ozoneSet](docs/sdks/ozoneset/README.md)

* [add](docs/sdks/ozoneset/README.md#add) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add values to a specific set. Attempting to add values to a set that does not exist will result in an error.
* [upsert](docs/sdks/ozoneset/README.md#upsert) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update set metadata

### [ozoneSettings](docs/sdks/ozonesettings/README.md)

* [upsertOption](docs/sdks/ozonesettings/README.md#upsertoption) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update setting option

### [ozoneSignature](docs/sdks/ozonesignature/README.md)

* [searchAccounts](docs/sdks/ozonesignature/README.md#searchaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Search for accounts that match one or more threat signature values.

### [ozoneSignatures](docs/sdks/ozonesignatures/README.md)

* [findRelatedAccounts](docs/sdks/ozonesignatures/README.md#findrelatedaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get accounts that share some matching threat signatures with the root account.

### [repo](docs/sdks/repo/README.md)

* [putRecord](docs/sdks/repo/README.md#putrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.

### [repos](docs/sdks/repos/README.md)

* [applyWrites](docs/sdks/repos/README.md#applywrites) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.
* [createRecord](docs/sdks/repos/README.md#createrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create a single new repository record. Requires auth, implemented by PDS.
* [describe](docs/sdks/repos/README.md#describe) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about an account and repository, including the list of collections. Does not require auth.
* [getRecord](docs/sdks/repos/README.md#getrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.
* [listMissingBlobs](docs/sdks/repos/README.md#listmissingblobs) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
* [list](docs/sdks/repos/README.md#list) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List a range of records in a repository, matching a specific collection. Does not require auth.

### [server](docs/sdks/server/README.md)

* [checkAccountStatus](docs/sdks/server/README.md#checkaccountstatus) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.
* [confirmEmail](docs/sdks/server/README.md#confirmemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.
* [createSession](docs/sdks/server/README.md#createsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.
* [deactivateAccount](docs/sdks/server/README.md#deactivateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.
* [listAppPasswords](docs/sdks/server/README.md#listapppasswords) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.
* [requestAccountDelete](docs/sdks/server/README.md#requestaccountdelete) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.
* [requestEmailUpdate](docs/sdks/server/README.md#requestemailupdate) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.

### [servers](docs/sdks/servers/README.md)

* [getServiceAuth](docs/sdks/servers/README.md#getserviceauth) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.
* [getSession](docs/sdks/servers/README.md#getsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.
* [reserveSigningKey](docs/sdks/servers/README.md#reservesigningkey) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.
* [updateEmail](docs/sdks/servers/README.md#updateemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.

### [set](docs/sdks/set/README.md)

* [delete](docs/sdks/set/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an entire set. Attempting to delete a set that does not exist will result in an error.
* [query](docs/sdks/set/README.md#query) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Query available sets

### [sets](docs/sdks/sets/README.md)

* [deleteValues](docs/sdks/sets/README.md#deletevalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete values from a specific set. Attempting to delete values that are not in the set will not result in an error
* [getValues](docs/sdks/sets/README.md#getvalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a specific set and its values

### [setting](docs/sdks/setting/README.md)

* [removeOptions](docs/sdks/setting/README.md#removeoptions) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete settings by key

### [settings](docs/sdks/settings/README.md)

* [list](docs/sdks/settings/README.md#list) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List settings with optional filtering

### [signature](docs/sdks/signature/README.md)

* [findCorrelation](docs/sdks/signature/README.md#findcorrelation) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find all correlated threat signatures between 2 or more accounts.

### [sync](docs/sdks/sync/README.md)

* [getRepo](docs/sdks/sync/README.md#getrepo) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
* [listBlobs](docs/sdks/sync/README.md#listblobs) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
* [notifyOfUpdate](docs/sdks/sync/README.md#notifyofupdate) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.

### [syncs](docs/sdks/syncs/README.md)

* [getBlocks](docs/sdks/syncs/README.md#getblocks) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.
* [getLatestCommit](docs/sdks/syncs/README.md#getlatestcommit) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.
* [getRepoStatus](docs/sdks/syncs/README.md#getrepostatus) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
* [requestCrawl](docs/sdks/syncs/README.md#requestcrawl) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.

### [team](docs/sdks/team/README.md)

* [listMembers](docs/sdks/team/README.md#listmembers) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all members with access to the ozone service.

### [teams](docs/sdks/teams/README.md)

* [deleteMember](docs/sdks/teams/README.md#deletemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a member from ozone team. Requires admin role.
* [updateMember](docs/sdks/teams/README.md#updatemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update a member in the ozone service. Requires admin role.

### [users](docs/sdks/users/README.md)

* [getFollowers](docs/sdks/users/README.md#getfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor).
* [getSuggestedFollows](docs/sdks/users/README.md#getsuggestedfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
* [unmute](docs/sdks/users/README.md#unmute) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified account. Requires auth.

### [videos](docs/sdks/videos/README.md)

* [getJobStatus](docs/sdks/videos/README.md#getjobstatus) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get status details for a video processing job.
* [getUploadLimits](docs/sdks/videos/README.md#getuploadlimits) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get video upload limits for the authenticated user.
* [upload](docs/sdks/videos/README.md#upload) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a video to be processed then stored on the PDS.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountDelete`](docs/sdks/account/README.md#delete) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`accountExportData`](docs/sdks/account/README.md#exportdata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`accountsGetInviteCodes`](docs/sdks/accounts/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get all invite codes for the current account. Requires auth.
- [`actorGetSuggestions`](docs/sdks/actor/README.md#getsuggestions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.
- [`actorSearchTypeahead`](docs/sdks/actor/README.md#searchtypeahead) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.
- [`actorsGetPreferences`](docs/sdks/actors/README.md#getpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.
- [`actorsGetProfile`](docs/sdks/actors/README.md#getprofile) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.
- [`actorsGetProfiles`](docs/sdks/actors/README.md#getprofiles) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile views of multiple actors.
- [`actorsPutPreferences`](docs/sdks/actors/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set the private preferences attached to the account.
- [`actorsSearch`](docs/sdks/actors/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actors (profiles) matching search criteria. Does not require auth.
- [`adminDisableInviteCodes`](docs/sdks/admin/README.md#disableinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable some set of codes and/or all codes associated with a set of users.
- [`adminGetAccountInfo`](docs/sdks/admin/README.md#getaccountinfo) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about an account.
- [`adminGetSubjectStatus`](docs/sdks/admin/README.md#getsubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the service-specific admin status of a subject (account, record, or blob).
- [`adminsDeleteAccount`](docs/sdks/admins/README.md#deleteaccount) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.
- [`adminsEnableAccountInvites`](docs/sdks/admins/README.md#enableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Re-enable an account's ability to receive invite codes.
- [`adminSendEmail`](docs/sdks/admin/README.md#sendemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send email to a user's account email address.
- [`adminsGetAccountInfos`](docs/sdks/admins/README.md#getaccountinfos) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.
- [`adminUpdateAccountEmail`](docs/sdks/admin/README.md#updateaccountemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.
- [`adminUpdateAccountHandle`](docs/sdks/admin/README.md#updateaccounthandle) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's handle.
- [`adminUpdateAccountPassword`](docs/sdks/admin/README.md#updateaccountpassword) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the password for a user account as an administrator.
- [`adminUpdateSubjectStatus`](docs/sdks/admin/README.md#updatesubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the service-specific admin status of a subject (account, record, or blob).
- [`atprotoAdminDisableAccountInvites`](docs/sdks/atprotoadmin/README.md#disableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.
- [`atprotoAdminGetInviteCodes`](docs/sdks/atprotoadmin/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get an admin view of invite codes.
- [`atprotoAdminSearchAccounts`](docs/sdks/atprotoadmin/README.md#searchaccounts) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of accounts that matches your search query.
- [`atprotoIdentityRequestPlcOperationSignature`](docs/sdks/atprotoidentity/README.md#requestplcoperationsignature) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.
- [`atprotoIdentityResolveHandle`](docs/sdks/atprotoidentity/README.md#resolvehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.
- [`atprotoIdentitySignPlcOperation`](docs/sdks/atprotoidentity/README.md#signplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Signs a PLC operation to update some value(s) in the requesting DID's document.
- [`atprotoLabelsQuery`](docs/sdks/atprotolabels/README.md#query) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
- [`atprotoModerationCreateReport`](docs/sdks/atprotomoderation/README.md#createreport) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.
- [`atprotoRepoDelete`](docs/sdks/atprotorepo/README.md#delete) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.
- [`atprotoRepoImport`](docs/sdks/atprotorepo/README.md#import) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.
- [`atprotoRepoUploadBlob`](docs/sdks/atprotorepo/README.md#uploadblob) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.
- [`atprotoServerActivateAccount`](docs/sdks/atprotoserver/README.md#activateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
- [`atprotoServerCreateAccount`](docs/sdks/atprotoserver/README.md#createaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.
- [`atprotoServerCreateAppPassword`](docs/sdks/atprotoserver/README.md#createapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an App Password.
- [`atprotoServerCreateInviteCode`](docs/sdks/atprotoserver/README.md#createinvitecode) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an invite code.
- [`atprotoServerCreateInviteCodes`](docs/sdks/atprotoserver/README.md#createinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create invite codes.
- [`atprotoServerDeleteAccount`](docs/sdks/atprotoserver/README.md#deleteaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.
- [`atprotoServerDeleteSession`](docs/sdks/atprotoserver/README.md#deletesession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete the current session. Requires auth.
- [`atprotoServerDescribe`](docs/sdks/atprotoserver/README.md#describe) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describes the server's account creation requirements and capabilities. Implemented by PDS.
- [`atprotoServerRefreshSession`](docs/sdks/atprotoserver/README.md#refreshsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').
- [`atprotoServerRequestEmailConfirmation`](docs/sdks/atprotoserver/README.md#requestemailconfirmation) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to confirm ownership of email.
- [`atprotoServerRequestPasswordReset`](docs/sdks/atprotoserver/README.md#requestpasswordreset) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account password reset via email.
- [`atprotoServerResetPassword`](docs/sdks/atprotoserver/README.md#resetpassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reset a user account password using a token.
- [`atprotoServerRevokeAppPassword`](docs/sdks/atprotoserver/README.md#revokeapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Revoke an App Password by name.
- [`atprotoSyncGetBlob`](docs/sdks/atprotosync/README.md#getblob) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
- [`atprotoSyncListRepos`](docs/sdks/atprotosync/README.md#listrepos) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.
- [`atprotoSyncsGetRecord`](docs/sdks/atprotosyncs/README.md#getrecord) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.
- [`chatConvoSendMessageBatch`](docs/sdks/chatconvo/README.md#sendmessagebatch) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatConvosGetForMembers`](docs/sdks/chatconvos/README.md#getformembers) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatConvosGetMessages`](docs/sdks/chatconvos/README.md#getmessages) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatConvosSendMessage`](docs/sdks/chatconvos/README.md#sendmessage) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatConvosUpdateRead`](docs/sdks/chatconvos/README.md#updateread) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatConvoUnmute`](docs/sdks/chatconvo/README.md#unmute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatModerationGetActorMetadata`](docs/sdks/chatmoderation/README.md#getactormetadata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatModerationUpdateActorAccess`](docs/sdks/chatmoderation/README.md#updateactoraccess) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatsGetConvo`](docs/sdks/chats/README.md#getconvo) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`chatsGetMessageContext`](docs/sdks/chats/README.md#getmessagecontext) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`communicationsCreateTemplate`](docs/sdks/communications/README.md#createtemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to create a new, re-usable communication (email for now) template.
- [`conversationsGetLog`](docs/sdks/conversations/README.md#getlog) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`conversationsLeave`](docs/sdks/conversations/README.md#leave) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`convoDeleteMessageForSelf`](docs/sdks/convo/README.md#deletemessageforself) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`convoList`](docs/sdks/convo/README.md#list) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`convosMute`](docs/sdks/convos/README.md#mute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`feedFetch`](docs/sdks/feed/README.md#fetch) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a hydrated feed from an actor's selected feed generator. Implemented by App View.
- [`feedGetActor`](docs/sdks/feed/README.md#getactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
- [`feedGetActorLikes`](docs/sdks/feed/README.md#getactorlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
- [`feedGetAuthor`](docs/sdks/feed/README.md#getauthor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
- [`feedGetGenerator`](docs/sdks/feed/README.md#getgenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator. Implemented by AppView.
- [`feedGetGenerators`](docs/sdks/feed/README.md#getgenerators) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of feed generators.
- [`feedGetSkeleton`](docs/sdks/feed/README.md#getskeleton) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.
- [`feedGetSuggested`](docs/sdks/feed/README.md#getsuggested) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.
- [`feedGetTimeline`](docs/sdks/feed/README.md#gettimeline) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.
- [`feedsDescribeGenerator`](docs/sdks/feeds/README.md#describegenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
- [`feedSearch`](docs/sdks/feed/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find posts matching search criteria, returning views of those posts.
- [`feedsGet`](docs/sdks/feeds/README.md#get) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.
- [`feedsGetLikes`](docs/sdks/feeds/README.md#getlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get like records which reference a subject (by AT-URI and CID).
- [`feedsGetList`](docs/sdks/feeds/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.
- [`feedsGetPostThread`](docs/sdks/feeds/README.md#getpostthread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
- [`feedsGetQuotes`](docs/sdks/feeds/README.md#getquotes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of quotes for a given post.
- [`feedsGetRepostedBy`](docs/sdks/feeds/README.md#getrepostedby) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of reposts for a given post.
- [`feedsSendInteractions`](docs/sdks/feeds/README.md#sendinteractions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send information about interactions with feed items back to the feed generator that served them.
- [`graphGetActorStarterPacks`](docs/sdks/graph/README.md#getactorstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of starter packs created by the actor.
- [`graphGetFollows`](docs/sdks/graph/README.md#getfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which a specified account (actor) follows.
- [`graphGetList`](docs/sdks/graph/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a 'view' (with additional context) of a specified list.
- [`graphGetListMutes`](docs/sdks/graph/README.md#getlistmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.
- [`graphGetLists`](docs/sdks/graph/README.md#getlists) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates the lists created by a specified account (actor).
- [`graphGetRelationships`](docs/sdks/graph/README.md#getrelationships) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates public relationships between one account, and a list of other accounts. Does not require auth.
- [`graphGetStarterPack`](docs/sdks/graph/README.md#getstarterpack) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a view of a starter pack.
- [`graphMuteActor`](docs/sdks/graph/README.md#muteactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.
- [`graphMuteActorList`](docs/sdks/graph/README.md#muteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.
- [`graphSearchStarterPacks`](docs/sdks/graph/README.md#searchstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find starter packs matching search criteria. Does not require auth.
- [`graphsGetBlocks`](docs/sdks/graphs/README.md#getblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates which accounts the requesting account is currently blocking. Requires auth.
- [`graphsGetKnownFollowers`](docs/sdks/graphs/README.md#getknownfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.
- [`graphsGetListBlocks`](docs/sdks/graphs/README.md#getlistblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.
- [`graphsGetMutes`](docs/sdks/graphs/README.md#getmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts that the requesting account (actor) currently has muted. Requires auth.
- [`graphsGetStarterPacks`](docs/sdks/graphs/README.md#getstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get views for a list of starter packs.
- [`graphsMuteThread`](docs/sdks/graphs/README.md#mutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.
- [`graphsUnmuteActorList`](docs/sdks/graphs/README.md#unmuteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified list of accounts. Requires auth.
- [`graphUnmuteThread`](docs/sdks/graph/README.md#unmutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified thread. Requires auth.
- [`identitiesUpdateHandle`](docs/sdks/identities/README.md#updatehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.
- [`identityGetRecommendedDidCredentials`](docs/sdks/identity/README.md#getrecommendeddidcredentials) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describe the credentials that should be included in the DID doc of an account that is migrating to this service.
- [`identitySubmitPlcOperation`](docs/sdks/identity/README.md#submitplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry
- [`labelersGetServices`](docs/sdks/labelers/README.md#getservices) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of labeler services.
- [`moderationGetEvent`](docs/sdks/moderation/README.md#getevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a moderation event.
- [`moderationQueryEvents`](docs/sdks/moderation/README.md#queryevents) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List moderation events related to a subject.
- [`moderationsGetRecords`](docs/sdks/moderations/README.md#getrecords) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some records.
- [`moderationsGetRepos`](docs/sdks/moderations/README.md#getrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some repositories.
- [`moderationsQueryStatuses`](docs/sdks/moderations/README.md#querystatuses) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

View moderation statuses of subjects (record or repo).
- [`notificationList`](docs/sdks/notification/README.md#list) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerate notifications for the requesting account. Requires auth.
- [`notificationsGetUnreadCount`](docs/sdks/notifications/README.md#getunreadcount) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Count the number of unread notifications for the requesting account. Requires auth.
- [`notificationsPutPreferences`](docs/sdks/notifications/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set notification-related preferences for an account. Requires auth.
- [`notificationsRegisterPush`](docs/sdks/notifications/README.md#registerpush) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.
- [`notificationsUpdateSeen`](docs/sdks/notifications/README.md#updateseen) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify server that the requesting account has seen notifications. Requires auth.
- [`ozoneAddMember`](docs/sdks/ozone/README.md#addmember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add a member to the ozone team. Requires admin role.
- [`ozoneCommunicationDelete`](docs/sdks/ozonecommunication/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a communication template.
- [`ozoneCommunicationListTemplates`](docs/sdks/ozonecommunication/README.md#listtemplates) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of all communication templates.
- [`ozoneCommunicationUpdateTemplate`](docs/sdks/ozonecommunication/README.md#updatetemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.
- [`ozoneModerationEmitEvent`](docs/sdks/ozonemoderation/README.md#emitevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Take a moderation action on an actor.
- [`ozoneModerationGet`](docs/sdks/ozonemoderation/README.md#get) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a repository.
- [`ozoneModerationGetRecord`](docs/sdks/ozonemoderation/README.md#getrecord) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a record.
- [`ozoneModerationsSearchRepos`](docs/sdks/ozonemoderations/README.md#searchrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find repositories based on a search term.
- [`ozoneServerGetConfig`](docs/sdks/ozoneserver/README.md#getconfig) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about ozone's server configuration.
- [`ozoneSetAdd`](docs/sdks/ozoneset/README.md#add) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add values to a specific set. Attempting to add values to a set that does not exist will result in an error.
- [`ozoneSettingsUpsertOption`](docs/sdks/ozonesettings/README.md#upsertoption) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update setting option
- [`ozoneSetUpsert`](docs/sdks/ozoneset/README.md#upsert) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update set metadata
- [`ozoneSignatureSearchAccounts`](docs/sdks/ozonesignature/README.md#searchaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Search for accounts that match one or more threat signature values.
- [`ozoneSignaturesFindRelatedAccounts`](docs/sdks/ozonesignatures/README.md#findrelatedaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get accounts that share some matching threat signatures with the root account.
- [`repoPutRecord`](docs/sdks/repo/README.md#putrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.
- [`reposApplyWrites`](docs/sdks/repos/README.md#applywrites) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.
- [`reposCreateRecord`](docs/sdks/repos/README.md#createrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create a single new repository record. Requires auth, implemented by PDS.
- [`reposDescribe`](docs/sdks/repos/README.md#describe) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about an account and repository, including the list of collections. Does not require auth.
- [`reposGetRecord`](docs/sdks/repos/README.md#getrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.
- [`reposList`](docs/sdks/repos/README.md#list) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List a range of records in a repository, matching a specific collection. Does not require auth.
- [`reposListMissingBlobs`](docs/sdks/repos/README.md#listmissingblobs) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
- [`serverCheckAccountStatus`](docs/sdks/server/README.md#checkaccountstatus) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.
- [`serverConfirmEmail`](docs/sdks/server/README.md#confirmemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.
- [`serverCreateSession`](docs/sdks/server/README.md#createsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.
- [`serverDeactivateAccount`](docs/sdks/server/README.md#deactivateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.
- [`serverListAppPasswords`](docs/sdks/server/README.md#listapppasswords) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.
- [`serverRequestAccountDelete`](docs/sdks/server/README.md#requestaccountdelete) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.
- [`serverRequestEmailUpdate`](docs/sdks/server/README.md#requestemailupdate) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.
- [`serversGetServiceAuth`](docs/sdks/servers/README.md#getserviceauth) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.
- [`serversGetSession`](docs/sdks/servers/README.md#getsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.
- [`serversReserveSigningKey`](docs/sdks/servers/README.md#reservesigningkey) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.
- [`serversUpdateEmail`](docs/sdks/servers/README.md#updateemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.
- [`setDelete`](docs/sdks/set/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an entire set. Attempting to delete a set that does not exist will result in an error.
- [`setQuery`](docs/sdks/set/README.md#query) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Query available sets
- [`setsDeleteValues`](docs/sdks/sets/README.md#deletevalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete values from a specific set. Attempting to delete values that are not in the set will not result in an error
- [`setsGetValues`](docs/sdks/sets/README.md#getvalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a specific set and its values
- [`settingRemoveOptions`](docs/sdks/setting/README.md#removeoptions) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete settings by key
- [`settingsList`](docs/sdks/settings/README.md#list) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List settings with optional filtering
- [`signatureFindCorrelation`](docs/sdks/signature/README.md#findcorrelation) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find all correlated threat signatures between 2 or more accounts.
- [`syncGetRepo`](docs/sdks/sync/README.md#getrepo) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
- [`syncListBlobs`](docs/sdks/sync/README.md#listblobs) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
- [`syncNotifyOfUpdate`](docs/sdks/sync/README.md#notifyofupdate) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.
- [`syncsGetBlocks`](docs/sdks/syncs/README.md#getblocks) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.
- [`syncsGetLatestCommit`](docs/sdks/syncs/README.md#getlatestcommit) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.
- [`syncsGetRepoStatus`](docs/sdks/syncs/README.md#getrepostatus) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
- [`syncsRequestCrawl`](docs/sdks/syncs/README.md#requestcrawl) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.
- [`teamListMembers`](docs/sdks/team/README.md#listmembers) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all members with access to the ozone service.
- [`teamsDeleteMember`](docs/sdks/teams/README.md#deletemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a member from ozone team. Requires admin role.
- [`teamsUpdateMember`](docs/sdks/teams/README.md#updatemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update a member in the ozone service. Requires admin role.
- [`usersGetFollowers`](docs/sdks/users/README.md#getfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor).
- [`usersGetSuggestedFollows`](docs/sdks/users/README.md#getsuggestedfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
- [`usersUnmute`](docs/sdks/users/README.md#unmute) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified account. Requires auth.
- [`videosGetJobStatus`](docs/sdks/videos/README.md#getjobstatus) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get status details for a video processing job.
- [`videosGetUploadLimits`](docs/sdks/videos/README.md#getuploadlimits) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get video upload limits for the authenticated user.
- [`videosUpload`](docs/sdks/videos/README.md#upload) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a video to be processed then stored on the PDS.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useAccountDeleteMutation`](docs/sdks/account/README.md#delete) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useAccountExportData`](docs/sdks/account/README.md#exportdata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useAccountsGetInviteCodes`](docs/sdks/accounts/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get all invite codes for the current account. Requires auth.
- [`useActorAuthorFeed`](docs/sdks/feed/README.md#getauthor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
- [`useActorGetSuggestions`](docs/sdks/actor/README.md#getsuggestions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.
- [`useActorProfile`](docs/sdks/actors/README.md#getprofile) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.
- [`useActorSearchTypeahead`](docs/sdks/actor/README.md#searchtypeahead) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.
- [`useActorsGetPreferences`](docs/sdks/actors/README.md#getpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.
- [`useActorsGetProfiles`](docs/sdks/actors/README.md#getprofiles) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get detailed profile views of multiple actors.
- [`useActorsPutPreferencesMutation`](docs/sdks/actors/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set the private preferences attached to the account.
- [`useAdminDisableInviteCodesMutation`](docs/sdks/admin/README.md#disableinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable some set of codes and/or all codes associated with a set of users.
- [`useAdminGetAccountInfo`](docs/sdks/admin/README.md#getaccountinfo) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about an account.
- [`useAdminGetSubjectStatus`](docs/sdks/admin/README.md#getsubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the service-specific admin status of a subject (account, record, or blob).
- [`useAdminsDeleteAccountMutation`](docs/sdks/admins/README.md#deleteaccount) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.
- [`useAdminsEnableAccountInvitesMutation`](docs/sdks/admins/README.md#enableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Re-enable an account's ability to receive invite codes.
- [`useAdminSendEmailMutation`](docs/sdks/admin/README.md#sendemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send email to a user's account email address.
- [`useAdminsGetAccountInfos`](docs/sdks/admins/README.md#getaccountinfos) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.
- [`useAdminUpdateAccountEmailMutation`](docs/sdks/admin/README.md#updateaccountemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.
- [`useAdminUpdateAccountHandleMutation`](docs/sdks/admin/README.md#updateaccounthandle) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's handle.
- [`useAdminUpdateAccountPasswordMutation`](docs/sdks/admin/README.md#updateaccountpassword) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the password for a user account as an administrator.
- [`useAdminUpdateSubjectStatusMutation`](docs/sdks/admin/README.md#updatesubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the service-specific admin status of a subject (account, record, or blob).
- [`useAtprotoAdminDisableAccountInvitesMutation`](docs/sdks/atprotoadmin/README.md#disableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.
- [`useAtprotoAdminGetInviteCodes`](docs/sdks/atprotoadmin/README.md#getinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get an admin view of invite codes.
- [`useAtprotoAdminSearchAccounts`](docs/sdks/atprotoadmin/README.md#searchaccounts) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of accounts that matches your search query.
- [`useAtprotoIdentityRequestPlcOperationSignatureMutation`](docs/sdks/atprotoidentity/README.md#requestplcoperationsignature) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.
- [`useAtprotoIdentitySignPlcOperationMutation`](docs/sdks/atprotoidentity/README.md#signplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Signs a PLC operation to update some value(s) in the requesting DID's document.
- [`useAtprotoLabelsQuery`](docs/sdks/atprotolabels/README.md#query) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
- [`useAtprotoModerationCreateReportMutation`](docs/sdks/atprotomoderation/README.md#createreport) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.
- [`useAtprotoRepoDeleteMutation`](docs/sdks/atprotorepo/README.md#delete) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.
- [`useAtprotoRepoImportMutation`](docs/sdks/atprotorepo/README.md#import) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.
- [`useAtprotoRepoUploadBlobMutation`](docs/sdks/atprotorepo/README.md#uploadblob) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.
- [`useAtprotoServerActivateAccountMutation`](docs/sdks/atprotoserver/README.md#activateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
- [`useAtprotoServerCreateAccountMutation`](docs/sdks/atprotoserver/README.md#createaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.
- [`useAtprotoServerCreateAppPasswordMutation`](docs/sdks/atprotoserver/README.md#createapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an App Password.
- [`useAtprotoServerCreateInviteCodeMutation`](docs/sdks/atprotoserver/README.md#createinvitecode) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an invite code.
- [`useAtprotoServerCreateInviteCodesMutation`](docs/sdks/atprotoserver/README.md#createinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create invite codes.
- [`useAtprotoServerDeleteAccountMutation`](docs/sdks/atprotoserver/README.md#deleteaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.
- [`useAtprotoServerDeleteSessionMutation`](docs/sdks/atprotoserver/README.md#deletesession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete the current session. Requires auth.
- [`useAtprotoServerDescribe`](docs/sdks/atprotoserver/README.md#describe) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describes the server's account creation requirements and capabilities. Implemented by PDS.
- [`useAtprotoServerRefreshSessionMutation`](docs/sdks/atprotoserver/README.md#refreshsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').
- [`useAtprotoServerRequestEmailConfirmationMutation`](docs/sdks/atprotoserver/README.md#requestemailconfirmation) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to confirm ownership of email.
- [`useAtprotoServerRequestPasswordResetMutation`](docs/sdks/atprotoserver/README.md#requestpasswordreset) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account password reset via email.
- [`useAtprotoServerResetPasswordMutation`](docs/sdks/atprotoserver/README.md#resetpassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reset a user account password using a token.
- [`useAtprotoServerRevokeAppPasswordMutation`](docs/sdks/atprotoserver/README.md#revokeapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Revoke an App Password by name.
- [`useAtprotoSyncGetBlob`](docs/sdks/atprotosync/README.md#getblob) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
- [`useAtprotoSyncListRepos`](docs/sdks/atprotosync/README.md#listrepos) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.
- [`useAtprotoSyncsGetRecord`](docs/sdks/atprotosyncs/README.md#getrecord) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.
- [`useChatConvoSendMessageBatchMutation`](docs/sdks/chatconvo/README.md#sendmessagebatch) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatConvosGetForMembers`](docs/sdks/chatconvos/README.md#getformembers) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatConvosGetMessages`](docs/sdks/chatconvos/README.md#getmessages) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatConvosSendMessageMutation`](docs/sdks/chatconvos/README.md#sendmessage) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatConvosUpdateReadMutation`](docs/sdks/chatconvos/README.md#updateread) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatConvoUnmuteMutation`](docs/sdks/chatconvo/README.md#unmute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatModerationGetActorMetadata`](docs/sdks/chatmoderation/README.md#getactormetadata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatModerationUpdateActorAccessMutation`](docs/sdks/chatmoderation/README.md#updateactoraccess) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatsGetConvo`](docs/sdks/chats/README.md#getconvo) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useChatsGetMessageContext`](docs/sdks/chats/README.md#getmessagecontext) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useCommunicationsCreateTemplateMutation`](docs/sdks/communications/README.md#createtemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to create a new, re-usable communication (email for now) template.
- [`useConversationsGetLog`](docs/sdks/conversations/README.md#getlog) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useConversationsLeaveMutation`](docs/sdks/conversations/README.md#leave) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useConvoDeleteMessageForSelfMutation`](docs/sdks/convo/README.md#deletemessageforself) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useConvoList`](docs/sdks/convo/README.md#list) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useConvosMuteMutation`](docs/sdks/convos/README.md#mute) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
- [`useDidForProfile`](docs/sdks/atprotoidentity/README.md#resolvehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.
- [`useFeed`](docs/sdks/feed/README.md#fetch) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a hydrated feed from an actor's selected feed generator. Implemented by App View.
- [`useFeedGetActor`](docs/sdks/feed/README.md#getactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
- [`useFeedGetActorLikes`](docs/sdks/feed/README.md#getactorlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
- [`useFeedGetGenerator`](docs/sdks/feed/README.md#getgenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator. Implemented by AppView.
- [`useFeedGetGenerators`](docs/sdks/feed/README.md#getgenerators) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of feed generators.
- [`useFeedGetSkeleton`](docs/sdks/feed/README.md#getskeleton) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.
- [`useFeedGetSuggested`](docs/sdks/feed/README.md#getsuggested) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.
- [`useFeedGetTimeline`](docs/sdks/feed/README.md#gettimeline) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.
- [`useFeedsDescribeGenerator`](docs/sdks/feeds/README.md#describegenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
- [`useFeedSearch`](docs/sdks/feed/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find posts matching search criteria, returning views of those posts.
- [`useFeedsGet`](docs/sdks/feeds/README.md#get) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.
- [`useFeedsGetLikes`](docs/sdks/feeds/README.md#getlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get like records which reference a subject (by AT-URI and CID).
- [`useFeedsGetList`](docs/sdks/feeds/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.
- [`useFeedsGetPostThread`](docs/sdks/feeds/README.md#getpostthread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
- [`useFeedsGetQuotes`](docs/sdks/feeds/README.md#getquotes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of quotes for a given post.
- [`useFeedsGetRepostedBy`](docs/sdks/feeds/README.md#getrepostedby) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of reposts for a given post.
- [`useFeedsSendInteractionsMutation`](docs/sdks/feeds/README.md#sendinteractions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send information about interactions with feed items back to the feed generator that served them.
- [`useFollowers`](docs/sdks/users/README.md#getfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor).
- [`useFollows`](docs/sdks/graph/README.md#getfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which a specified account (actor) follows.
- [`useGraphGetActorStarterPacks`](docs/sdks/graph/README.md#getactorstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of starter packs created by the actor.
- [`useGraphGetList`](docs/sdks/graph/README.md#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a 'view' (with additional context) of a specified list.
- [`useGraphGetListMutes`](docs/sdks/graph/README.md#getlistmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.
- [`useGraphGetLists`](docs/sdks/graph/README.md#getlists) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates the lists created by a specified account (actor).
- [`useGraphGetRelationships`](docs/sdks/graph/README.md#getrelationships) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates public relationships between one account, and a list of other accounts. Does not require auth.
- [`useGraphGetStarterPack`](docs/sdks/graph/README.md#getstarterpack) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a view of a starter pack.
- [`useGraphMuteActorListMutation`](docs/sdks/graph/README.md#muteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.
- [`useGraphMuteActorMutation`](docs/sdks/graph/README.md#muteactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.
- [`useGraphSearchStarterPacks`](docs/sdks/graph/README.md#searchstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find starter packs matching search criteria. Does not require auth.
- [`useGraphsGetBlocks`](docs/sdks/graphs/README.md#getblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates which accounts the requesting account is currently blocking. Requires auth.
- [`useGraphsGetKnownFollowers`](docs/sdks/graphs/README.md#getknownfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.
- [`useGraphsGetListBlocks`](docs/sdks/graphs/README.md#getlistblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.
- [`useGraphsGetMutes`](docs/sdks/graphs/README.md#getmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts that the requesting account (actor) currently has muted. Requires auth.
- [`useGraphsGetStarterPacks`](docs/sdks/graphs/README.md#getstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get views for a list of starter packs.
- [`useGraphsMuteThreadMutation`](docs/sdks/graphs/README.md#mutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.
- [`useGraphsUnmuteActorListMutation`](docs/sdks/graphs/README.md#unmuteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified list of accounts. Requires auth.
- [`useGraphUnmuteThreadMutation`](docs/sdks/graph/README.md#unmutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified thread. Requires auth.
- [`useIdentitiesUpdateHandleMutation`](docs/sdks/identities/README.md#updatehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.
- [`useIdentityGetRecommendedDidCredentials`](docs/sdks/identity/README.md#getrecommendeddidcredentials) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describe the credentials that should be included in the DID doc of an account that is migrating to this service.
- [`useIdentitySubmitPlcOperationMutation`](docs/sdks/identity/README.md#submitplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry
- [`useLabelersGetServices`](docs/sdks/labelers/README.md#getservices) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of labeler services.
- [`useModerationGetEvent`](docs/sdks/moderation/README.md#getevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a moderation event.
- [`useModerationQueryEvents`](docs/sdks/moderation/README.md#queryevents) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List moderation events related to a subject.
- [`useModerationsGetRecords`](docs/sdks/moderations/README.md#getrecords) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some records.
- [`useModerationsGetRepos`](docs/sdks/moderations/README.md#getrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some repositories.
- [`useModerationsQueryStatuses`](docs/sdks/moderations/README.md#querystatuses) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

View moderation statuses of subjects (record or repo).
- [`useNotificationList`](docs/sdks/notification/README.md#list) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerate notifications for the requesting account. Requires auth.
- [`useNotificationsGetUnreadCount`](docs/sdks/notifications/README.md#getunreadcount) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Count the number of unread notifications for the requesting account. Requires auth.
- [`useNotificationsPutPreferencesMutation`](docs/sdks/notifications/README.md#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set notification-related preferences for an account. Requires auth.
- [`useNotificationsRegisterPushMutation`](docs/sdks/notifications/README.md#registerpush) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.
- [`useNotificationsUpdateSeenMutation`](docs/sdks/notifications/README.md#updateseen) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify server that the requesting account has seen notifications. Requires auth.
- [`useOzoneAddMemberMutation`](docs/sdks/ozone/README.md#addmember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add a member to the ozone team. Requires admin role.
- [`useOzoneCommunicationDeleteMutation`](docs/sdks/ozonecommunication/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a communication template.
- [`useOzoneCommunicationListTemplates`](docs/sdks/ozonecommunication/README.md#listtemplates) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of all communication templates.
- [`useOzoneCommunicationUpdateTemplateMutation`](docs/sdks/ozonecommunication/README.md#updatetemplate) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.
- [`useOzoneModerationEmitEventMutation`](docs/sdks/ozonemoderation/README.md#emitevent) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Take a moderation action on an actor.
- [`useOzoneModerationGet`](docs/sdks/ozonemoderation/README.md#get) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a repository.
- [`useOzoneModerationGetRecord`](docs/sdks/ozonemoderation/README.md#getrecord) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about a record.
- [`useOzoneModerationsSearchRepos`](docs/sdks/ozonemoderations/README.md#searchrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find repositories based on a search term.
- [`useOzoneServerGetConfig`](docs/sdks/ozoneserver/README.md#getconfig) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about ozone's server configuration.
- [`useOzoneSetAddMutation`](docs/sdks/ozoneset/README.md#add) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Add values to a specific set. Attempting to add values to a set that does not exist will result in an error.
- [`useOzoneSettingsUpsertOptionMutation`](docs/sdks/ozonesettings/README.md#upsertoption) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update setting option
- [`useOzoneSetUpsertMutation`](docs/sdks/ozoneset/README.md#upsert) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create or update set metadata
- [`useOzoneSignatureSearchAccounts`](docs/sdks/ozonesignature/README.md#searchaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Search for accounts that match one or more threat signature values.
- [`useOzoneSignaturesFindRelatedAccounts`](docs/sdks/ozonesignatures/README.md#findrelatedaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get accounts that share some matching threat signatures with the root account.
- [`useRepoPutRecordMutation`](docs/sdks/repo/README.md#putrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.
- [`useReposApplyWritesMutation`](docs/sdks/repos/README.md#applywrites) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.
- [`useReposCreateRecordMutation`](docs/sdks/repos/README.md#createrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create a single new repository record. Requires auth, implemented by PDS.
- [`useReposDescribe`](docs/sdks/repos/README.md#describe) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about an account and repository, including the list of collections. Does not require auth.
- [`useReposGetRecord`](docs/sdks/repos/README.md#getrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.
- [`useReposList`](docs/sdks/repos/README.md#list) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List a range of records in a repository, matching a specific collection. Does not require auth.
- [`useReposListMissingBlobs`](docs/sdks/repos/README.md#listmissingblobs) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
- [`useSearchActors`](docs/sdks/actors/README.md#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actors (profiles) matching search criteria. Does not require auth.
- [`useServerCheckAccountStatus`](docs/sdks/server/README.md#checkaccountstatus) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.
- [`useServerConfirmEmailMutation`](docs/sdks/server/README.md#confirmemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.
- [`useServerCreateSessionMutation`](docs/sdks/server/README.md#createsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.
- [`useServerDeactivateAccountMutation`](docs/sdks/server/README.md#deactivateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.
- [`useServerListAppPasswords`](docs/sdks/server/README.md#listapppasswords) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.
- [`useServerRequestAccountDeleteMutation`](docs/sdks/server/README.md#requestaccountdelete) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.
- [`useServerRequestEmailUpdateMutation`](docs/sdks/server/README.md#requestemailupdate) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.
- [`useServersGetServiceAuth`](docs/sdks/servers/README.md#getserviceauth) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.
- [`useServersGetSession`](docs/sdks/servers/README.md#getsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.
- [`useServersReserveSigningKeyMutation`](docs/sdks/servers/README.md#reservesigningkey) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.
- [`useServersUpdateEmailMutation`](docs/sdks/servers/README.md#updateemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.
- [`useSetDeleteMutation`](docs/sdks/set/README.md#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an entire set. Attempting to delete a set that does not exist will result in an error.
- [`useSetQuery`](docs/sdks/set/README.md#query) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Query available sets
- [`useSetsDeleteValuesMutation`](docs/sdks/sets/README.md#deletevalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete values from a specific set. Attempting to delete values that are not in the set will not result in an error
- [`useSetsGetValues`](docs/sdks/sets/README.md#getvalues) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a specific set and its values
- [`useSettingRemoveOptionsMutation`](docs/sdks/setting/README.md#removeoptions) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete settings by key
- [`useSettingsList`](docs/sdks/settings/README.md#list) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List settings with optional filtering
- [`useSignatureFindCorrelation`](docs/sdks/signature/README.md#findcorrelation) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find all correlated threat signatures between 2 or more accounts.
- [`useSyncGetRepo`](docs/sdks/sync/README.md#getrepo) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
- [`useSyncListBlobs`](docs/sdks/sync/README.md#listblobs) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
- [`useSyncNotifyOfUpdateMutation`](docs/sdks/sync/README.md#notifyofupdate) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.
- [`useSyncsGetBlocks`](docs/sdks/syncs/README.md#getblocks) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.
- [`useSyncsGetLatestCommit`](docs/sdks/syncs/README.md#getlatestcommit) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.
- [`useSyncsGetRepoStatus`](docs/sdks/syncs/README.md#getrepostatus) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
- [`useSyncsRequestCrawlMutation`](docs/sdks/syncs/README.md#requestcrawl) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.
- [`useTeamListMembers`](docs/sdks/team/README.md#listmembers) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all members with access to the ozone service.
- [`useTeamsDeleteMemberMutation`](docs/sdks/teams/README.md#deletemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a member from ozone team. Requires admin role.
- [`useTeamsUpdateMemberMutation`](docs/sdks/teams/README.md#updatemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update a member in the ozone service. Requires admin role.
- [`useUsersGetSuggestedFollows`](docs/sdks/users/README.md#getsuggestedfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
- [`useUsersUnmuteMutation`](docs/sdks/users/README.md#unmute) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified account. Requires auth.
- [`useVideosGetJobStatus`](docs/sdks/videos/README.md#getjobstatus) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get status details for a video processing job.
- [`useVideosGetUploadLimits`](docs/sdks/videos/README.md#getuploadlimits) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get video upload limits for the authenticated user.
- [`useVideosUploadMutation`](docs/sdks/videos/README.md#upload) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Upload a video to be processed then stored on the PDS.

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.search({});

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";
import { openAsBlob } from "node:fs";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.videos.upload(await openAsBlob("example.file"));

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getPreferences({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getPreferences` method may throw the following errors:

| Error Type                                                     | Status Code                  | Content Type     |
| -------------------------------------------------------------- | ---------------------------- | ---------------- |
| errors.BadRequestAppBskyActorGetPreferencesResponseBodyError   | 400                          | application/json |
| errors.UnauthorizedAppBskyActorGetPreferencesResponseBodyError | 401                          | application/json |
| errors.NotFoundError                                           | 404                          | application/json |
| errors.UnauthorizedError                                       | 403, 407                     | application/json |
| errors.TimeoutError                                            | 408                          | application/json |
| errors.RateLimitedError                                        | 429                          | application/json |
| errors.BadRequestError                                         | 413, 414, 415, 422, 431      | application/json |
| errors.TimeoutError                                            | 504                          | application/json |
| errors.NotFoundError                                           | 501, 505                     | application/json |
| errors.InternalServerError                                     | 500, 502, 503, 506, 507, 508 | application/json |
| errors.BadRequestError                                         | 510                          | application/json |
| errors.UnauthorizedError                                       | 511                          | application/json |
| errors.APIError                                                | 4XX, 5XX                     | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";
import {
  BadRequestAppBskyActorGetPreferencesResponseBodyError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
  RateLimitedError,
  SDKValidationError,
  TimeoutError,
  UnauthorizedAppBskyActorGetPreferencesResponseBodyError,
  UnauthorizedError,
} from "@speakeasy-sdks/bluesky/models/errors";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  let result;
  try {
    result = await bluesky.actors.getPreferences();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err
        instanceof BadRequestAppBskyActorGetPreferencesResponseBodyError): {
        // Handle err.data$: BadRequestAppBskyActorGetPreferencesResponseBodyErrorData
        console.error(err);
        return;
      }
      case (err
        instanceof UnauthorizedAppBskyActorGetPreferencesResponseBodyError): {
        // Handle err.data$: UnauthorizedAppBskyActorGetPreferencesResponseBodyErrorData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundError): {
        // Handle err.data$: NotFoundErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedError): {
        // Handle err.data$: UnauthorizedErrorData
        console.error(err);
        return;
      }
      case (err instanceof TimeoutError): {
        // Handle err.data$: TimeoutErrorData
        console.error(err);
        return;
      }
      case (err instanceof RateLimitedError): {
        // Handle err.data$: RateLimitedErrorData
        console.error(err);
        return;
      }
      case (err instanceof BadRequestError): {
        // Handle err.data$: BadRequestErrorData
        console.error(err);
        return;
      }
      case (err instanceof TimeoutError): {
        // Handle err.data$: TimeoutErrorData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundError): {
        // Handle err.data$: NotFoundErrorData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      case (err instanceof BadRequestError): {
        // Handle err.data$: BadRequestErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedError): {
        // Handle err.data$: UnauthorizedErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name         | Server                        | Description        |
| ------------ | ----------------------------- | ------------------ |
| `privileged` | `https://api.bsky.app`        | Bluesky API        |
| `public`     | `https://public.api.bsky.app` | Bluesky Public API |

#### Example

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  server: "public",
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getPreferences();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  serverURL: "https://api.bsky.app",
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actors.getPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";
import { HTTPClient } from "@speakeasy-sdks/bluesky/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Bluesky({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const sdk = new Bluesky({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `BLUESKY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@speakeasy-api/bluesky&utm_campaign=typescript)
