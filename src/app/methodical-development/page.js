import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Page = () => {
    return (
        <>
        <PageHeader>Методические разработки</PageHeader>
            <div className="container">
                <Doc file="/files/md/Мет_разработка_2020_для_конкурса2.docx" title="Методическая разработка 2020 для конкурса"/>
            </div>
        </>
    );
};

export default Page;
