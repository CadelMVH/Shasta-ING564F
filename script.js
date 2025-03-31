TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Video",
  "label": "Intro",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "width": 1920,
   "mp4Url": "media/video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4.mp4"
  },
  "width": 1920,
  "id": "video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
  "loop": false,
  "thumbnailUrl": "media/video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4_t.jpg",
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonRestart": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "borderRadius": 0,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0
  },
  "displayPlaybackBar": true,
  "buttonPause": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "width": 40,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "height": 40,
   "mode": "toggle",
   "borderRadius": 0,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1167"
   },
   "transparencyActive": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 385.42,
    "map": {
     "class": "Map",
     "overlays": [
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FFCFD08E_ED5D_A3AD_41DA_690EA619B8CB",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 340.42,
        "height": 90,
        "x": 416.95,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 340.42,
        "x": 416.95,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_0.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FE3D96C6_ED52_EF9D_41BE_FEBFACC5934B",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 335.66,
        "height": 90,
        "x": 31.23,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_1_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 335.66,
        "x": 31.23,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_1.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FED0B385_ED53_A59F_41DF_3F275275AEEA",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 116.08,
        "height": 90,
        "x": 283.42,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_2_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 116.08,
        "x": 283.42,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_2.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FEF7EA91_ED53_A7B6_41D7_9B5D18DB7EB1",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 97.94,
        "height": 90,
        "x": 672.61,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_3_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 97.94,
        "x": 672.61,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_3.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F9C9B3E3_ED52_A59A_41E2_6FE1FED0D395",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 340.22,
        "height": 90,
        "x": 584.18,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_4_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 340.22,
        "x": 584.18,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_4.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F9B4546A_ED55_E295_41DC_C75FC4C55CC3",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 481.48,
        "height": 90,
        "x": 652.39,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_5_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 481.48,
        "x": 652.39,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_5.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F815AA76_ED56_A77A_41E1_16D0FFBA34B4",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 235.83,
        "height": 90,
        "x": 764.21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_6_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 235.83,
        "x": 764.21,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_6.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F8D954D7_ED56_63BB_41DF_146CA7B343AF",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 338.44,
        "height": 90,
        "x": 777.69,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_7_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 338.44,
        "x": 777.69,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_7.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F9E77CAA_ED57_E395_41CB_1878B43C5D99",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 61.96,
        "height": 90,
        "x": 883.86,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_8_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 61.96,
        "x": 883.86,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_8.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F837AD45_ED56_629E_41CA_2B4A28C3A9D9",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 337.44,
        "height": 90,
        "x": 962.87,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_9_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 337.44,
        "x": 962.87,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_9.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FBD6C9AE_ED56_65EA_41E4_7525D8B83FD4",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 506.76,
        "height": 90,
        "x": 1213.37,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_10_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 506.76,
        "x": 1213.37,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_10.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FB0C2185_ED55_E59E_41ED_82286B964E8B",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 232.17,
        "height": 90,
        "x": 1203.46,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_11_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 232.17,
        "x": 1203.46,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_11.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_FAAE5898_ED52_A3B6_41E3_0BFA59386917",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 46.79,
        "height": 90,
        "x": 1184.52,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_12_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 46.79,
        "x": 1184.52,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_12.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.27,
     "width": 1370,
     "id": "map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
     "fieldOfViewOverlayInsideColor": "#006699",
     "thumbnailUrl": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_t.png",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "image": {
      "levels": [
       {
        "height": 698,
        "class": "ImageResourceLevel",
        "width": 1370,
        "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110.png"
       },
       {
        "height": 349,
        "class": "ImageResourceLevel",
        "width": 685,
        "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_lq.png",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "height": 698,
     "label": "Lowe layout matterport",
     "maximumZoomFactor": 1.2,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.18
    },
    "x": 461.95,
    "angle": -7.99
   }
  ],
  "id": "panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
  "thumbnailUrl": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Entry",
  "hfov": 360
 },
 {
  "class": "PanoramaPlayer",
  "buttonZoomOut": {
   "toolTipShadowVerticalLength": 0,
   "class": "IconButton",
   "toolTipOpacity": 1,
   "toolTipDisplayTime": 600,
   "toolTipFontFamily": "Arial",
   "horizontalAlign": "center",
   "toolTipBorderSize": 1,
   "paddingLeft": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipTextShadowBlurRadius": 3,
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "mode": "push",
   "toolTip": "Zoom Out",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipFontColor": "#606060",
   "borderRadius": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "verticalAlign": "middle",
   "toolTipFontStyle": "normal",
   "toolTipFontWeight": "normal",
   "paddingRight": 0,
   "toolTipFontSize": 12,
   "toolTipBorderColor": "#767676",
   "paddingTop": 0,
   "toolTipPaddingRight": 6,
   "toolTipPaddingLeft": 6
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "borderRadius": 0,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1196"
   },
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "borderRadius": 0,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "toolTipShadowVerticalLength": 0,
   "class": "IconButton",
   "toolTipOpacity": 1,
   "toolTipDisplayTime": 600,
   "toolTipFontFamily": "Arial",
   "horizontalAlign": "center",
   "toolTipBorderSize": 1,
   "paddingLeft": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipTextShadowBlurRadius": 3,
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "mode": "push",
   "toolTip": "Zoom In",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipFontColor": "#606060",
   "borderRadius": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "paddingBottom": 0,
   "cursor": "hand",
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "shadow": false,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "transparencyActive": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "verticalAlign": "middle",
   "toolTipFontStyle": "normal",
   "toolTipFontWeight": "normal",
   "paddingRight": 0,
   "toolTipFontSize": 12,
   "toolTipBorderColor": "#767676",
   "paddingTop": 0,
   "toolTipPaddingRight": 6,
   "toolTipPaddingLeft": 6
  },
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "class": "ViewerArea",
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipDisplayTime": 600,
   "progressBarBorderRadius": 4,
   "playbackBarProgressBorderSize": 0,
   "toolTipBorderSize": 1,
   "playbackBarBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "transitionDuration": 500,
   "playbackBarHeadBorderSize": 0,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "toolTipBorderRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowOpacity": 1,
   "progressOpacity": 1,
   "paddingBottom": 0,
   "shadow": false,
   "progressRight": 10,
   "minHeight": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "progressBorderRadius": 4,
   "playbackBarHeadShadowColor": "#000000",
   "transitionMode": "blending",
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "paddingTop": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipShadowVerticalLength": 0,
   "progressBorderSize": 2,
   "progressBarBorderSize": 1,
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarBackgroundOpacity": 1,
   "paddingLeft": 0,
   "playbackBarBorderSize": 2,
   "progressBarOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "progressBottom": 2,
   "progressHeight": 20,
   "toolTipShadowColor": "#333333",
   "playbackBarProgressOpacity": 1,
   "playbackBarRight": 0,
   "width": "100%",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadHeight": 30,
   "height": "100%",
   "playbackBarLeft": 0,
   "progressLeft": 10,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeight": 20,
   "playbackBarHeadWidth": 6,
   "toolTipFontColor": "#606060",
   "progressBarBorderColor": "#000000",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarOpacity": 1,
   "minWidth": 1,
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "top": "0%",
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressBackgroundOpacity": 1,
   "borderSize": 0,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "id": "MapViewer",
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarBorderRadius": 4,
   "toolTipFontStyle": "normal",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontWeight": "normal",
   "paddingRight": 0,
   "left": "0%",
   "toolTipBorderColor": "#767676",
   "progressBorderColor": "#AAAAAA",
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipFontFamily": "Arial"
  },
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.31,
     "yawSpeed": 33.25,
     "targetYaw": -91.57,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.66,
   "pitch": 0.04
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 380.66,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 76.23,
    "angle": -30.39
   }
  ],
  "id": "panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
  "thumbnailUrl": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Living Room",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.19,
     "yawSpeed": 33.25,
     "targetYaw": 70.84,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.18,
   "pitch": -2.6
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 161.08,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 328.42,
    "angle": 219.14
   }
  ],
  "id": "panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
  "thumbnailUrl": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Kitchen",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.19,
     "yawSpeed": 33.25,
     "targetYaw": -143.95,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.15,
   "pitch": -0.52
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 142.94,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 717.61,
    "angle": 111.73
   }
  ],
  "id": "panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
  "thumbnailUrl": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Laundry Room",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4.33,
     "yawSpeed": 33.25,
     "targetYaw": 153.62,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -45.6,
   "pitch": -0.13
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 385.22,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 629.18,
    "angle": 258.9
   }
  ],
  "id": "panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
  "thumbnailUrl": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Hallway",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.82,
     "yawSpeed": 33.25,
     "targetYaw": -166.56,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.3,
   "pitch": 1.13
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 382.44,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 1007.87,
    "angle": 177.96
   }
  ],
  "id": "panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
  "thumbnailUrl": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Master Bedroom",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.94,
     "yawSpeed": 33.25,
     "targetYaw": -89.31,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.39,
   "pitch": 3.27
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 551.76,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 1258.37,
    "angle": 0
   }
  ],
  "id": "panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
  "thumbnailUrl": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Master Bedroom",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.33,
     "yawSpeed": 33.25,
     "targetYaw": -8.54,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.71,
   "pitch": -4.9
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 277.17,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 1248.46,
    "angle": -66.52
   }
  ],
  "id": "panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
  "thumbnailUrl": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Master Bath",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.08,
     "yawSpeed": 33.25,
     "targetYaw": 59.54,
     "easing": "linear",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": -2.39
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 91.79,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 1229.52,
    "angle": -66.13
   }
  ],
  "id": "panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
  "thumbnailUrl": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Luxury Bath",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.33,
     "yawSpeed": 33.25,
     "targetYaw": -133.4,
     "easing": "linear",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.04,
   "pitch": -3.27
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 526.48,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 697.39,
    "angle": 142.9
   }
  ],
  "id": "panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
  "thumbnailUrl": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Bedroom 2",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -6.47,
     "yawSpeed": 33.25,
     "targetYaw": 53.64,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.32,
   "pitch": -5.15
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 383.44,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 822.69,
    "angle": 252.33
   }
  ],
  "id": "panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
  "thumbnailUrl": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Hallway",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 5.34,
     "yawSpeed": 33.25,
     "targetYaw": -159.65,
     "easing": "linear",
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 4.58,
     "yawSpeed": 33.25,
     "targetYaw": 125.86,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 19.22,
   "pitch": 4.9
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 106.96,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 928.86,
    "angle": 69.77
   }
  ],
  "id": "panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
  "thumbnailUrl": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Bedroom 3",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.33,
     "yawSpeed": 33.25,
     "targetYaw": -50.12,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.82,
   "pitch": -3.39
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 280.83,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "x": 809.21,
    "angle": 96.59
   }
  ],
  "id": "panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
  "thumbnailUrl": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_t.jpg",
  "pitch": 0,
  "hfovMin": 60,
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "label": "Bath 2",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.07,
     "yawSpeed": 33.25,
     "targetYaw": -4.27,
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -7.22,
     "yawSpeed": 33.25,
     "targetYaw": -176.23,
     "easing": "linear",
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.56,
   "pitch": -5.65
  }
 },
 {
  "class": "Video",
  "label": "Shasta Tour",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "width": 720,
   "mp4Url": "media/video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2.mp4"
  },
  "width": 720,
  "id": "video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
  "loop": false,
  "thumbnailUrl": "media/video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2_t.jpg",
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "label": "Shasta Walkthrough",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0.mp4"
  },
  "width": 1280,
  "id": "video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
  "loop": false,
  "thumbnailUrl": "media/video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0_t.jpg",
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_AlbumPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.63",
       "y": "0.65",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "02.18.2025_09.49.16",
      "width": 3840,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0_t.png",
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.56",
       "y": "0.64",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "DJI screeenshot",
      "width": 2156,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1_t.jpg",
      "height": 1213,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1.JPG",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.64",
       "y": "0.47",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "DJI_0254",
      "width": 4000,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2_t.jpg",
      "height": 2250,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2.JPG",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.69",
       "y": "0.69",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "ING 564F outside1",
      "width": 2860,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3_t.png",
      "height": 907,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.56",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "inside",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4_t.png",
      "height": 2470,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.73",
       "y": "0.66",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "layout",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5_t.jpg",
      "height": 2470,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.57",
       "y": "0.69",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "left side",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6_t.png",
      "height": 2470,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.66",
       "y": "0.33",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "Lowe layout matterport",
      "width": 1370,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7_t.png",
      "height": 698,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.36",
       "y": "0.43",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "no roof1",
      "width": 3395,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8_t.png",
      "height": 2030,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.38",
       "y": "0.58",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "Project Overview Shasta ING",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9_t.jpg",
      "height": 2470,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.63",
       "y": "0.64",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "Screenshot 2024-10-21 124832",
      "width": 1998,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10_t.png",
      "height": 919,
      "image": {
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  },
  "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
  "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_t.png"
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9",
 "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDC0EFA1_ED55_BD96_41AD_03339801753A",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDC0EFA1_ED55_BD96_41AD_03339801753A, this.MapViewerMapPlayer)",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDC15FA2_ED55_BD9A_41BB_A38864DEBC9D",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDC15FA2_ED55_BD9A_41BB_A38864DEBC9D, this.MapViewerMapPlayer)",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDC12FA2_ED55_BD9A_41D0_48547610C0D8",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDC12FA2_ED55_BD9A_41D0_48547610C0D8, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDC1FFA2_ED55_BD9A_41D9_974BF4DD5256",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDC1FFA2_ED55_BD9A_41D9_974BF4DD5256, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDC1BFA2_ED55_BD9A_41CA_A7BC9207928E",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDC1BFA2_ED55_BD9A_41CA_A7BC9207928E, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDE1FA2_ED55_BD9A_41E6_4BB035EED56F",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDE1FA2_ED55_BD9A_41E6_4BB035EED56F, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDEEFA2_ED55_BD9A_41EB_549AD7EAFB7D",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDEEFA2_ED55_BD9A_41EB_549AD7EAFB7D, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDEBFA2_ED55_BD9A_41E8_2A720BA5A2E2",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDEBFA2_ED55_BD9A_41E8_2A720BA5A2E2, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDF0FA2_ED55_BD9A_41E1_9EF5B0AB652D",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDF0FA2_ED55_BD9A_41E1_9EF5B0AB652D, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDFDFA2_ED55_BD9A_41EA_4128704355ED",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDFDFA2_ED55_BD9A_41EA_4128704355ED, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDFAFA4_ED55_BD9D_4196_3D74B18B2527",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDFAFA4_ED55_BD9D_4196_3D74B18B2527, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDC6FA4_ED55_BD9D_41E0_74105D84B3B5",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDC6FA4_ED55_BD9D_41E0_74105D84B3B5, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_CDDCDFA4_ED55_BD9D_41E7_6773318816D6",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_CDDCDFA4_ED55_BD9D_41E7_6773318816D6, this.MapViewerMapPlayer)",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14, this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15, this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 2, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 13, 14)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, 15)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, 0)"
   }
  ]
 },
 "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
 {
  "class": "PlayList",
  "id": "playList_CDC39FA1_ED55_BD96_41AB_67366BFD012C",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_CDC3AFA1_ED55_BD96_41E5_0C9E2DBC37CA",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "data": {
   "label": "Shasta_ING_564F voice tour"
  },
  "class": "MediaAudio",
  "id": "audio_F7845744_ED72_6E9D_41E5_13EF167334D7",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_F7845744_ED72_6E9D_41E5_13EF167334D7.ogg",
   "mp3Url": "media/audio_F7845744_ED72_6E9D_41E5_13EF167334D7.mp3"
  },
  "autoplay": true
 }
], "children": [
 {
  "class": "ViewerArea",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipDisplayTime": 600,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarBottom": 10,
  "toolTipTextShadowBlurRadius": 3,
  "transitionDuration": 500,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressOpacity": 1,
  "paddingBottom": 0,
  "shadow": false,
  "progressRight": 10,
  "minHeight": 50,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderRadius": 4,
  "playbackBarHeadShadowColor": "#000000",
  "transitionMode": "blending",
  "toolTipFontSize": 12,
  "playbackBarProgressBorderRadius": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingTop": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "progressBorderSize": 2,
  "progressBarBorderSize": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBackgroundOpacity": 1,
  "paddingLeft": 0,
  "playbackBarBorderSize": 2,
  "progressBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 1,
  "progressHeight": 20,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadHeight": 30,
  "playbackBarLeft": 0,
  "progressLeft": 10,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadWidth": 6,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "top": 77,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundOpacity": 1,
  "bottom": 92,
  "borderSize": 0,
  "playbackBarHeadOpacity": 1,
  "id": "MainViewer",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "paddingRight": 0,
  "left": 0,
  "toolTipBorderColor": "#767676",
  "progressBorderColor": "#AAAAAA",
  "right": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "toolTipFontFamily": "Arial"
 },
 {
  "class": "ThumbnailList",
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowBlurRadius": 4,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFFF00",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "borderRadius": 5,
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadowOpacity": 0.8,
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 10,
  "shadow": false,
  "rollOverItemLabelFontWeight": "bold",
  "itemVerticalAlign": "middle",
  "playList": "this.thumbnaillist5245_playlist",
  "minHeight": 0,
  "itemLabelTextDecoration": "none",
  "backgroundOpacity": 0.2,
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 70,
  "paddingTop": 10,
  "maxHeight": 800,
  "itemPaddingBottom": 3,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingLeft": 20,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "width": 158.5,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 5,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "itemThumbnailShadowHorizontalLength": 3,
  "maxWidth": 800,
  "rollOverItemLabelFontColor": "#FF0000",
  "bottom": "10.1%",
  "itemThumbnailShadow": true,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "id": "thumbnaillist5245",
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "verticalAlign": "top",
  "itemThumbnailWidth": 100,
  "paddingRight": 20,
  "itemThumbnailShadowSpread": 1,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom"
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "height": 92,
  "width": "100%",
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "creationPolicy": "inAdvance",
  "minHeight": 1,
  "borderSize": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "bottom": "0%",
  "shadow": false,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "left": "0%",
  "gap": 6,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "children": [
   {
    "class": "Label",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "fontSize": 40,
    "width": 374,
    "textDecoration": "none",
    "text": "Shasta ING 564F",
    "fontFamily": "Arial",
    "height": "100%",
    "borderRadius": 0,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "minWidth": 30,
    "paddingBottom": 0,
    "minHeight": 16,
    "shadow": false,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "data": {
     "name": "Label28174"
    },
    "id": "label4056",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "fontColor": "#666666",
    "paddingTop": 0
   },
   {
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "overflow": "hidden",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "width": 805.5,
    "height": "93.478%",
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "scrollBarMargin": 2,
    "minWidth": 468,
    "paddingBottom": 0,
    "creationPolicy": "inAdvance",
    "minHeight": 20,
    "borderSize": 0,
    "layout": "horizontal",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "shadow": false,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "paddingTop": 0,
    "children": [
     {
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "toolTipOpacity": 1,
      "toolTipDisplayTime": 600,
      "toolTipFontFamily": "Arial",
      "horizontalAlign": "center",
      "toolTipBorderSize": 1,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "width": 40,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "height": 40,
      "mode": "toggle",
      "toolTip": "Mute",
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontColor": "#606060",
      "borderRadius": 0,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "minWidth": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "paddingBottom": 0,
      "cursor": "hand",
      "toolTipPaddingBottom": 4,
      "minHeight": 0,
      "shadow": false,
      "borderSize": 0,
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "transparencyActive": true,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "verticalAlign": "middle",
      "toolTipFontStyle": "normal",
      "toolTipFontWeight": "normal",
      "paddingRight": 0,
      "toolTipFontSize": 12,
      "toolTipBorderColor": "#767676",
      "paddingTop": 0,
      "toolTipPaddingRight": 6,
      "toolTipPaddingLeft": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "width": 133,
      "height": "100%",
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundColorRatios": [
       0
      ],
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingBottom": 0,
      "creationPolicy": "inAdvance",
      "minHeight": 20,
      "borderSize": 0,
      "layout": "horizontal",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1200"
      },
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "shadow": false,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "gap": 5,
      "paddingTop": 0,
      "children": [
       {
        "class": "Container",
        "scrollBarVisible": "rollOver",
        "overflow": "hidden",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "width": 47,
        "height": "100%",
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "scrollBarMargin": 2,
        "minWidth": 20,
        "paddingBottom": 0,
        "creationPolicy": "inAdvance",
        "minHeight": 20,
        "borderSize": 0,
        "layout": "vertical",
        "backgroundOpacity": 1,
        "data": {
         "name": "Container1202"
        },
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "shadow": false,
        "verticalAlign": "middle",
        "paddingRight": 0,
        "scrollBarOpacity": 0.5,
        "gap": 10,
        "paddingTop": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "contentOpaque": false
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "contentOpaque": false
     },
     {
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "overflow": "hidden",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "width": 85,
      "height": "100%",
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "backgroundColorRatios": [
       0
      ],
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingBottom": 0,
      "creationPolicy": "inAdvance",
      "minHeight": 20,
      "borderSize": 0,
      "layout": "horizontal",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1206"
      },
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "shadow": false,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "gap": 10,
      "paddingTop": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "contentOpaque": false
     }
    ],
    "contentOpaque": false
   },
   {
    "paddingTop": 10,
    "class": "ThumbnailList",
    "itemThumbnailShadowBlurRadius": 8,
    "horizontalAlign": "left",
    "paddingLeft": 20,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "width": "28.046%",
    "itemPaddingTop": 3,
    "height": 92,
    "itemLabelFontFamily": "Arial",
    "itemPaddingRight": 3,
    "itemBackgroundColorDirection": "vertical",
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailShadowColor": "#000000",
    "itemLabelFontColor": "#000000",
    "selectedItemLabelFontWeight": "bold",
    "scrollBarWidth": 10,
    "borderRadius": 5,
    "layout": "horizontal",
    "itemThumbnailShadowOpacity": 0.54,
    "itemThumbnailBorderRadius": 2,
    "itemMode": "normal",
    "paddingBottom": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "scrollBarMargin": 2,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "itemVerticalAlign": "middle",
    "rollOverItemBackgroundOpacity": 0,
    "minWidth": 20,
    "shadow": false,
    "itemThumbnailShadowHorizontalLength": 3,
    "minHeight": 20,
    "itemThumbnailShadow": true,
    "borderSize": 0,
    "rollOverItemLabelFontColor": "#003399",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "itemOpacity": 1,
    "itemThumbnailOpacity": 1,
    "itemLabelFontStyle": "normal",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "verticalAlign": "top",
    "itemThumbnailWidth": 94,
    "paddingRight": 20,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "scrollBarVisible": "always",
    "itemLabelPosition": "top",
    "itemBackgroundColorRatios": []
   },
   {
    "paddingTop": 10,
    "class": "ThumbnailList",
    "itemThumbnailShadowBlurRadius": 8,
    "horizontalAlign": "left",
    "paddingLeft": 20,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "width": "26.327%",
    "itemPaddingTop": 3,
    "height": 82.5,
    "itemLabelFontFamily": "Arial",
    "itemPaddingRight": 3,
    "itemBackgroundColorDirection": "vertical",
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailShadowColor": "#000000",
    "itemLabelFontColor": "#FFFFFF",
    "selectedItemLabelFontWeight": "bold",
    "scrollBarWidth": 10,
    "borderRadius": 5,
    "layout": "horizontal",
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailBorderRadius": 5,
    "itemMode": "normal",
    "paddingBottom": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "itemVerticalAlign": "middle",
    "shadow": false,
    "itemThumbnailShadowHorizontalLength": 3,
    "visible": false,
    "itemThumbnailShadow": true,
    "borderSize": 0,
    "itemLabelTextDecoration": "none",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "minHeight": 1,
    "itemThumbnailOpacity": 1,
    "itemLabelFontStyle": "normal",
    "verticalAlign": "top",
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemOpacity": 1,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 100,
    "paddingRight": 20,
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom",
    "itemBackgroundColorRatios": []
   }
  ],
  "contentOpaque": false
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "paddingBottom": 0,
  "minHeight": 1,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "width": "9.198%",
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "paddingRight": 0,
  "right": "0%",
  "paddingTop": 0,
  "maxHeight": 817
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "paddingBottom": 0,
  "minHeight": 1,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "width": "38.151%",
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "paddingRight": 0,
  "right": "8.53%",
  "paddingTop": 0,
  "maxHeight": 186
 },
 {
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "height": "33.75%",
  "width": "28.739%",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "creationPolicy": "inAdvance",
  "paddingBottom": 0,
  "minHeight": 1,
  "borderSize": 0,
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container24488"
  },
  "shadow": false,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "verticalAlign": "top",
  "paddingRight": 0,
  "left": "0.63%",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "children": [
   "this.MapViewer"
  ],
  "contentOpaque": false
 }
], 
 "start": "this.playAudioList([this.audio_F7845744_ED72_6E9D_41E5_13EF167334D7]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_CDC3AFA1_ED55_BD96_41E5_0C9E2DBC37CA.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.88,
 "mouseWheelEnabled": true,
 "height": "100%",
 "width": "100%",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "minHeight": 20,
 "borderSize": 0,
 "layout": "absolute",
 "data": {
  "name": "Player28156"
 },
 "shadow": false,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false
})