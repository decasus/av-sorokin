import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Programms = ({title = "Рабочие программы"}) => {
    return (
        <>
            <PageHeader>Рабочие программы</PageHeader>
            <div className="container">
                <Doc file="/files/work-programs/Rab_programma_FK_5-9-4.docx" title="Рабочая программа 5-9 класс"/>
                <Doc file="/files/work-programs/Rab_programma_FK_10-11-2.docx" title="Рабочая программа 10-11 класс"/>
                <Doc file="/files/work-programs/рабоч.-программа-по-рук.-бою.docx" title="Рабочая программа по рукопашному бою"/>
                <Doc file="/files/work-programs/РП-по-баскетболу-5-класс.docx" title="Рабочая программа по баскетболу 5 класс"/>
                <Doc file="/files/work-programs/РП-баскетбол-8-кл.2018-19.docx" title="Рабочая программа по баскетболу 8 класс"/>
                <Doc file="/files/work-programs/РП-баскебол-9-кл.2019-20.docx" title="Рабочая программа по баскетболу 9 класс"/>
                <Doc file="/files/work-programs/РП-волейбол-2020-21-10-класс.docx" title="Рабочая программа по волейболу 10 класс"/>
            </div>
        </>
    );
};

export default Programms;
