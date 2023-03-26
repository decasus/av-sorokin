import Gallery from "@/components/gallery/Gallery";
import importAll from "@/utils/import";
const imagesList = () => {
    const images = importAll(require.context('../../assets/images/diplomas', false, /\.(png|jpe?g|svg)$/));
    return images.slice(images.length/2);
}

const DiplomasGallery = () => {
    return <Gallery images={imagesList()}></Gallery>
};

export default DiplomasGallery;

