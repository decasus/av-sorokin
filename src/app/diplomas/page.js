import PageHeader from "@/components/page-header/PageHeader";
import Gallery from "@/components/gallery/Gallery";
import DiplomasGallery from "@/components/gallery/DiplomasGallery";

const sets = {
    diplomas: '../../assets/images/diplomas'
}

const Diplomas = () => {
    return (
        <>
        <PageHeader>Дипломы учеников</PageHeader>
            <div className="container">
                <DiplomasGallery/>
            </div>
        </>
    );
};

export default Diplomas;
