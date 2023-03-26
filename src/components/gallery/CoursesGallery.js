import Gallery from "@/components/gallery/Gallery";
import importAll from "@/utils/import";
const imagesList = () => {
    const images = importAll(require.context('../../assets/images/courses', false, /\.(png|jpe?g|svg)$/));
    return images.slice(images.length/2);
}

const CoursesGallery = () => {
    return <Gallery images={imagesList()}></Gallery>
};

export default CoursesGallery;
