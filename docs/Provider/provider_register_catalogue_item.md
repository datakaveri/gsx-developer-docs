---
sidebar_position: 4
---
 
# Manage Catalogue Items

## Obtain Token to Create Catalogue
To create/update/delete a `catalogue` entry in the IUDX Catalogue Server, a provider should obtain a token using IUDX Authorization Servers [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token).

To obtain a token, a provider can either specify their `clientId` and `clientSecret` in the header or specify a token header. The `clientId` and `clientSecret` are generated for a provider on their [Successful Registration](https://docs.iudx.org.in/docs/registration#successful-registration-and-client-id-client-secret).

A provider can obtain a token using the [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token) with the following request body.
```json
{
  "itemId": "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/catalogue.iudx.org.in/catalogue/crud",
  "itemType": "resource",
  "role": "provider"
}
```

## Upload Catalogue Entries to the Catalogue Server
On successfully obtaining a [Create Catalogue Token](https://docs.iudx.org.in/docs/Provider/provider_register_catalogue_item#obtain-token-to-create-catalogue), a provider can upload the `catalogue` entries to the IUDX Catalogue Server.

Assuming the `catalogue` entries for `provider` and `resource_server` are already uploaded by the IUDX Admin, a provider can know insert the entries for `resource_group` followed by the entries for the `resource` to the IUDX Catalogue Server.

The Python script below shows an example of inserting a `catalogue` entry to the IUDX Catalogue Server using the [Create Item API](https://api.catalogue.iudx.org.in/apis#operation/createItem).
```python { #create_catalogue_example }
import json
import requests

catalogue_url = 'dx.ugix.org.in'
token = '<token_obtained_from_IUDX_Authorization_Servers>'
path = '<./path_to_the_catalogue_entry_file>'

api = 'https://' + catalogue_url + '/ugix/cat/v1/item'

headers = {'content-type': 'application/json', 'token': token}

with open(path, 'r') as catalogue_file:
    catalogue_item = json.load(catalogue_file)

r = requests.post(api, json.dumps(catalogue_item), headers=headers)

print r.status_code
print r.json()
```
