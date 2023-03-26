import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Activities = () => {
    return (
        <>
            <PageHeader>Внеклассные мероприятия</PageHeader>
            <div className="container">
                <Doc file="/files/activities/План-Здоровье-и-спорт-2019-2020-год-2.docx" type="doc" title="План Здоровье и спорт 2019-2020 год"/>
            </div>
        </>
    );
};

export default Activities;
