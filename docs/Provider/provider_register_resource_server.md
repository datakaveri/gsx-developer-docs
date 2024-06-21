---
sidebar_position: 5
---
 
# Manage Data Ingestion

## Obtain Token to Ingest Data
To register a resource in the IUDX Resource Server, a provider should obtain a token using IUDX Authorization Servers [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token).

To obtain a token, a provider can either specify their `clientId` and `clientSecret` in the header or specify a token header. The `clientId` and `clientSecret` are generated for a provider on their [Successful Registration](https://docs.iudx.org.in/docs/registration#successful-registration-and-client-id-client-secret).

A provider can obtain a token using the [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token) with the following request body.
```json
{
	"itemId": "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/rs.iudx.org.in/pune-env-aqm",
	"itemType": "resource_group",
	"role": "provider"
}
```

## Register Resource in Resource Server
On successfully obtaining a [Data Ingestion Token](https://docs.iudx.org.in/docs/Provider/provider_register_resource_server#obtain-token-to-ingest-data), a provider can register a resource in the IUDX Resource Server for data ingestion.

### Register a Resource Group
The [Register Ingestion API](https://rs.iudx.org.in/apis#operation/registeradapter) is used to register a data ingestion at a `resource_group` level, with the [Data Ingestion Token](https://docs.iudx.org.in/docs/Provider/provider_register_resource_server#obtain-token-to-ingest-data) as a header parameter and the following request body.
```json
{
    "entities": [
        "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/rs.iudx.org.in/pune-env-aqm"
    ]
}
```

### Register a Resource
The [Register Ingestion API](https://rs.iudx.org.in/apis#operation/registeradapter) is used to register a data ingestion at a `resource` level, with the [Data Ingestion Token](https://docs.iudx.org.in/docs/Provider/provider_register_resource_server#obtain-token-to-ingest-data) as a header parameter and the following request body.
```json
{
    "entities": [
        "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/rs.iudx.org.in/pune-env-aqm/aqm-device-577"
    ]
}
```

### Reset Streaming User Password
A `provider` can reset the password given to them by the `streaming server` using the [Reset Streaming Password API](https://rs-test.iudx.io/apis#operation/resetPassword). This change will reset all active connections and a `provider` should restart their `client applications` accordingly.
