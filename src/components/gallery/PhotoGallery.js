import importAll from "@/utils/import";
import Gallery from "@/components/gallery/Gallery";
const imagesList = () => {
    const images = importAll(require.context('../../assets/images/photos', false, /\.(png|jpe?g|svg)$/));
    return images.slice(images.length/2);
}

const images = imagesList().map(module =>
    module = {src: module.default.src, width: module.default.width, height: module.default.height}
)

const PhotoGallery = () => {
    return <Gallery images={images}></Gallery>
};

export default PhotoGallery;

