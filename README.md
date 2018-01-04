# NativeScript Image Zoom

[![npm](https://img.shields.io/npm/v/nativescript-image-zoom.svg)](https://www.npmjs.com/package/nativescript-image-zoom)
[![npm](https://img.shields.io/npm/dt/nativescript-image-zoom.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image-zoom)
[![Build Status](https://travis-ci.org//triniwiz/nativescript-image-zoom.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-image-zoom)

## Installation

```
tns plugin add nativescript-image-zoom
```

# Configuration

IMPORTANT: Make sure you include xmlns:ui="nativescript-image-zoom" on the
Page element

```xml
<ui:ImageZoom src="~/images/148080.jpg" maxZoom="5" minZoom="2"/>
```

#### Angular

```
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);
```

```xml
<ImageZoom src="~/images/148080.jpg" maxZoom="5" minZoom="2"></ImageZoom>
```


# API


## Properties

| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| maxZoom | 5 | number | <ul><li>- [ ] </li></ul> | |
| minZoom | 1 | number | <ul><li>- [ ] </li></ul> |  |
| zoomScale | 1 | number | <ul><li>- [ ] </li></ul> | *IOS only*|
| src |  | string | <ul><li>- [x] </li></ul> | |


## ScreenShots
| IOS | Android|
| --- | ---|
|![IOS](https://i.imgur.com/XDBYVdW.gif) | ![Android](https://i.imgur.com/UL20npq.gif)|


