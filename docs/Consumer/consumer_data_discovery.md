---
sidebar_position: 2
---


# Discover Resources
With the help of [Catalogue APIs](https://dx.ugix.org.in/cat/apis), a `consumer` can access information related to availability of a resource using `text` and `geo-based` search.


## Using UGIX Catalogue UI

A `consumer` can also use the [Catalogue UI](https://catalogue.ugix.org.in/) to discover resources. 

![Catalogue UI](../../resources/cat/cat_home_page.png)<br/>
*Catalogue UI*

Using the `search for Dataset` box, you can perform a free text search. As you type a query, the UI will display a list of search results, which you can scroll through. If you find a resource you're interested in, you can select it by clicking on the corresponding item in the list.

![Catalogue Text Search](../../resources/cat/cat_air_search.png)<br/>
*Catalogue Text Search*

The Catalogue Resource Page provides detailed information about a resource, including the `Provider`. Users can explore various dataset attributes, add the dataset to the canvas by clicking the '+' icon, and download the dataset.
![Catalogue Resource Page](../../resources/cat/cat_res_page.png)<br/>
*Catalogue Resource Page*

## Access Policies of a Resource
A resource can be either `Public` or `Private`. If a resource is `Public`, it can be accessed via `APIs` without needing consent from the `Provider`. For `Private` resources, access to `APIs` requires `Consent` from the `Provider`.

## APIs supported by a Resource
A `consumer` can use Catalogue Items APIs to understand the resource. For example, in [Surat Public Transit Bus Realtime Info](https://api.catalogue.iudx.org.in/iudx/cat/v1/item?id=suratmunicipal.org/6db486cb4f720e8585ba1f45a931c63c25dbbbda/rs.iudx.org.in/surat-itms-realtime-info/surat-itms-live-eta) resource, we can find information such as `dataDescriptor`, `location`, `iudxResourceAPIs`, `resourceType` etc which can be used to construct appropriate queries. Types of queries supported in a resource can be understood from `iudxResourceAPIs`

To access a resource, a `consumer` should [obtain an access token](./consumer_obtaining_access_token.md)