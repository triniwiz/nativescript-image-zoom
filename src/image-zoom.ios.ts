import {
  ImageZoomBase,
  srcProperty,
  maxZoomScaleProperty,
  minZoomScaleProperty,
  zoomScaleProperty
} from './image-zoom.common';
import { Image, stretchProperty, Stretch } from 'tns-core-modules/ui/image';
import { layout } from 'tns-core-modules/ui/core/view';
import { topmost } from 'tns-core-modules/ui/frame';
import * as imageSource from 'tns-core-modules/image-source';
export class ImageZoom extends ImageZoomBase {
  _image: Image;
  nativeView: UIScrollView;
  private layoutWidth: number;
  private layoutHeight: number;
  private delegate: any;

  constructor() {
    super();
    this.delegate = UIScrollViewDelegateImpl.initWithOwner(
      new WeakRef<ImageZoom>(this)
    );
  }

  public createNativeView() {
    this._image = new Image();
    topmost()._addView(this._image);
    return UIScrollView.new();
  }

  public initNativeView() {
    this.nativeView.delegate = this.delegate;
    this.nativeView.zoomScale = this.zoomScale;
    this.nativeView.minimumZoomScale = this.minZoom;
    this.nativeView.maximumZoomScale = this.maxZoom;
    this.nativeView.addSubview(this._image.nativeView);
  }

  public disposeNativeView() {
    this.delegate = null;
    topmost()._removeView(this._image);
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

  public onLayout(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    super.onLayout(left, top, right, bottom);
    this.layoutWidth = right - left;
    this.layoutHeight = bottom - top;
    this._image.nativeView.frame = this.nativeView.bounds;
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    const nativeView = this.nativeView;
    if (nativeView) {
      const width = layout.getMeasureSpecSize(widthMeasureSpec);
      const height = layout.getMeasureSpecSize(heightMeasureSpec);
      this.setMeasuredDimension(width, height);
    }
  }
}

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
