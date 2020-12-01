import { ImageZoom } from '../index';

const ImageZoomPlugin = {
    install(Vue) {
        Vue.registerElement('ImageZoom', () => ImageZoom);
    }
};

export default ImageZoomPlugin;