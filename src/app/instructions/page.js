import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Instructions = () => {
    return (
        <>
            <PageHeader>Инструкции по ФК</PageHeader>
            <div className="container">
                <Doc file="/files/instructions/вводный.docx" type="doc" title="Вводный"/>
                <Doc file="/files/instructions/В-тренажёрном-зале.docx" type="doc" title="В тренажерном зале"/>
                <Doc file="/files/instructions/гимнастика.docx" type="doc" title="Гимнастика"/>
                <Doc file="/files/instructions/лёгкая-атлетика.docx" type="doc" title="Легкая атлетка"/>
                <Doc file="/files/instructions/открытые-спортплощадки.docx" type="doc" title="Открытые площадки"/>
                <Doc file="/files/instructions/спортивные-и-подвижные-игры.docx" type="doc" title="Спортивные и подвижные игры"/>
            </div>
        </>
    );
};

export default Instructions;
