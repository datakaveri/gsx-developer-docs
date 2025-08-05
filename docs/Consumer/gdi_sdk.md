---
sidebar_position: 4
---

# Using the GDI Python SDK

The GDI Python SDK is a command-line toolkit for accessing, processing, and managing geospatial data in the Integrated Geospatial Data Sharing Interface (GDI). Each utility is built to streamline geospatial workflows -ranging from dataset retrieval and artifact handling to advanced spatial analysis such as raster clipping, NDVI computation, vector-to-raster projection, and optimal route determination. It supports a wide range of vector and raster operations, and enables both local and MinIO-based storage. Unless explicitly specified by the user via the `--store-artifact` or `--save-object` flag, the output of each utility is saved by default to MinIO with a UUID-generated filename. This documentation provides a comprehensive reference for all command-line utilities including the purpose of each command-line tool and its syntax

The SDK offers structured artifact management by allowing users to create, store, and retrieve processed vector layers or raster overlays. These artifacts can be versioned and managed across different environments—whether local, S3-compatible, or native cloud storage. Outputs are stored in widely accepted formats: raster data in Cloud Optimized GeoTIFF (COG) and vector data in GeoJSON, ensuring both compatibility and efficiency.

## Installation

The SDK can be found [here](https://github.com/datakaveri/gdi-python-sdk). Instructions to install the SDK are available in the [README](https://github.com/datakaveri/gdi-python-sdk?tab=readme-ov-file#gdi)

## Authentication
User access within the SDK is managed through client credentials obtained during Consumer registration. Tokens are issued to authenticate users and regulate access to data and services. Role-based access controls ensure that users interact with data in a secure and governed manner, aligning with organizational policies.

```
gdi generate-token --client-id <client-id> --client-secret <client-secret> --role <role>
```

List objects
List all the available objects stored in minio
gdi ls-objects --config-path <config-path> --client-id <client-id>

List data
Lists all available vector and raster artifacts available within the bounding box of the input place
gdi list-data --location <place_name>


## Vector Commands

### Get vector data 

Fetches vector data from the GDI platform using a valid resource ID. The resource id (or dataset id) can be obtained from catalogue UI. 

```
gdi get_vector_data --client-id <client-id> --client-secret <client-secret> --role <role> --resource-id <resource-id> --save-object <local/minio> --config-path <config-path> --file-path <file-path>
```
### Features count

Returns the number of features (rows) present in the attribute table of a vector dataset.

```
gdi features-count --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url>
```

### Create buffer

Generates buffer zones around features in the input dataset based on the specified distance. The default unit of distance is metres.

```
gdi create-buffer --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --buffer-d <buffer-distance> --store-artifact <local/minio> --file-path <file-path>
```

### Create intersection

Performs spatial intersection between two vector datasets and returns overlapping areas.

```
gdi create-intersection --config-path <config-path> --client-id <client-id> --left_feature <left-feature-path> --right_feature <right-feature-path> --store-artifact <local/minio> --file-path <file-path>
```

### Download vector features

Downloads the vector features from a given artifact URL to a local path.

```
gdi download_vector_features --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --save-as <output-file-path>
```

### Compute geometry

Calculates geometry-based properties like length for line geometry and area and perimeter for polygon geometry and adds them as new attributes.

```
gdi compute-geometry --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --store-artifact <local/minio> --file-path <file-path>
```

### Reduce to raster

Converts vector features into a gridded raster by aggregating attribute values within each grid cell using a specified reducer. It supports both numeric and categorical/text attributes. For numeric fields, supported reducers include count, sum, mean, min, max and density. For text or categorical fields, it supports first (first value), last (last value), mode (most frequent value), and concat (all values joined as a comma-separated string). The output is a classified raster with an embedded Raster Attribute Table (RAT) to preserve category labels when applicable.

```
gdi reduce_to_raster --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --attribute <attribute> --grid-size <grid-size> --reducer <reducer> --store-artifacts <<local/minio>/False> --file-path <file-path>
```

### Create optimal route

Generates shortest parth connecting the input points (in GeoJSON format) and returns a linestring

```
gdi create-optimal-route --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --points-filepath <points-filepath> --store-artifacts <local/minio> --route-file-path <route-file-path>
```

### Create Voronoi

Creates a Voronoi diagram that partitions space based on proximity to input points.

```
gdi create-voronoi --config-path <config-path> --client-id <client-id> --input-artifact-url <artifact-url> --store-artifact <local/minio> --file-path <file-path>
```

### Delaunay triangulation

Generates a triangulated mesh of input points using the Delaunay method.

```
gdi create-delaunay-triangles --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --store-artifact <storage-location> --file-path <file-path>
```

### Vector clip

Clips target vector dataset using the boundaries of clip vector dataset, downloaded as an artifact from GDI.

```
gdi clip-vector --config-path <config-path> --client-id <client-id> --target-artifact-url <target-artifact-url> --clip-artifact-url <clip-artifact-url> --store-artifact <storage-location> --file-path <file-path>
```

### BBOX vector clip

Clips vector dataset using a bounding box derived from vector data from local path

```
gdi bbox-feature-clip --config-path <config-path> --client-id <client-id> --target-artifact-url <target-artifact-url> --clip-vector-path <clip-vector-path> --store-artifact <storage-location> --file-path <file-path>
```
### Convert vector format

Converts a vector file from one format (e.g., Shapefile, GeoJSON, GPKG, KML) to another, supporting both local and MinIO storage. Based on the file extension in output file path, conversion is performed

```
gdi convert_vector --config-path <config-path> --client-id <client-id> --input-vector <input-path> --input-artifact <local/minio> --file-path <output-path> --store-artifact <local/minio>
```

## Raster Commands

### Search catalog

Performs an item-level search in the STAC catalog for the given collection IDs and lists available assets (especially raster data) for each matched item.

```
gdi search-cat --collection-ids <collection-id>
```

### Get raster data

Downloads one or more raster assets (e.g., satellite image bands) from a STAC collection using client credentials. You can download all assets in a collection or restrict the download to assets in a specific STAC item.

```
gdi get-raster-data --client-id <client-id> --client-secret <client-secret> --role <consumer/provider/admin> --collection-ids <collection-id> --config-path <config-path> --store-artifact <local/minio> --dir-path <folder-name> --item-id <optional-item-id>
```

### Flood fill model

Generates flood-inundated areas from a DEM based on the given elevation threshold.

```
gdi flood-fill-model --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --threshold <threshold> --store-artifact <local/minio> --file-path <file-path>
```

### NDVI

Computes the Normalized Difference Vegetation Index (NDVI) using red and NIR bands.

```
gdi generate-ndvi --config-path <config-path> --client-id <client-id> --red-artifact-url <red-artifact-url> --nir-artifact-url <nir-artifact-url> --store-artifact <storage-location> --file-path <file-path>
```

### Compute slope

Calculates terrain slope in degrees from a digital elevation model (DEM).

```
gdi generate-slope --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --store-artifact <storage-location> --file-path <file-path>
```

### Generate isometric lines

Creates isolines (lines connecting points of equal measure) at regular intervals from raster data.

```
gdi generate-isometric-lines --config-path <config-path> --client-id <client-id> --artifact-url <artifact-url> --interval <interval> --store-artifact <storage-location> --file-path <file-path>
```

### Reduce to feature

Extracts raster values for each vector feature by overlaying polygons on the raster and applying a reducer. Supported reducers include mean, min, max, sum, and count. The result is saved as a new attribute in the vector dataset.

```
gdi reduce-to-feature --config-path <config-path> --client-id <client-id> --raster-artifact-url <raster-artifact-url> --vector-artifact-url <vector-artifact-url> --reducer <reducer> --attribute <attribute> --store-artifact <storage-location> --file-path <file-path>
```

### Merge raster

Combines multiple raster tiles with a common folder specified in filepath, into a single mosaic raster.

```
gdi rasters-merge --config-path <config-path> --client-id <client-id> --prefix <prefix> --store-artifact <storage-location> --file-path <file-path>
```

### Clip raster

Clips a raster using a polygon geometry from a GeoJSON stored in MinIO.

```
gdi raster-clip --config-path <config-path> --client-id <client-id> --raster-key <raster-key> --geojson-key <geojson-key> --store-artifact <storage-location> --file-path <file-path>
```

### BBOX raster clip

Clips a raster data using a bounding box derived from vector data from local path

```
gdi bbox-raster-clip --config-path <config-path> --client-id <client-id> --raster-key <raster-key> --vector-path <vector-path> --store-artifact <storage-location> --file-path <file-path>
```
### Generate local correlation

Computes the local Pearson correlation coefficient between two input rasters using a 5×5 moving window.

```
gdi generate-local-correlation --config-path<config-path> --client-id <client-id> --x <band_path> --y <band_path> --chunk-size <chunk_size> --store-artifact <storage-location> --file-path <file-path>
```

### Extract band path

Parses a list of file paths and returns the path to a specific band of interest by matching the item and asset keys. Useful for retrieving individual band URLs from a STAC asset list.

```
gdi extract-band-path --asset-list<asset-list> --item-key<item-key> --asset-key<asset-key>
```

### Convert raster format

Converts a raster file from one supported format (e.g., GeoTIFF .tif, ERDAS Imagine .img) to another, with the option to read from and save to either local storage or MinIO. The .ecw format is not supported in this utility.

```
gdi convert_raster --config-path <config-path> --client-id <client-id> --input-raster <input-path> --input-artifact <local/minio> --file-path <output-path> --store-artifact <local/minio>
```



