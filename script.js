TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Living Room",
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "buttonZoomOut": {
   "class": "IconButton",
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipFontStyle": "normal",
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingBottom": 4,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "borderSize": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "toolTip": "Zoom Out",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonPlayLeft": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonPause": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 40,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "height": 40,
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "class": "IconButton",
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipFontStyle": "normal",
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingBottom": 4,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "borderSize": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "toolTip": "Zoom In",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 162.41,
     "path": "shortest",
     "yawSpeed": 74.1,
     "easing": "linear",
     "targetPitch": -4.96,
     "pitchSpeed": 37.38
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 63.94,
   "pitch": -2.71
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "Intro",
  "thumbnailUrl": "media/video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
  "loop": false,
  "height": 1080
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Entry",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 385.42,
    "x": 461.95,
    "angle": -7.99,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.27,
     "thumbnailUrl": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_t.png",
     "width": 1370,
     "id": "map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
     "fieldOfViewOverlayInsideColor": "#006699",
     "height": 698,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_0_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 340.42,
        "x": 416.95,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_1_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 335.66,
        "x": 31.23,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_2_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 116.08,
        "x": 283.42,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_3_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 97.94,
        "x": 672.61,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_4_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 340.22,
        "x": 584.18,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_5_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 481.48,
        "x": 652.39,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_6_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 235.83,
        "x": 764.21,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_7_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 338.44,
        "x": 777.69,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_7.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_8_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 61.96,
        "x": 883.86,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_8.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_9_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 337.44,
        "x": 962.87,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_9.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_10_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 506.76,
        "x": 1213.37,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_10.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_11_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 232.17,
        "x": 1203.46,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_11.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
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
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_12_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 46.79,
        "x": 1184.52,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_FF38F1CA_ED5E_6595_41E7_23354DB30110_HS_12.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "image": {
      "class": "ImageResource",
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
      ]
     },
     "minimumZoomFactor": 0.5,
     "label": "Lowe layout matterport",
     "maximumZoomFactor": 1.2,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.18
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "class": "ViewerArea",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipDisplayTime": 600,
   "progressBorderRadius": 4,
   "playbackBarBorderRadius": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 4,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressHeight": 20,
   "paddingBottom": 0,
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBottom": 2,
   "transitionDuration": 500,
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipFontFamily": "Arial",
   "toolTipOpacity": 1,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderSize": 0,
   "playbackBarOpacity": 1,
   "minHeight": 1,
   "progressBackgroundOpacity": 1,
   "progressBarOpacity": 1,
   "paddingTop": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderSize": 1,
   "paddingRight": 0,
   "toolTipShadowColor": "#333333",
   "paddingLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipPaddingTop": 4,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "progressOpacity": 1,
   "playbackBarHeadShadow": true,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "width": "100%",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "progressRight": 10,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadHeight": 30,
   "transitionMode": "blending",
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderSize": 1,
   "height": "100%",
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarRight": 0,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBorderColor": "#000000",
   "toolTipFontSize": 12,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadWidth": 6,
   "minWidth": 1,
   "playbackBarBorderSize": 2,
   "playbackBarHeight": 20,
   "top": "0%",
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "borderSize": 0,
   "borderRadius": 0,
   "id": "MapViewer",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressOpacity": 1,
   "playbackBarBorderColor": "#AAAAAA",
   "progressLeft": 10,
   "left": "0%",
   "toolTipShadowSpread": 0,
   "progressBorderColor": "#AAAAAA",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "toolTipPaddingLeft": 6
  },
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.57,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.31,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.66,
   "pitch": 0.04
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Living Room",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 380.66,
    "x": 76.23,
    "angle": -30.39,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 70.84,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.19,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.18,
   "pitch": -2.6
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Kitchen",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 161.08,
    "x": 328.42,
    "angle": 219.14,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.95,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.15,
   "pitch": -0.52
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Laundry Room",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 142.94,
    "x": 717.61,
    "angle": 111.73,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 153.62,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -45.6,
   "pitch": -0.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 385.22,
    "x": 629.18,
    "angle": 258.9,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -166.56,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.82,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.3,
   "pitch": 1.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 382.44,
    "x": 1007.87,
    "angle": 177.96,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -89.31,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.94,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.39,
   "pitch": 3.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 551.76,
    "x": 1258.37,
    "angle": 0,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -8.54,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.71,
   "pitch": -4.9
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bath",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 277.17,
    "x": 1248.46,
    "angle": -66.52,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 59.54,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.08,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": -2.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Luxury Bath",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 91.79,
    "x": 1229.52,
    "angle": -66.13,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -133.4,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.04,
   "pitch": -3.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom 2",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 526.48,
    "x": 697.39,
    "angle": 142.9,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 53.64,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.47,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.32,
   "pitch": -5.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 383.44,
    "x": 822.69,
    "angle": 252.33,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -159.65,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": 5.34,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 125.86,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 4.58,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 19.22,
   "pitch": 4.9
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom 3",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 106.96,
    "x": 928.86,
    "angle": 69.77,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -50.12,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.82,
   "pitch": -3.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_t.jpg",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bath 2",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 280.83,
    "x": 809.21,
    "angle": 96.59,
    "map": "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -4.27,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.07,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -176.23,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -7.22,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.56,
   "pitch": -5.65
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "Shasta Tour",
  "thumbnailUrl": "media/video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2_t.jpg",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "mp4Url": "media/video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2.mp4",
   "width": 720
  },
  "width": 720,
  "id": "video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
  "loop": false,
  "height": 480
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "Shasta Walkthrough",
  "thumbnailUrl": "media/video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0_t.jpg",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0.mp4",
   "width": 1280
  },
  "width": 1280,
  "id": "video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
  "loop": false,
  "height": 720
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album",
  "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.63",
       "y": "0.65",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "02.18.2025_09.49.16",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0_t.png",
      "width": 3840,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_0",
      "height": 2160,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.56",
       "y": "0.64",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "DJI screeenshot",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1_t.jpg",
      "width": 2156,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_1",
      "height": 1213,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.64",
       "y": "0.47",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "DJI_0254",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2_t.jpg",
      "width": 4000,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_2",
      "height": 2250,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.69",
       "y": "0.69",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "ING 564F outside1",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3_t.png",
      "width": 2860,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_3",
      "height": 907,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.56",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "inside",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4_t.png",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_4",
      "height": 2470,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.73",
       "y": "0.66",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "layout",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5_t.jpg",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_5",
      "height": 2470,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.57",
       "y": "0.69",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "left side",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6_t.png",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_6",
      "height": 2470,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.66",
       "y": "0.33",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Lowe layout matterport",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7_t.png",
      "width": 1370,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_7",
      "height": 698,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.36",
       "y": "0.43",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "no roof1",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8_t.png",
      "width": 3395,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_8",
      "height": 2030,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.38",
       "y": "0.58",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Project Overview Shasta ING",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9_t.jpg",
      "width": 3856,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_9",
      "height": 2470,
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.63",
       "y": "0.64",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Screenshot 2024-10-21 124832",
      "thumbnailUrl": "media/album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10_t.png",
      "width": 1998,
      "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225_10",
      "height": 919,
      "duration": 5000
     }
    }
   ]
  },
  "id": "album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225"
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165536A8_06D1_6049_418E_05C8D6A9888F",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165536A8_06D1_6049_418E_05C8D6A9888F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165486A8_06D1_6049_415A_0E95821DB808",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165486A8_06D1_6049_415A_0E95821DB808, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165416A8_06D1_6049_4145_77F8C40F3430",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165416A8_06D1_6049_4145_77F8C40F3430, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_1653D6A8_06D1_6049_4199_410CBF9AE9DF",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_1653D6A8_06D1_6049_4199_410CBF9AE9DF, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165366A8_06D1_6049_4165_2F7B03EAB08C",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165366A8_06D1_6049_4165_2F7B03EAB08C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_1652E6A8_06D1_6049_4194_1A1BDBAE07BD",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_1652E6A8_06D1_6049_4194_1A1BDBAE07BD, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165246A8_06D1_6049_4182_C85CEFC73B93",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165246A8_06D1_6049_4182_C85CEFC73B93, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165226A8_06D1_6049_4173_DFABBFE90FC6",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165226A8_06D1_6049_4173_DFABBFE90FC6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_1651B6A8_06D1_6049_4194_5F6BB4BE9C96",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_1651B6A8_06D1_6049_4194_5F6BB4BE9C96, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165116A8_06D1_6049_4193_AFAAF67C2520",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165116A8_06D1_6049_4193_AFAAF67C2520, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_1650C6A8_06D1_6049_417D_5548B8CD4756",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_1650C6A8_06D1_6049_417D_5548B8CD4756, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165066A8_06D1_6049_4186_35C959C0AD83",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165066A8_06D1_6049_4186_35C959C0AD83, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_165F96A8_06D1_6049_4194_C4EE916403B6",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_165F96A8_06D1_6049_4194_C4EE916403B6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15, this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16, this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "media": "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
    "player": "this.MainViewerPhotoAlbumPlayer",
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
    "media": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 0)",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera"
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "camera": "this.panorama_09A8457B_06D2_E0CF_419B_1D62D23944C2_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F69B1355_ED4E_E6BE_41B6_FB55E0CCF1B4",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "camera": "this.panorama_E08F4D1B_ED32_E2AA_41E2_1A9B2D9C3AD4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "camera": "this.panorama_E32129FC_ED32_656E_41D7_ED66B7280BE3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "camera": "this.panorama_FDDB3319_ED35_A6B6_41CA_740CF3C4177B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "camera": "this.panorama_FD0B08AF_ED32_A3EA_41E4_BE87D825D51A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "camera": "this.panorama_FDC5C4AF_ED4E_E3EA_41EC_BCCDE7EFF968_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "camera": "this.panorama_FD193ED2_ED52_DFB5_41E2_946ED13ECFE1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "camera": "this.panorama_FD2E92D6_ED55_A7BA_41CB_66343C074B6F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 10)",
    "camera": "this.panorama_FD26D9D5_ED56_A5BE_4189_385EACB15D00_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 10, 11)",
    "camera": "this.panorama_FD14796F_ED57_E56A_41D4_06A4A272AE12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 11, 12)",
    "camera": "this.panorama_FD1D4629_ED4F_AE96_41E5_15C3FE4ACF12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 12, 13)",
    "camera": "this.panorama_FD1C0DD4_ED52_BDBE_41DC_1DBDC18DB4D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 13, 14)",
    "camera": "this.panorama_FD16D558_ED53_A2B6_41DE_00578BC23573_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 14, 15)",
    "camera": "this.panorama_FD79505E_ED4D_A2AD_41DE_701814A90546_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 15, this.video_F579FC77_ED72_E37A_41E2_2EEF263BE6C2)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, 17)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 16, this.video_F44D7245_ED77_A69E_41E4_D5E5A929FFA0)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_F6F516CB_ED7F_AFAA_41B3_B3783DA93225",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 17, 0)"
   }
  ]
 },
 "this.map_FF38F1CA_ED5E_6595_41E7_23354DB30110",
 {
  "class": "PlayList",
  "id": "playList_165676A8_06D1_6049_4198_C92E534060FA",
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
  "id": "playList_165666A8_06D1_6049_4183_7FE7F6EDEC65",
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
  "class": "MediaAudio",
  "id": "audio_F7845744_ED72_6E9D_41E5_13EF167334D7",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_F7845744_ED72_6E9D_41E5_13EF167334D7.mp3",
   "oggUrl": "media/audio_F7845744_ED72_6E9D_41E5_13EF167334D7.ogg"
  },
  "data": {
   "label": "Shasta_ING_564F voice tour"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipDisplayTime": 600,
  "progressBorderRadius": 4,
  "playbackBarBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 20,
  "paddingBottom": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBottom": 1,
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressRight": 10,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadHeight": 30,
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderSize": 1,
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadWidth": 6,
  "minWidth": 100,
  "playbackBarBorderSize": 2,
  "playbackBarHeight": 20,
  "top": 77,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "left": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarProgressBorderColor": "#000000",
  "right": 0,
  "toolTipShadowSpread": 0,
  "bottom": 92,
  "playbackBarBottom": 10
 },
 {
  "class": "ThumbnailList",
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowBlurRadius": 4,
  "backgroundColorRatios": [
   0
  ],
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFFF00",
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.8,
  "paddingBottom": 10,
  "shadow": false,
  "itemVerticalAlign": "middle",
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontWeight": "bold",
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "minHeight": 0,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "paddingRight": 20,
  "itemThumbnailHeight": 70,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "itemPaddingBottom": 3,
  "maxHeight": 800,
  "paddingTop": 10,
  "itemThumbnailShadowVerticalLength": 3,
  "paddingLeft": 20,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "width": 158.5,
  "itemLabelFontFamily": "Arial",
  "playList": "this.thumbnaillist5245_playlist",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailBorderRadius": 5,
  "scrollBarWidth": 10,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "maxWidth": 800,
  "itemOpacity": 1,
  "bottom": "10.1%",
  "borderRadius": 5,
  "id": "thumbnaillist5245",
  "rollOverItemLabelFontColor": "#FF0000",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailShadowSpread": 1,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadow": true,
  "borderSize": 0,
  "itemThumbnailWidth": 100,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemThumbnailOpacity": 1,
  "backgroundColorDirection": "vertical",
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom"
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "width": "100%",
  "height": 92,
  "children": [
   {
    "class": "Label",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "fontSize": 40,
    "width": 374,
    "textDecoration": "none",
    "fontFamily": "Arial",
    "text": "Shasta ING 564F",
    "paddingBottom": 0,
    "shadow": false,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "minWidth": 30,
    "fontColor": "#666666",
    "borderSize": 0,
    "borderRadius": 0,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "minHeight": 16,
    "paddingRight": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "height": "100%"
   },
   {
    "class": "Container",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "width": 805.5,
    "height": "93.478%",
    "children": [
     {
      "class": "IconButton",
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "horizontalAlign": "center",
      "mode": "toggle",
      "toolTipFontStyle": "normal",
      "width": 40,
      "toolTipDisplayTime": 600,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "height": 40,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipPaddingBottom": 4,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontColor": "#606060",
      "shadow": false,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "minWidth": 0,
      "toolTipFontWeight": "normal",
      "cursor": "hand",
      "borderSize": 0,
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "toolTipFontFamily": "Arial",
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "toolTip": "Mute",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipShadowSpread": 0,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowVerticalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipPaddingTop": 4,
      "toolTipTextShadowColor": "#000000"
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "class": "Container",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 133,
      "height": "100%",
      "children": [
       {
        "class": "Container",
        "paddingLeft": 0,
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "width": 47,
        "height": "100%",
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "backgroundColorRatios": [
         0
        ],
        "layout": "vertical",
        "scrollBarVisible": "rollOver",
        "paddingBottom": 0,
        "scrollBarWidth": 10,
        "shadow": false,
        "scrollBarMargin": 2,
        "minWidth": 20,
        "borderSize": 0,
        "borderRadius": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "data": {
         "name": "Container1202"
        },
        "verticalAlign": "middle",
        "minHeight": 20,
        "backgroundColorDirection": "vertical",
        "paddingTop": 0,
        "backgroundOpacity": 1,
        "scrollBarOpacity": 0.5,
        "creationPolicy": "inAdvance",
        "paddingRight": 0,
        "gap": 10,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "backgroundColorRatios": [
       0
      ],
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "borderSize": 0,
      "borderRadius": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "data": {
       "name": "Container1200"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5,
      "creationPolicy": "inAdvance",
      "paddingRight": 0,
      "gap": 5,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "class": "Container",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 85,
      "height": "100%",
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "backgroundColorRatios": [
       0
      ],
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "borderSize": 0,
      "borderRadius": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "data": {
       "name": "Container1206"
      },
      "verticalAlign": "middle",
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5,
      "creationPolicy": "inAdvance",
      "paddingRight": 0,
      "gap": 10,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "backgroundColorRatios": [
     0
    ],
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "paddingBottom": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "minWidth": 468,
    "borderSize": 0,
    "borderRadius": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "paddingTop": 0,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "creationPolicy": "inAdvance",
    "paddingRight": 0,
    "gap": 10,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   {
    "class": "ThumbnailList",
    "paddingTop": 10,
    "horizontalAlign": "left",
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "itemThumbnailShadowBlurRadius": 8,
    "height": 92,
    "width": "28.046%",
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontFamily": "Arial",
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "paddingBottom": 10,
    "rollOverItemBackgroundOpacity": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "shadow": false,
    "itemThumbnailBorderRadius": 2,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "rollOverItemLabelFontColor": "#003399",
    "minWidth": 20,
    "itemOpacity": 1,
    "borderSize": 0,
    "borderRadius": 5,
    "itemLabelFontColor": "#000000",
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 20,
    "itemThumbnailShadow": true,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "backgroundOpacity": 0,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "gap": 13,
    "itemThumbnailOpacity": 1,
    "itemThumbnailWidth": 94,
    "selectedItemLabelFontColor": "#FFCC00",
    "paddingRight": 20,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "paddingLeft": 20,
    "scrollBarVisible": "always",
    "itemLabelPosition": "top",
    "itemBackgroundColorRatios": []
   },
   {
    "class": "ThumbnailList",
    "paddingTop": 10,
    "horizontalAlign": "left",
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "width": "26.327%",
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontFamily": "Arial",
    "layout": "horizontal",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "paddingBottom": 10,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "shadow": false,
    "itemThumbnailBorderRadius": 5,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "minWidth": 1,
    "itemOpacity": 1,
    "borderSize": 0,
    "borderRadius": 5,
    "itemLabelFontColor": "#FFFFFF",
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 1,
    "visible": false,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "backgroundOpacity": 0,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "gap": 13,
    "itemThumbnailShadow": true,
    "itemThumbnailWidth": 100,
    "paddingRight": 20,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailOpacity": 1,
    "paddingLeft": 20,
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom",
    "itemBackgroundColorRatios": []
   }
  ],
  "scrollBarVisible": "rollOver",
  "layout": "horizontal",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "gap": 6,
  "bottom": "0%",
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "9.198%",
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "right": "0%",
  "maxHeight": 817
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "38.151%",
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "right": "8.53%",
  "maxHeight": 186
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "width": "28.739%",
  "height": "33.75%",
  "children": [
   "this.MapViewer"
  ],
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "borderSize": 0,
  "borderRadius": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "data": {
   "name": "Container24488"
  },
  "verticalAlign": "top",
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "class": "Player",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "horizontalAlign": "left",
 "height": "100%",
 "vrPolyfillScale": 0.88,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "borderSize": 0,
 "borderRadius": 0,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "gap": 10,
 "start": "this.playAudioList([this.audio_F7845744_ED72_6E9D_41E5_13EF167334D7]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_165666A8_06D1_6049_4183_7FE7F6EDEC65.set('selectedIndex', 0)",
 "contentOpaque": false,
 "overflow": "visible"
})