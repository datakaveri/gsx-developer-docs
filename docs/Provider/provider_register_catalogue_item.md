---
sidebar_position: 4
---
 
# Manage Catalogue Items

## Obtain a Token to Create a Catalogue
To create,update or delete a catalogue entry in the GDI Catalogue Server, a provider should obtain a token using GDI Authorization Servers [Create Token APIs](https://dx.gdi.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token).

To obtain a token, a provider can either specify their clientId and clientSecret in the header or specify a token header. The clientId and clientSecret are generated for a provider on their [Successful Registration](registration.md).

A provider can obtain a token using the [Create Token APIs](https://dx.gdi.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token) with the following request body.
```json
{
  "itemId": "geoserver.dx.gdi.org.in",
  "itemType": "resource_server",
  "role": "provider"
}
```

## Upload Catalogue Entries to the Catalogue Server
On successfully obtaining a [Create Catalogue Token](https://dx.gdi.org.in/auth/apis#tag/Token-APIs/operation/post-auth-v1-token), a provider can upload the catalogue entries to the GDI Catalogue Server.

Assuming the catalogue entries for provider and resource_server are already uploaded by the GDI Admin, a provider can now insert the entries for resource_group followed by the entries for the resource to the GDI Catalogue Server.

The Python script below shows an example of inserting a catalogue entry to the GDI Catalogue Server using the [Create Item API](https://dx.gdi.org.in/cat/apis#tag/Entity/operation/create%20item).
```python { #create_catalogue_example }
import json
import requests

catalogue_url = 'dx.gdi.org.in'
token = '<token_obtained_from_GDI_Authorization_Servers>'
path = '<./path_to_the_catalogue_entry_file>'

api = 'https://' + catalogue_url + '/gdi/cat/v1/item'

headers = {'content-type': 'application/json', 'token': token}

with open(path, 'r') as catalogue_file:
    catalogue_item = json.load(catalogue_file)

r = requests.post(api, json.dumps(catalogue_item), headers=headers)

print r.status_code
print r.json()
```
