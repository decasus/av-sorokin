import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Presentations = () => {
    return (
        <>
            <PageHeader>Презентации</PageHeader>
            <div className="container">
                <Doc file="/files/presentations/В-школу-за-здоровьем.pptx" type="ppt" title="В школу за здоровьем"/>
                <Doc file="/files/presentations/През.-на-смотр-конкурс-ГТО.pptx" type="ppt" title="Презентация на смотр-конкурс ГТО"/>
                <Doc file="/files/presentations/Школьные-традиции.pptx" type="ppt" title="Школьные традиции"/>
                <Doc file="/files/presentations/Здоровьесберегающая-среда.pptx" type="ppt" title="Здоровьесберегающая среда"/>
                <Doc file="/files/presentations/Лыжный-пробег-Русь-2016-Гаврилов-Ям.pptx" type="ppt" title="Лыжный пробег Русь 2016 - Гаврилов-Ям"/>
            </div>
        </>
    );
};

export default Presentations;
