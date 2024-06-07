import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";
import mo from "@/assets/images/mo.jpg";
import Image from "next/image";

const Page = () => {
    return (
        <>
            <PageHeader>Методическое объединение</PageHeader>
            <div className="container">
                <div className="mo">
                    <div className="mo__image"><Image src={mo} alt="Методическое объединение" width={500}
                                                      placeholder="blur"/></div>
                    <div className="mo__files">
                        <Doc file="/files/mo/План-работы-МО-по-ФК-на-2022-23г.docx"
                             title="План работы МО по ФК на 2022-23 г"/>
                        <Doc file="/files/mo/Мет_разработка_2020_для_кннкурса2.docx"
                             title="Методическая разработка 2020 для конкурса"
                            />
                        <Doc file="/files/mo/Выступление_членов_МО_на_фестивале.docx"
                             title="Выступление членов МО на фестивале"/>
                        <Doc file="/files/mo/Герои-спорта.docx"
                             title="Герои спорта"/>
                        <Doc file="/files/mo/КОНСПЕКТ-урока-по-баск.-с-ИКТ.docx"
                             title="Конспект урока по баск. с ИКТ"/>
                        <Doc file="/files/mo/кружок_Будущий_Олимпиец_для_5_х_классов.doc"
                             title="Кружок Будущий Олимпиец для 5х классов"/>
                        <Doc file="/files/mo/открытый-урок-на-зачет.doc"
                             title="Открытый урок на зачет"/>
                        <Doc file="/files/mo/песня-физруков.docx"
                             title="Песня физруков"/>
                        <Doc file="/files/mo/Разработка_урока_физической_культуры_1_класс.ppt"
                             title="Разработка урока физической культуры 1 класс"/>
                        <Doc file="/files/mo/Тесты-к-олимпиаде-по-ФК.doc"
                             title="Тесты к олимпиаде по ФК"/>
                        <Doc file="/files/mo/урок-.oc_.doc"
                             title="Волейбол. Верхняя прямая подача мяча"/>
                        <Doc file="/files/mo/УРОК-в-1-классе.doc"
                             title="Урок в 1 классе"/>
                        <Doc file="/files/mo/УРОК-в-4-классе.doc"
                             title="Урок в 4 классе"/>
                        <Doc file="/files/mo/Урок-лыжной-подготовки-10-КЛ..docx"
                             title="Урок лыжной подготовки 10 КЛ."/>
                        <Doc file="/files/mo/Урок-ФК-5-класс-Скребкова-МВ.docx"
                             title="Урок ФК 5 класс Скребкова М. В."/>
                        <Doc file="/files/mo/урок-фк.doc"
                             title="Урок ФК"/>
                        <Doc file="/files/mo/Физкультура-зачет.doc"
                             title="Физкультура, зачет"/>
                                                     <Doc file="/files/mo/План-работы-МО-по-ФК-на-2023-24г.docx"
                             title="План работы МО по ФК на 2023-24 г"/>
                                                     <Doc file="/files/mo/Технологическая_карта_урока_Юнусов_Ш_С_2024.docx"
                             title="Технологическая карта урока Юнусов Ш. С. 2024"/>
                             
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
