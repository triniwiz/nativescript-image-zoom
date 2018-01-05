import { Image, Stretch } from 'tns-core-modules/ui/image';
import { layout } from 'tns-core-modules/ui/core/view';
import { topmost } from 'tns-core-modules/ui/frame';
import * as imageSource from 'tns-core-modules/image-source';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';

import { Property } from 'tns-core-modules/ui/core/view';

export const stretchProperty = new Property<ImageZoom, Stretch>({
  name: 'stretch'
});

export const zoomScaleProperty = new Property<ImageZoom, number>({
  name: 'zoomScale',
  defaultValue: 1
});

export const minZoomScaleProperty = new Property<ImageZoom, number>({
  name: 'minZoom',
  defaultValue: 1
});

export const maxZoomScaleProperty = new Property<ImageZoom, number>({
  name: 'maxZoom',
  defaultValue: 4
});

export const srcProperty = new Property<ImageZoom, string>({
  name: 'src'
});

export class ImageZoom extends ScrollView {
  _image: Image;
  nativeView: UIScrollView;
  private layoutWidth: number;
  private layoutHeight: number;
  private delegate: any;
  src: string;
  zoomScale: number;
  minZoom: number;
  maxZoom: number;
  stretch: string;
  constructor() {
    super();
    this.delegate = UIScrollViewDelegateImpl.initWithOwner(
      new WeakRef<ImageZoom>(this)
    );
    const nativeView = this.nativeView;
    this._image = new Image();
    nativeView.delegate = this.delegate;
    nativeView.zoomScale = this.zoomScale;
    nativeView.minimumZoomScale = this.minZoom;
    nativeView.maximumZoomScale = this.maxZoom;
    this.content = this._image;
  }

  public disposeNativeView() {
    this.delegate = null;
  }

  [srcProperty.setNative](src: string) {
    if (src.startsWith('res://')) {
      this._image.imageSource = imageSource.fromNativeSource(
        UIImage.imageNamed(src.replace('res://', ''))
      );
    } else {
      this._image.src = src;
    }
  }

  [stretchProperty.setNative](stretch: Stretch) {
    this._image.stretch = stretch;
  }

  [zoomScaleProperty.setNative](scale: number) {
    if (this.nativeView) {
      this.nativeView.zoomScale = scale;
    }
  }

  [minZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView) {
      this.nativeView.minimumZoomScale = scale;
    }
  }

  [maxZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView) {
      this.nativeView.maximumZoomScale = scale;
    }
  }
}

srcProperty.register(ImageZoom);
stretchProperty.register(ImageZoom);
zoomScaleProperty.register(ImageZoom);
minZoomScaleProperty.register(ImageZoom);
maxZoomScaleProperty.register(ImageZoom);

export class UIScrollViewDelegateImpl extends NSObject
  implements UIScrollViewDelegate {
  private owner: WeakRef<ImageZoom>;
  public static ObjCProtocols = [UIScrollViewDelegate];

  public static initWithOwner(
    owner: WeakRef<ImageZoom>
  ): UIScrollViewDelegateImpl {
    const delegate = new UIScrollViewDelegateImpl();
    delegate.owner = owner;
    return delegate;
  }

  viewForZoomingInScrollView(scrollView: UIScrollView) {
    const owner = this.owner.get();
    return owner._image.nativeView;
  }
}
