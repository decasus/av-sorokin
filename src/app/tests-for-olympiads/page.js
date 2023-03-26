import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Tests = () => {
    return (
        <>
            <PageHeader>Тесты к олимпиадам</PageHeader>
            <div className="container">
                <Doc file="/files/tests-for-olympiads/ТЕОРЕТИЧЕСКИЕ-ЗАДАНИЯ.docx" type="doc" title="Теоретические задания"/>
                <Doc file="/files/tests-for-olympiads/Теоретическое-тестирование-учащихся-освобожденных-от-уроков-физической-культуры.docx" type="doc" title="Теоретическое тестирование учащихся освобожденных от уроков физической культуры"/>
                <Doc file="/files/tests-for-olympiads/Тест-по-физкультуре-для-8-класса.docx" type="doc" title="Тест по физкультуре для 8 класса"/>
                <Doc file="/files/tests-for-olympiads/Тестовая-работа-по-физической-культуре-для-учащихся-5-класса.docx" type="doc" title="Тестовая работа по физической культуре для учащихся 5 класса"/>
                <Doc file="/files/tests-for-olympiads/Тестовые-задания.docx" type="doc" title="Тестовые задания"/>
                <Doc file="/files/tests-for-olympiads/тесты-6-класс.docx" type="doc" title="Тесты 6 класс"/>
                <Doc file="/files/tests-for-olympiads/Тесты-по-физической-культуре-для-учащихся-9.docx" type="doc" title="Тесты по физической культуре для учащихся 9 класса"/>
            </div>
        </>
    );
};

export default Tests;
