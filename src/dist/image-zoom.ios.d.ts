import { ImageZoomBase } from './image-zoom.common';
export declare class ImageZoom extends ImageZoomBase {
    _image: any;
    private delegate;
    constructor();
    createNativeView(): UIScrollView;
    disposeNativeView(): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    initNativeView(): void;
}
export declare class UIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
    private _owner;
    static ObjCProtocols: {
        prototype: UIScrollViewDelegate;
    }[];
    static initWithOwner(owner: WeakRef<ImageZoom>): UIScrollViewDelegateImpl;
    viewForZoomingInScrollView(scrollView: UIScrollView): any;
}
