---
sidebar_position: 3
---

 
# Obtaining Access Token
To access a resource after discovering from the `catalogue`, a `consumer` should obtain Access Token using IUDX Authorisation Servers [Create Token APIs](https://dx.ugix.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token). 

A `consumer` can use the `clientID` and `clientSecret` obtained through [Registration](../registration.md)

## Obtaining token for an *OPEN* resource?
After discovering an `Open` resource from `Catalogue`, a consumer can obtain a token using the [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token) with the following request body. Make sure that the appropriate resource server `id` is used to obtain a token.


```json
{
  "itemId": "geoserver.dx.ugix.org.in",
  "itemType": "resource_server",
  "role": "consumer"
}
```


## Obtaining token for a *SECURE* resource?
After discovering an `Secure` resource from `Catalogue`, a consumer can obtain a token using the [Create Token APIs](https://dx.ugix.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body. Make sure that the appropriate resource (or) resource_group `id` is used to obtain a token.

```json
{
  "itemId": "6d9c471a-1613-4d13-b3e3-835dceccc2e3",
  "itemType": "resource",
  "role": "consumer"
}
```