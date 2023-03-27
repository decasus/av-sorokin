import PageHeader from "@/components/page-header/PageHeader";
import PhotoGallery from "@/components/gallery/PhotoGallery";

const GalleryPage = () => {
    return (
        <>
        <PageHeader>Галерея</PageHeader>
            <div className="container">
                <PhotoGallery/>
            </div>
        </>
    );
};

export default GalleryPage;
