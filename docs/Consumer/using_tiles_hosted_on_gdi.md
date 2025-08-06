---
sidebar_position: 5
---

# Using tiles served by GDI

Raster tiles and MVT tiles served by GDI can be used as basemaps or for analysis/visualization purposes. Integrations with the OpenLayers library are demonstrated below.

- A backend server is required to get DX AAA tokens, which are in turn used to make tile requests to GDI
- Tiles are available in the WorldCRS84Quad tiling matrix scheme

## Raster Tile Example

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>GDI Raster Tiles Example</title>
    <meta http-equiv="imagetoolbar" content="no" />
    <style type="text/css">
      v\:* {
        behavior: url(#default#VML);
      }
      html,
      body {
        overflow: hidden;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: "Lucida Grande", Geneva, Arial, Verdana, sans-serif;
      }
      body {
        margin: 10px;
        background: #fff;
      }
      h1 {
        margin: 0;
        padding: 6px;
        border: 0;
        font-size: 20pt;
      }
      #header {
        height: 43px;
        padding: 0;
        background-color: #eee;
        border: 1px solid #888;
      }
      #subheader {
        height: 12px;
        text-align: right;
        font-size: 10px;
        color: #555;
      }
      #map {
        height: 90%;
        border: 1px solid #888;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css"
    />
  </head>
  <body>
    <div id="header"><h1>GDI Raster Tiles Example</h1></div>
    <div id="map" class="map"></div>
    <div id="mouse-position"></div>
    <script type="text/javascript">
      var mousePositionControl = new ol.control.MousePosition({
        className: "custom-mouse-position",
        target: document.getElementById("mouse-position"),
        undefinedHTML: "&nbsp;",
      });
      const rast = new ol.source.OGCMapTile({
        url:
          "https://geoserver.dx.geospatial.org.in/collections/<dataset-id>/map/tiles/WorldCRS84Quad",
        tileLoadFunction: async function (tile, url) {
          const init = {
            headers: {
              Authorization:
                "Bearer <DX-AAA-Token>",
            },
          };
          const response = await fetch(url, init);
          const tileData = await response.blob();
          tile.getImage().src = window.URL.createObjectURL(tileData);
        },
      });

      const map = new ol.Map({
        target: "map",
        layers: [
          new ol.layer.Tile({
            source: rast,
          }),
        ],
        view: new ol.View({
          center: [0, 0],
          zoom: 1,
          projection: 'EPSG:4326'  
        }),
      });
    </script>
  </body>
</html>
```

## MVT Tiles Example

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>MVT Tiles Example</title>
    <meta http-equiv="imagetoolbar" content="no" />
    <style type="text/css">
      v\:* {
        behavior: url(#default#VML);
      }
      html,
      body {
        overflow: hidden;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: "Lucida Grande", Geneva, Arial, Verdana, sans-serif;
      }
      body {
        margin: 10px;
        background: #fff;
      }
      h1 {
        margin: 0;
        padding: 6px;
        border: 0;
        font-size: 20pt;
      }
      #header {
        height: 43px;
        padding: 0;
        background-color: #eee;
        border: 1px solid #888;
      }
      #subheader {
        height: 12px;
        text-align: right;
        font-size: 10px;
        color: #555;
      }
      #map {
        height: 50%;
        border: 1px solid #888;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.0.0/dist/ol.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/ol@v10.0.0/ol.css"
    />
  </head>
  <body>
    <div id="header"><h1>MVT Tiles Example</h1></div>
    <div id="map" class="map"></div>
    <pre id="info" />
    <div id="mouse-position"></div>
    <script type="text/javascript">
      var mousePositionControl = new ol.control.MousePosition({
        className: "custom-mouse-position",
        target: document.getElementById("mouse-position"),
        undefinedHTML: "&nbsp;",
      });

      const vec = new ol.source.OGCVectorTile({
        url:"https://geoserver.dx.geospatial.org.in/collections/<dataset-id>/map/tiles/WorldCRS84Quad",
        format: new ol.format.MVT(),
        projection: 'EPSG:4326',
      });

      const map = new ol.Map({
        target: "map",
        layers: [
          new ol.layer.VectorTile({
            source: vec,
            style: {
              "stroke-width": 3,
              "stroke-color": "red",
            },
          }),
                new ol.layer.Tile({
      source: new ol.source.OSM(),opacity:0.5,
    }),
        ],
        view: new ol.View({
          center: [0, 0],
          zoom: 0,
        projection: 'EPSG:4326',
        }),
      });
    </script>
  </body>
</html>
```
