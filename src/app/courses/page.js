import PageHeader from "@/components/page-header/PageHeader";
import CoursesGallery from "@/components/courses-gallery/CoursesGallery";

const Courses = () => {
    return (
        <>
            <PageHeader>Курсы</PageHeader>
            <div className="container">
                <CoursesGallery/>
            </div>
        </>
    );
};

export default Courses;
