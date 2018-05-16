declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

import androidnetUri = android.net.Uri;
import androidgraphicsBitmap = android.graphics.Bitmap;
import androidgraphicsRect = android.graphics.Rect;
import javalangInteger = java.lang.Integer;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export class ImageSource {
					public static uri(param0: string): com.davemorrissey.labs.subscaleview.ImageSource;
					public static uri(param0: androidnetUri): com.davemorrissey.labs.subscaleview.ImageSource;
					public dimensions(param0: number, param1: number): com.davemorrissey.labs.subscaleview.ImageSource;
					public getBitmap(): androidgraphicsBitmap;
					public isCached(): boolean;
					public getSRegion(): androidgraphicsRect;
					public static cachedBitmap(param0: androidgraphicsBitmap): com.davemorrissey.labs.subscaleview.ImageSource;
					public tilingDisabled(): com.davemorrissey.labs.subscaleview.ImageSource;
					public region(param0: androidgraphicsRect): com.davemorrissey.labs.subscaleview.ImageSource;
					public getSWidth(): number;
					public static asset(param0: string): com.davemorrissey.labs.subscaleview.ImageSource;
					public getTile(): boolean;
					public getUri(): androidnetUri;
					public getResource(): javalangInteger;
					public tilingEnabled(): com.davemorrissey.labs.subscaleview.ImageSource;
					public static bitmap(param0: androidgraphicsBitmap): com.davemorrissey.labs.subscaleview.ImageSource;
					public tiling(param0: boolean): com.davemorrissey.labs.subscaleview.ImageSource;
					public static resource(param0: number): com.davemorrissey.labs.subscaleview.ImageSource;
					public getSHeight(): number;
				}
			}
		}
	}
}

import androidgraphicsPointF = android.graphics.PointF;
/// <reference path="./android.graphics.PointF.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export class ImageViewState {
					public constructor(param0: number, param1: androidgraphicsPointF, param2: number);
					public getScale(): number;
					public getCenter(): androidgraphicsPointF;
					public getOrientation(): number;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import androidutilAttributeSet = android.util.AttributeSet;
import androidgraphicsBitmapConfig = android.graphics.Bitmap.Config;
import androidviewMotionEvent = android.view.MotionEvent;
import androidgraphicsCanvas = android.graphics.Canvas;
import javalangClass = java.lang.Class;
import androidgraphicsRectF = android.graphics.RectF;
import javautilconcurrentExecutor = java.util.concurrent.Executor;
import androidviewViewOnLongClickListener = android.view.View.OnLongClickListener;
import javalangVoid = java.lang.Void;
import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.davemorrissey.labs.subscaleview.ImageSource.d.ts" />
/// <reference path="./com.davemorrissey.labs.subscaleview.ImageViewState.d.ts" />
/// <reference path="./com.davemorrissey.labs.subscaleview.decoder.DecoderFactory.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export class SubsamplingScaleImageView {
					public static ORIENTATION_USE_EXIF: number;
					public static ORIENTATION_0: number;
					public static ORIENTATION_90: number;
					public static ORIENTATION_180: number;
					public static ORIENTATION_270: number;
					public static ZOOM_FOCUS_FIXED: number;
					public static ZOOM_FOCUS_CENTER: number;
					public static ZOOM_FOCUS_CENTER_IMMEDIATE: number;
					public static EASE_OUT_QUAD: number;
					public static EASE_IN_OUT_QUAD: number;
					public static PAN_LIMIT_INSIDE: number;
					public static PAN_LIMIT_OUTSIDE: number;
					public static PAN_LIMIT_CENTER: number;
					public static SCALE_TYPE_CENTER_INSIDE: number;
					public static SCALE_TYPE_CENTER_CROP: number;
					public static SCALE_TYPE_CUSTOM: number;
					public static SCALE_TYPE_START: number;
					public static ORIGIN_ANIM: number;
					public static ORIGIN_TOUCH: number;
					public static ORIGIN_FLING: number;
					public static ORIGIN_DOUBLE_TAP_ZOOM: number;
					public static TILE_SIZE_AUTO: number;
					public isReady(): boolean;
					public onTouchEvent(param0: androidviewMotionEvent): boolean;
					public recycle(): void;
					public setMinScale(param0: number): void;
					public setMaxTileSize(param0: number, param1: number): void;
					public viewToSourceCoord(param0: number, param1: number): androidgraphicsPointF;
					public setRegionDecoderClass(param0: javalangClass<any>): void;
					public visibleFileRect(param0: androidgraphicsRect): void;
					public viewToSourceCoord(param0: androidgraphicsPointF, param1: androidgraphicsPointF): androidgraphicsPointF;
					public setOnImageEventListener(param0: com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.OnImageEventListener): void;
					public setImage(param0: com.davemorrissey.labs.subscaleview.ImageSource, param1: com.davemorrissey.labs.subscaleview.ImageSource, param2: com.davemorrissey.labs.subscaleview.ImageViewState): void;
					public getMinScale(): number;
					public setEagerLoadingEnabled(param0: boolean): void;
					public animateScaleAndCenter(param0: number, param1: androidgraphicsPointF): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
					public setMinimumScaleType(param0: number): void;
					public setImage(param0: com.davemorrissey.labs.subscaleview.ImageSource, param1: com.davemorrissey.labs.subscaleview.ImageSource): void;
					public isPanEnabled(): boolean;
					public setMaximumDpi(param0: number): void;
					public sourceToViewCoord(param0: androidgraphicsPointF): androidgraphicsPointF;
					public onReady(): void;
					public animateCenter(param0: androidgraphicsPointF): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
					public getPanRemaining(param0: androidgraphicsRectF): void;
					public hasImage(): boolean;
					public setExecutor(param0: javautilconcurrentExecutor): void;
					public getOrientation(): number;
					public viewToSourceCoord(param0: number, param1: number, param2: androidgraphicsPointF): androidgraphicsPointF;
					public setMinimumTileDpi(param0: number): void;
					public resetScaleAndCenter(): void;
					public setDoubleTapZoomDpi(param0: number): void;
					public setOrientation(param0: number): void;
					public isImageLoaded(): boolean;
					public setPanEnabled(param0: boolean): void;
					public getCenter(): androidgraphicsPointF;
					public animateScale(param0: number): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
					public viewToFileRect(param0: androidgraphicsRect, param1: androidgraphicsRect): void;
					public setDoubleTapZoomStyle(param0: number): void;
					public setMaxTileSize(param0: number): void;
					public getAppliedOrientation(): number;
					public isQuickScaleEnabled(): boolean;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public viewToSourceCoord(param0: androidgraphicsPointF): androidgraphicsPointF;
					public setDoubleTapZoomScale(param0: number): void;
					public getScale(): number;
					public setPanLimit(param0: number): void;
					public setScaleAndCenter(param0: number, param1: androidgraphicsPointF): void;
					public sourceToViewCoord(param0: number, param1: number, param2: androidgraphicsPointF): androidgraphicsPointF;
					public setQuickScaleEnabled(param0: boolean): void;
					public onDraw(param0: androidgraphicsCanvas): void;
					public setDebug(param0: boolean): void;
					public onImageLoaded(): void;
					public setImage(param0: com.davemorrissey.labs.subscaleview.ImageSource, param1: com.davemorrissey.labs.subscaleview.ImageViewState): void;
					public static getPreferredBitmapConfig(): androidgraphicsBitmapConfig;
					public setImage(param0: com.davemorrissey.labs.subscaleview.ImageSource): void;
					public setDoubleTapZoomDuration(param0: number): void;
					public setOnLongClickListener(param0: androidviewViewOnLongClickListener): void;
					public getState(): com.davemorrissey.labs.subscaleview.ImageViewState;
					public setBitmapDecoderFactory(param0: com.davemorrissey.labs.subscaleview.decoder.DecoderFactory): void;
					public setZoomEnabled(param0: boolean): void;
					public getSHeight(): number;
					public onMeasure(param0: number, param1: number): void;
					public setMaxScale(param0: number): void;
					public setTileBackgroundColor(param0: number): void;
					public sourceToViewCoord(param0: number, param1: number): androidgraphicsPointF;
					public setBitmapDecoderClass(param0: javalangClass<any>): void;
					public setOnStateChangedListener(param0: com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.OnStateChangedListener): void;
					public static setPreferredBitmapConfig(param0: androidgraphicsBitmapConfig): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public isZoomEnabled(): boolean;
					public setMinimumDpi(param0: number): void;
					public getMaxScale(): number;
					public getSWidth(): number;
					public sourceToViewCoord(param0: androidgraphicsPointF, param1: androidgraphicsPointF): androidgraphicsPointF;
					public setRegionDecoderFactory(param0: com.davemorrissey.labs.subscaleview.decoder.DecoderFactory): void;
					public constructor(param0: androidcontentContext);
				}
				export module SubsamplingScaleImageView {
					export class Anim {
					}
					export class AnimationBuilder {
						public withInterruptible(param0: boolean): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
						public start(): void;
						public withDuration(param0: number): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
						public withOnAnimationEventListener(param0: com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.OnAnimationEventListener): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
						public withEasing(param0: number): com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView.AnimationBuilder;
					}
					export class BitmapLoadTask {
						public doInBackground(param0: native.Array<javalangVoid>): javalangInteger;
						public onPostExecute(param0: javalangInteger): void;
					}
					export class DefaultOnAnimationEventListener {
						public constructor();
						public onComplete(): void;
						public onInterruptedByUser(): void;
						public onInterruptedByNewAnim(): void;
					}
					export class DefaultOnImageEventListener {
						public onImageLoadError(param0: javalangException): void;
						public constructor();
						public onImageLoaded(): void;
						public onPreviewLoadError(param0: javalangException): void;
						public onPreviewReleased(): void;
						public onTileLoadError(param0: javalangException): void;
						public onReady(): void;
					}
					export class DefaultOnStateChangedListener {
						public onScaleChanged(param0: number, param1: number): void;
						public constructor();
						public onCenterChanged(param0: androidgraphicsPointF, param1: number): void;
					}
					export class OnAnimationEventListener {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView$OnAnimationEventListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onComplete(): void;
							onInterruptedByUser(): void;
							onInterruptedByNewAnim(): void;
						});
						public onComplete(): void;
						public onInterruptedByUser(): void;
						public onInterruptedByNewAnim(): void;
					}
					export class OnImageEventListener {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView$OnImageEventListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onReady(): void;
							onImageLoaded(): void;
							onPreviewLoadError(param0: javalangException): void;
							onImageLoadError(param0: javalangException): void;
							onTileLoadError(param0: javalangException): void;
							onPreviewReleased(): void;
						});
						public onImageLoadError(param0: javalangException): void;
						public onImageLoaded(): void;
						public onPreviewLoadError(param0: javalangException): void;
						public onPreviewReleased(): void;
						public onTileLoadError(param0: javalangException): void;
						public onReady(): void;
					}
					export class OnStateChangedListener {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView$OnStateChangedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onScaleChanged(param0: number, param1: number): void;
							onCenterChanged(param0: androidgraphicsPointF, param1: number): void;
						});
						public onScaleChanged(param0: number, param1: number): void;
						public onCenterChanged(param0: androidgraphicsPointF, param1: number): void;
					}
					export class ScaleAndTranslate {
					}
					export class Tile {
					}
					export class TileLoadTask {
						public doInBackground(param0: native.Array<javalangVoid>): androidgraphicsBitmap;
						public onPostExecute(param0: androidgraphicsBitmap): void;
					}
					export class TilesInitTask {
						public onPostExecute(param0: native.Array<number>): void;
						public doInBackground(param0: native.Array<javalangVoid>): native.Array<number>;
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class CompatDecoderFactory {
						public constructor(param0: javalangClass<any>, param1: androidgraphicsBitmapConfig);
						public make(): javalangObject;
						public constructor(param0: javalangClass<any>);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class DecoderFactory {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.decoder.DecoderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							make(): javalangObject;
						});
						public make(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class ImageDecoder {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.decoder.ImageDecoder interface with the provided implementation.
						 */
						public constructor(implementation: {
							decode(param0: androidcontentContext, param1: androidnetUri): androidgraphicsBitmap;
						});
						public decode(param0: androidcontentContext, param1: androidnetUri): androidgraphicsBitmap;
					}
				}
			}
		}
	}
}

import androidgraphicsPoint = android.graphics.Point;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class ImageRegionDecoder {
						/**
						 * Constructs a new instance of the com.davemorrissey.labs.subscaleview.decoder.ImageRegionDecoder interface with the provided implementation.
						 */
						public constructor(implementation: {
							init(param0: androidcontentContext, param1: androidnetUri): androidgraphicsPoint;
							decodeRegion(param0: androidgraphicsRect, param1: number): androidgraphicsBitmap;
							isReady(): boolean;
							recycle(): void;
						});
						public init(param0: androidcontentContext, param1: androidnetUri): androidgraphicsPoint;
						public decodeRegion(param0: androidgraphicsRect, param1: number): androidgraphicsBitmap;
						public recycle(): void;
						public isReady(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class SkiaImageDecoder {
						public constructor();
						public constructor(param0: androidgraphicsBitmapConfig);
						public decode(param0: androidcontentContext, param1: androidnetUri): androidgraphicsBitmap;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class SkiaImageRegionDecoder {
						public constructor();
						public init(param0: androidcontentContext, param1: androidnetUri): androidgraphicsPoint;
						public decodeRegion(param0: androidgraphicsRect, param1: number): androidgraphicsBitmap;
						public constructor(param0: androidgraphicsBitmapConfig);
						public recycle(): void;
						public isReady(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module com {
	export module davemorrissey {
		export module labs {
			export module subscaleview {
				export module decoder {
					export class SkiaPooledImageRegionDecoder {
						public constructor();
						public init(param0: androidcontentContext, param1: androidnetUri): androidgraphicsPoint;
						public decodeRegion(param0: androidgraphicsRect, param1: number): androidgraphicsBitmap;
						public static setDebug(param0: boolean): void;
						public constructor(param0: androidgraphicsBitmapConfig);
						public recycle(): void;
						public isReady(): boolean;
						public allowAdditionalDecoder(param0: number, param1: number): boolean;
					}
					export module SkiaPooledImageRegionDecoder {
						export class DecoderPool {
						}
					}
				}
			}
		}
	}
}

