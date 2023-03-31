import Gallery from "@/components/gallery/Gallery";
import importAll from "@/utils/import";
const imagesList = () => {
    const images = importAll(require.context('../../assets/images/diplomas', false, /\.(png|jpe?g|svg)$/));
    return images.slice(images.length/2);
}

const images = imagesList().map(module =>
    module = {src: module.default.src, width: module.default.width, height: module.default.height}
)

const DiplomasGallery = () => {
    return <Gallery images={images}></Gallery>
};

export default DiplomasGallery;

