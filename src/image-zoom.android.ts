import {
  ImageZoomBase,
  maxZoomScaleProperty,
  minZoomScaleProperty,
  srcProperty,
  stretchProperty
} from './image-zoom.common';
import * as fs from 'tns-core-modules/file-system';
import * as utils from 'tns-core-modules/utils/utils';
import * as types from 'tns-core-modules/utils/types';
import * as bg from 'tns-core-modules/ui/styling/background';
import * as imageSource from 'tns-core-modules/image-source';
import { layout } from 'tns-core-modules/ui/core/view';
import * as platform from 'tns-core-modules/platform';
import * as app from 'tns-core-modules/application';
import { Stretch } from 'tns-core-modules/ui/image/image';

// declare const com;

export class ImageZoom extends ImageZoomBase {
  _stretch: any;
  nativeView: TNSImageZoom;
  public createNativeView() {
    const nativeView = new TNSImageZoom(this._context);
    nativeView.setOwner(new WeakRef(this));
    return nativeView;
  }
  public initNativeView() {
    if (this.nativeView) {
      if (types.isNumber(this.minZoom)) {
        this.nativeView.setMinimumScaleType(
          com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
            .SCALE_TYPE_CUSTOM
        );
        this.nativeView.setMinScale(this.minZoom);
      }

      if (types.isNumber(this.maxZoom)) {
        this.nativeView.setMaxScale(this.maxZoom);
      }
    }
  }

  [minZoomScaleProperty.getDefault](): number {
    return null;
  }

  [maxZoomScaleProperty.getDefault](): number {
    return null;
  }

  [stretchProperty.setNative](stretch: Stretch) {
    switch (stretch) {
      case 'aspectFill':
        this.nativeView.setMinimumScaleType(
          com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
            .SCALE_TYPE_CENTER_CROP
        );
        break;
      case 'aspectFit':
        this.nativeView.setMinimumScaleType(
          com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
            .SCALE_TYPE_CENTER_INSIDE
        );
        break;
      case 'fill':
        this.nativeView.setMinimumScaleType(
          com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
            .SCALE_TYPE_START
        );
        break;
      default:
        this.nativeView.setMinimumScaleType(
          com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
            .SCALE_TYPE_CUSTOM
        );
        break;
    }
  }

  [minZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView && types.isNumber(scale)) {
      this.nativeView.setMinimumScaleType(
        com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView
          .SCALE_TYPE_CUSTOM
      );
      this.nativeView.setMinScale(scale);
    }
  }

  [maxZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView && types.isNumber(scale)) {
      this.nativeView.setMaxScale(this.maxZoom);
    }
  }

  [srcProperty.setNative](src: string) {
    if (!src) return;
    let source;
    const isString = typeof src === 'string';
    if (isString && src.startsWith('~/')) {
      const uri = fs.path.join(
        fs.knownFolders.currentApp().path,
        src.replace('~/', '')
      );
      source = com.davemorrissey.labs.subscaleview.ImageSource.uri(uri);
    } else if (isString && src.startsWith('res://')) {
      const name = src.replace('res://', '');
      const identifier: number = utils.ad
        .getApplication()
        .getResources()
        .getIdentifier(
          name,
          'drawable',
          utils.ad.getApplication().getPackageName()
        );
      source = com.davemorrissey.labs.subscaleview.ImageSource.resource(
        identifier
      );
    } else if (isString && src.startsWith('http')) {
      imageSource.fromUrl(src).then((data: imageSource.ImageSource) => {
        source = com.davemorrissey.labs.subscaleview.ImageSource.bitmap(
          data.android
        );
        this.nativeView.setImage(source);
      });
    } else if (typeof src === 'object') {
      source = com.davemorrissey.labs.subscaleview.ImageSource.bitmap(
        (<imageSource.ImageSource>src).android
      );
    } else {
      source = com.davemorrissey.labs.subscaleview.ImageSource.uri(src);
    }
    if (this.nativeView && source) {
      this.nativeView.setImage(source);
    }
  }
}

@JavaProxy('com.github.triniwiz.imagezoom.TNSImageZoom')
export class TNSImageZoom extends com.davemorrissey.labs.subscaleview
  .SubsamplingScaleImageView {
  owner: WeakRef<ImageZoom>;
  private paint: android.graphics.Paint;
  private maskPaint: android.graphics.Paint;
  private rectf: android.graphics.RectF;
  private offscreenBitmap: android.graphics.Bitmap;
  private mask: android.graphics.Bitmap;
  constructor(context, attrs = null) {
    super(context, attrs);
    return global.__native(this);
  }
  setOwner(owner) {
    this.owner = owner;
  }
  private createMask(
    width,
    height,
    background: org.nativescript.widgets.BorderDrawable
  ) {
    if (!this.mask) {
      this.mask = android.graphics.Bitmap.createBitmap(
        width,
        height,
        android.graphics.Bitmap.Config.ALPHA_8
      );
    }

    const canvas = new android.graphics.Canvas(this.mask);

    const paint = new android.graphics.Paint(
      android.graphics.Paint.ANTI_ALIAS_FLAG
    );
    paint.setColor(android.graphics.Color.WHITE);

    canvas.drawRect(0, 0, width, height, paint);

    paint.setXfermode(
      new android.graphics.PorterDuffXfermode(
        android.graphics.PorterDuff.Mode.CLEAR
      )
    );

    if (background.hasUniformBorderColor()) {
      canvas.drawRoundRect(
        new android.graphics.RectF(0, 0, width, height),
        layout.toDevicePixels(50),
        layout.toDevicePixels(50),
        paint
      );
      canvas.drawRect(new android.graphics.Rect(0, 0, 0, height), paint);
    } else {
      canvas.drawRoundRect(
        new android.graphics.RectF(0, 0, width, height),
        layout.toDevicePixels(50),
        layout.toDevicePixels(50),
        paint
      );
      canvas.drawRect(new android.graphics.Rect(0, 0, 0, height), paint);
    }

    return this.mask;
  }

  public destroy() {
    if (this.mask != null) {
      this.mask.recycle();
    }

    if (this.offscreenBitmap != null) {
      this.offscreenBitmap.recycle();
    }
  }

  public onDraw(canvas: android.graphics.Canvas) {
    if (!this.offscreenBitmap) {
      this.offscreenBitmap = android.graphics.Bitmap.createBitmap(
        canvas.getWidth(),
        canvas.getHeight(),
        android.graphics.Bitmap.Config.ARGB_8888
      );
    }

    const offscreenCanvas = new android.graphics.Canvas(this.offscreenBitmap);

    super.onDraw(offscreenCanvas);
    if (!this.isReady()) {
      return;
    }

    if (!this.paint) {
      (this as any).setLayerType(android.view.View.LAYER_TYPE_SOFTWARE, null);

      this.paint = new android.graphics.Paint(
        android.graphics.Paint.ANTI_ALIAS_FLAG
      );

      this.maskPaint = new android.graphics.Paint(
        android.graphics.Paint.ANTI_ALIAS_FLAG |
          android.graphics.Paint.FILTER_BITMAP_FLAG
      );
      this.maskPaint.setXfermode(
        new android.graphics.PorterDuffXfermode(
          android.graphics.PorterDuff.Mode.CLEAR
        )
      );
    }

    const owner = this.owner && this.owner.get() ? this.owner.get() : null;
    if (owner) {
      const background = owner.nativeViewProtected.getBackground() as org.nativescript.widgets.BorderDrawable;

      const maskBitmap = this.createMask(
        canvas.getWidth(),
        canvas.getHeight(),
        background
      );
      if (maskBitmap !== null) {
        offscreenCanvas.drawBitmap(maskBitmap, 0, 0, this.maskPaint);
        canvas.drawBitmap(this.offscreenBitmap, 0, 0, this.paint);
      }
      background.draw(canvas);
    }
  }
}
