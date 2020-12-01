import { Property, View, ImageSource } from '@nativescript/core';
import { Stretch } from '@nativescript/core/ui/image';
export declare class ImageZoomBase extends View {
    android: any;
    ios: any;
    src: string | ImageSource;
    zoomScale: number;
    minZoom: number;
    maxZoom: number;
    stretch: string;
    resize: string;
}
export declare const resizeProperty: Property<ImageZoomBase, string>;
export declare const stretchProperty: Property<ImageZoomBase, Stretch>;
export declare const zoomScaleProperty: Property<ImageZoomBase, number>;
export declare const minZoomScaleProperty: Property<ImageZoomBase, number>;
export declare const maxZoomScaleProperty: Property<ImageZoomBase, number>;
export declare const srcProperty: Property<ImageZoomBase, any>;
