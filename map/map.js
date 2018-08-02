
var map;
var g_pictureMarkerSymbol_sel = null;
var g_MarkerRender = null;
var g_graphicLayer = null;
var g_graphic = null;
var g_x = null;
var g_y = null;

var DOMMAP = null;
var DOMMAP_CIA = null;
var XMMAP = null;
var XMMAP_CVA = null;
var g_tdtMap = null;
var g_tdtMap_word = null;
var g_tdtMap_img = null;
initialize();
function initialize() {

    require(["esri/map",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/layers/WebTiledLayer",
            "esri/geometry/Point",
            "esri/layers/GraphicsLayer",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/SimpleRenderer",
            "esri/graphic",
            "esri/InfoTemplate",
            "esri/SpatialReference",
            "dojo/domReady!"],
      function (Map, ArcGISTiledMapServiceLayer,WebTiledLayer, Point,
          GraphicsLayer, PictureMarkerSymbol, SimpleRenderer, Graphic, InfoTemplate,
          SpatialReference) {
          map = new Map("map_canvas", { "logo": false });

          //加载天地图  v1
            //g_tdtMap = TDTLayer();
            //g_tdtMap_word = TDTWordLayer();
            //g_tdtMap_img = TDTImageLayer();
            //g_tdtMap_img.hide();
            //map.addLayer(g_tdtMap);
            //map.addLayer(g_tdtMap_img);
          //map.addLayer(g_tdtMap_word);              
          //var cpoint = new Point(118.15, 24.66, new SpatialReference({ wkid: 4326 }));
          //map.centerAndZoom(cpoint, 8);

            //DOMMAP = new ArcGISTiledMapServiceLayer("http://mapapi.xmtfj.gov.cn/RemoteRest/services/CGCS_DOMMAP/MapServer");
            //DOMMAP_CIA = new ArcGISTiledMapServiceLayer("http://mapapi.xmtfj.gov.cn/RemoteRest/services/CGCS_DOMMAP_CIA/MapServer");
            //DOMMAP.hide();
            //DOMMAP_CIA.hide();
            //XMMAP = new ArcGISTiledMapServiceLayer("http://mapapi.xmtfj.gov.cn/RemoteRest/services/CGCS_XMMAP/MapServer");
            //XMMAP_CVA = new ArcGISTiledMapServiceLayer("http://mapapi.xmtfj.gov.cn/RemoteRest/services/CGCS_XMMAP_CVA/MapServer");
            //map.addLayer(DOMMAP);
            //map.addLayer(DOMMAP_CIA);
            //map.addLayer(XMMAP);
            //map.addLayer(XMMAP_CVA);

          //加载天地图V2
          var tileInfo = new esri.layers.TileInfo({
              "rows": 256,
              "cols": 256,
              "compressionQuality": 0,
              "origin": {
                  "x": -180,
                  "y": 90
              },
              "spatialReference": {
                  "wkid": 4326
              },
              "lods": [
              {
                  "level": 2,
                  "resolution": 0.3515625,
                  "scale": 147748796.52937502
              },

              {
                  "level": 3,
                  "resolution": 0.17578125,
                  "scale": 73874398.264687508
              },

              {
                  "level": 4,
                  "resolution": 0.087890625,
                  "scale": 36937199.132343754
              },

              {
                  "level": 5,
                  "resolution": 0.0439453125,
                  "scale": 18468599.566171877
              },

              {
                  "level": 6,
                  "resolution": 0.02197265625,
                  "scale": 9234299.7830859385
              },

              {
                  "level": 7,
                  "resolution": 0.010986328125,
                  "scale": 4617149.8915429693
              },

              {
                  "level": 8,
                  "resolution": 0.0054931640625,
                  "scale": 2308574.9457714846
              },

              {
                  "level": 9,
                  "resolution": 0.00274658203125,
                  "scale": 1154287.4728857423
              },

              {
                  "level": 10,
                  "resolution": 0.001373291015625,
                  "scale": 577143.73644287116
              },

              {
                  "level": 11,
                  "resolution": 0.0006866455078125,
                  "scale": 288571.86822143558
              },

              {
                  "level": 12,
                  "resolution": 0.00034332275390625,
                  "scale": 144285.93411071779
              },

              {
                  "level": 13,
                  "resolution": 0.000171661376953125,
                  "scale": 72142.967055358895
              },

              {
                  "level": 14,
                  "resolution": 8.58306884765625e-005,
                  "scale": 36071.483527679447
              },

              {
                  "level": 15,
                  "resolution": 4.291534423828125e-005,
                  "scale": 18035.741763839724
              },

              {
                  "level": 16,
                  "resolution": 2.1457672119140625e-005,
                  "scale": 9017.8708819198619
              },

              {
                  "level": 17,
                  "resolution": 1.0728836059570313e-005,
                  "scale": 4508.9354409599309
              },

              {
                  "level": 18,
                  "resolution": 5.3644180297851563e-006,
                  "scale": 2254.4677204799655
              }
              ]
          });
          g_tdtMap = new WebTiledLayer("http://\${subDomain}.tianditu.com/DataServer?T=vec_c&X=\${col}&Y=\${row}&L=\${level}" , {
              "copyright" : "Tianditu",
              "id": "Tianditu" ,
              "subDomains" : ["t0", "t1", "t2" ],
              "tileInfo" :tileInfo
          });
          g_tdtMap_word = new WebTiledLayer("http://\${subDomain}.tianditu.com/DataServer?T=cva_c&X=\${col}&Y=\${row}&L=\${level}", {
              "copyright": "Tianditu",
              "id": "Tianditu2",
              "subDomains": ["t0", "t1", "t2"],
              "tileInfo": tileInfo
          });
          g_tdtMap_img = new WebTiledLayer("http://\${subDomain}.tianditu.cn/DataServer?T=img_c&X=\${col}&Y=\${row}&L=\${level}", {
              "copyright": "Tianditu",
              "id": "Tianditu2",
              "subDomains": ["t0", "t1", "t2"],
              "tileInfo": tileInfo
          });
          g_tdtMap_img.hide();
          
          map.addLayer(g_tdtMap);
          map.addLayer(g_tdtMap_word);
          map.addLayer(g_tdtMap_img);

          map.centerAndZoom(new esri.geometry.Point({
              "x": 118.15,
              "y": 24.66,
              "spatialReference": {
                  "wkid": 4326
              }
          }), 8);




          g_graphicLayer = new GraphicsLayer();
          g_pictureMarkerSymbol_sel = new PictureMarkerSymbol("../images/marker_blue.png", 28, 28);
          g_MarkerRender = new SimpleRenderer(g_pictureMarkerSymbol_sel);
          g_graphicLayer.setRenderer(g_MarkerRender);
          map.addLayer(g_graphicLayer);

          //var infoTemplate = new InfoTemplate("信息", "${*}");
          //g_graphicLayer.setInfoTemplate(infoTemplate);


          map.on("load", function () {
              //alert("load");
              //var pt = map.extent.getCenter();
              //var msg = JSON.stringify(pt);
              //alert(msg);
              //g_graphic = new Graphic(pt);//, g_MarkerRender);
              //g_graphicLayer.add(g_graphic);

              //$.get("services/admin.ashx", function (data) {
              //    var obj = JSON.parse(data);
              //    $.each(obj, function (index, value, array) {
              //        if (value.B_X != null && value.B_Y != null && value.B_STDM.length == 4) {
              //            var pt = new Point(value.B_X, value.B_Y);
              //            var g = new Graphic(pt, null, { "NO": value.B_STDM, "NAME": value.B_STMC });
              //            g_graphicLayer.add(g);
              //        }
              //    });

              //});
          });

          //function searchYBDD() {
          //    if (window.parent.g_level != undefined) {
          //        if (window.parent.g_isAdmin)
          //            window.parent.searchYBDD(window.parent.g_ztType, window.parent.g_searchContent, false, window.parent.g_level);
          //        else
          //            window.parent.searchYBDD(window.parent.g_ztType, window.parent.g_searchContent, true, window.parent.g_level);
          //    } else {
          //        if (window.parent.g_isAdmin)
          //            window.parent.searchYBDD(window.parent.g_ztType, window.parent.g_searchContent, false);
          //        else
          //            window.parent.searchYBDD(window.parent.g_ztType, window.parent.g_searchContent);
          //    }
          //}

          //map.on("click", function (e) {
          //    if (e.graphic && e.graphic.divMsg) {
          //        map.infoWindow.setContent(e.graphic.divMsg.innerHTML);
          //        map.infoWindow.show(e.screenPoint, map.getInfoWindowAnchor(e.screenPoint));
          //    } else {
          //        map.infoWindow.hide();
          //    }

          //});

          //map.on("pan-end", function (obj) {
          //    searchYBDD();
          //});

          //map.on("zoom-end", function (obj) {
          //    searchYBDD();
          //});

      }
    )
}

function showXMMAP() {

    g_tdtMap.show();
    g_tdtMap_img.hide();
    DOMMAP.hide();
    DOMMAP_CIA.hide();
    XMMAP.show();
    XMMAP_CVA.show();
}

function showDOMMAP() {

    g_tdtMap.hide();
    g_tdtMap_img.show();
    DOMMAP.show();
    DOMMAP_CIA.show();
    XMMAP.hide();
    XMMAP_CVA.hide();
}


function createMarker1(newmark) {

    
    require(["esri/map",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/geometry/Point",
            "esri/layers/GraphicsLayer",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/SimpleRenderer",
            "esri/graphic",
            "esri/InfoTemplate",
            "esri/SpatialReference",
            "dojo/domReady!"],
      function (Map, ArcGISTiledMapServiceLayer, Point,
          GraphicsLayer, PictureMarkerSymbol, SimpleRenderer, Graphic, InfoTemplate,
          SpatialReference) {
          var pt = new Point(newmark.x, newmark.y, new SpatialReference({ wkid: 4490 }));

          var attr = {};
          attr.属性 = '1';

          var g = new Graphic(pt, null, attr);//, g_MarkerRender);
          g.divMsg = newmark.divMsg;
          g_graphicLayer.add(g);
      });
}

function openInfowindow(newmark) {
    require(["esri/map",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/geometry/Point",
            "esri/layers/GraphicsLayer",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/SimpleRenderer",
            "esri/graphic",
            "esri/InfoTemplate",
            "esri/SpatialReference",
            "dojo/domReady!"],
      function (Map, ArcGISTiledMapServiceLayer, Point,
          GraphicsLayer, PictureMarkerSymbol, SimpleRenderer, Graphic, InfoTemplate,
          SpatialReference) {
          var pt = new Point(newmark.x, newmark.y, new SpatialReference({ wkid: 4490 }));
          map.infoWindow.setContent(newmark.divMsg.innerHTML);
          map.infoWindow.show(pt);
      });
}