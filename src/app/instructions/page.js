import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Instructions = () => {
    return (
        <>
            <PageHeader>Инструкции по ФК</PageHeader>
            <div className="container">
                <Doc file="/files/instructions/вводный.docx" title="Вводный"/>
                <Doc file="/files/instructions/В-тренажёрном-зале.docx" title="В тренажерном зале"/>
                <Doc file="/files/instructions/гимнастика.docx" title="Гимнастика"/>
                <Doc file="/files/instructions/лёгкая-атлетика.docx" title="Легкая атлетка"/>
                <Doc file="/files/instructions/открытые-спортплощадки.docx" title="Открытые площадки"/>
                <Doc file="/files/instructions/спортивные-и-подвижные-игры.docx" title="Спортивные и подвижные игры"/>
            </div>
        </>
    );
};

export default Instructions;
