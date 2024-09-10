---
sidebar_position: 5
---

# Manage Data Ingestion

## Obtain a Token to Ingest Data

To register a resource in the GSX Resource Server, providers need to obtain a token using the GSX Authorization Server's [Create Token APIs](https://dx.gsx.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token).

Providers can obtain a token by specifying their clientId and clientSecret in the header or by specifying a token header. The clientId and clientSecret are generated upon [Successful Registration](https://docs.iudx.org.in/docs/registration#successful-registration-and-client-id-client-secret).

To obtain a token, providers can use the [Create Token APIs](https://dx.gsx.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body:

```json
{
    "itemId": "geoserver.dx.gsx.org.in",
    "itemType": "resource_server",
    "role": "provider"
}
```
### Onboard an OGC Feature collection

After successfully obtaining a token, providers can onboard a resource on the GSX Resource Server.
The Collection Onboarding API is used to onboard data at the resource level. Below is an example of a curl request:

```sh
curl --location "http://<gsx-url>/processes/<processId>/execution" \
--header 'token: <token-obtained-from-auth>' \
--header 'Content-Type: application/json' \
--data '{
  "inputs": {
    "fileName": "<file-name-of-collection>",
    "title": "<title-of-collection>",
    "description": "<description-of-collection>",
    "resourceId": "<resource-id-of-collection>",
    "version": "1.0.0"
  },
  "response": "raw"
}'
```