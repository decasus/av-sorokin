import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Presentations = () => {
    return (<>
            <PageHeader>Презентации</PageHeader>
            <div className="container">
                <div className="presentations">
                    <Doc file="/files/presentations/В-школу-за-здоровьем.pptx" type="ppt" title="В школу за здоровьем"/>
                    <Doc file="/files/presentations/През.-на-смотр-конкурс-ГТО.pptx" type="ppt"
                         title="Презентация на смотр-конкурс ГТО"/>
                    <Doc file="/files/presentations/Школьные-традиции.pptx" type="ppt" title="Школьные традиции"/>
                    <Doc file="/files/presentations/Здоровьесберегающая-среда.pptx" type="ppt"
                         title="Здоровьесберегающая среда"/>
                    <Doc file="/files/presentations/Лыжный-пробег-Русь-2016-Гаврилов-Ям.pptx" type="ppt"
                         title="Лыжный пробег Русь 2016 - Гаврилов-Ям"/>
                    <h4>Проекты школьное иниациативное бютжетирование "Решаем вместе" 2022 г.</h4>
                    <Doc file="/files/presentations/9Вкласс-площадка-для-ГТО.pptx" type="ppt" title="Площадка для ГТО"/>
                    <Doc file="/files/presentations/Постер-9В-ПлощадкаГТО.pdf" type="pdf"
                         title="Постер - Площадка для ГТО"/>
                    <Doc file="/files/presentations/10Акласс-Спортивный-зал.pptx" type="ppt" title="Спортивный зал"/>
                    <Doc file="/files/presentations/Проект_10_А_класса_спортивный_зал" type="pdf"
                         title="Постер - Спортивный зал"/>
                    <Doc file="/files/presentations/Проект10Б-тренажерный-зал.pptx" type="ppt" title="Тренажерный зал"/>
                    <Doc file="/files/presentations/Проект_10_Б_класса_тренажерный_зал.pdf" type="pdf"
                         title="Постер - Тренажерный зал"/>
                </div>
            </div>
        </>);
};

export default Presentations;
