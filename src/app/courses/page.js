import PageHeader from "@/components/PageHeader/PageHeader";
import CoursesGallery from "@/components/CoursesGallery/CoursesGallery";

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
