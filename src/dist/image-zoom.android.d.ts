import { ImageZoomBase } from './image-zoom.common';
export declare class ImageZoom extends ImageZoomBase {
    picasso: any;
    private builder;
    constructor();
    createNativeView(): any;
    initNativeView(): void;
    private getResourceId;
    set borderRadius(value: any);
    set borderWidth(value: any);
    set borderLeftWidth(value: any);
    set borderRightWidth(value: any);
    set borderBottomWidth(value: any);
    set borderTopWidth(value: any);
    set borderBottomLeftRadius(value: any);
    set borderBottomRightRadius(value: any);
    set borderTopLeftRadius(value: any);
    set borderTopRightRadius(value: any);
    private getImage;
    clearItem(): void;
    private setBorderAndRadius;
    private setAspectResize;
    private resetImage;
}
