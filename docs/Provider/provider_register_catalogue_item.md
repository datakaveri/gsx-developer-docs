---
sidebar_position: 4
---
 
# Manage Catalogue Items

## Obtain a Token to Create a Catalogue
To create,update or delete a catalogue entry in the GSX Catalogue Server, a provider should obtain a token using GSX Authorization Servers [Create Token APIs](https://dx.gsx.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token).

To obtain a token, a provider can either specify their clientId and clientSecret in the header or specify a token header. The clientId and clientSecret are generated for a provider on their [Successful Registration](registration.md).

A provider can obtain a token using the [Create Token APIs](https://dx.gsx.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body.
```json
{
  "itemId": "geoserver.dx.gsx.org.in",
  "itemType": "resource_server",
  "role": "provider"
}
```

## Upload Catalogue Entries to the Catalogue Server
On successfully obtaining a [Create Catalogue Token](https://dx.gsx.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token), a provider can upload the catalogue entries to the GSX Catalogue Server.

Assuming the catalogue entries for provider and resource_server are already uploaded by the GSX Admin, a provider can now insert the entries for resource_group followed by the entries for the resource to the GSX Catalogue Server.

The Python script below shows an example of inserting a catalogue entry to the GSX Catalogue Server using the [Create Item API](https://dx.gsx.org.in/cat/apis#tag/Entity/operation/create%20item).
```python { #create_catalogue_example }
import json
import requests

catalogue_url = 'dx.gsx.org.in'
token = '<token_obtained_from_GSX_Authorization_Servers>'
path = '<./path_to_the_catalogue_entry_file>'

api = 'https://' + catalogue_url + '/gsx/cat/v1/item'

headers = {'content-type': 'application/json', 'token': token}

with open(path, 'r') as catalogue_file:
    catalogue_item = json.load(catalogue_file)

r = requests.post(api, json.dumps(catalogue_item), headers=headers)

print r.status_code
print r.json()
```
