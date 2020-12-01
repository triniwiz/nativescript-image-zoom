import { ImageZoom } from '../image-zoom';

const ImageZoomPlugin = {
    install(Vue) {
        Vue.registerElement('ImageZoom', () => ImageZoom);
    }
};

export default ImageZoomPlugin;