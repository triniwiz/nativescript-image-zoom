import {
  ImageZoomBase,
  maxZoomScaleProperty,
  minZoomScaleProperty,
  srcProperty
} from './image-zoom.common';
import * as fs from 'tns-core-modules/file-system';
import * as utils from 'tns-core-modules/utils/utils';
import * as imageSource from 'tns-core-modules/image-source';
declare const com;

export class ImageZoom extends ImageZoomBase {
  public createNativeView() {
    return new com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView(
      this._context
    );
  }
  public initNativeView() {
    if (this.nativeView) {
      this.nativeView.setMinScale(this.minZoom);
      this.nativeView.setMaxScale(this.maxZoom);
    }
  }
  [minZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView) {
      this.nativeView.setMinScale(scale);
    }
  }

  [maxZoomScaleProperty.setNative](scale: number) {
    if (this.nativeView) {
      this.nativeView.setMaxScale(scale);
    }
  }

  [srcProperty.setNative](src: string) {
    if (!src) return;
    let source;
    if (src.startsWith('~/')) {
      const uri = fs.path.join(
        fs.knownFolders.currentApp().path,
        src.replace('~/', '')
      );
      source = com.davemorrissey.labs.subscaleview.ImageSource.uri(uri);
    } else if (src.startsWith('res://')) {
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
    } else if (src.startsWith('http')) {
      imageSource.fromUrl(src).then((data: imageSource.ImageSource) => {
        source = com.davemorrissey.labs.subscaleview.ImageSource.bitmap(
          data.android
        );
        this.nativeView.setImage(source);
      });
    } else {
      source = com.davemorrissey.labs.subscaleview.ImageSource.uri(src);
    }

    if (this.nativeView && source) {
      this.nativeView.setImage(source);
    }
  }
}
