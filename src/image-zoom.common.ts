import { Property, View } from 'tns-core-modules/ui/core/view';
import { Stretch } from 'tns-core-modules/ui/image/image';

export class ImageZoomBase extends View {
  src: string;
  zoomScale: number;
  minZoom: number;
  maxZoom: number;
  stretch: string;
}

export const stretchProperty = new Property<ImageZoomBase, Stretch>({
  name: 'stretch'
});

export const zoomScaleProperty = new Property<ImageZoomBase, number>({
  name: 'zoomScale',
  defaultValue: 1
});

export const minZoomScaleProperty = new Property<ImageZoomBase, number>({
  name: 'minZoom',
  defaultValue: 1
});

export const maxZoomScaleProperty = new Property<ImageZoomBase, number>({
  name: 'maxZoom',
  defaultValue: 4
});

export const srcProperty = new Property<ImageZoomBase, string>({
  name: 'src'
});

srcProperty.register(ImageZoomBase);
stretchProperty.register(ImageZoomBase);
zoomScaleProperty.register(ImageZoomBase);
minZoomScaleProperty.register(ImageZoomBase);
maxZoomScaleProperty.register(ImageZoomBase);
