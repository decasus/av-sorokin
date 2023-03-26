import PageHeader from "@/components/page-header/PageHeader";
import emblem from "@/assets/images/emblem.png";
import flag from "@/assets/images/flag.jpg";
import Image from "next/image";
import Doc from "@/components/document/Document";

const Page = () => {
    return (
        <>
            <PageHeader>Школьный спортклуб</PageHeader>
            <div className="container">
                <div className="sportclub">
                    <p>В Средней школе №1 несколько лет существует школьный спортивный клуб <b>«Лидер»</b>, он
                        осуществляет свою деятельность как структурное подразделение школы, у клуба есть эмблема, девиз,
                        сложилась определенная структура и направления деятельности, материально технические условия
                        позволяют организовывать многообразные виды спортивно-массовой и военно-патриотической работы в
                        школе.</p>
                    <div className="sportclub__images">
                        <Image src={emblem} alt="Эмблема спортклуба" width={300} placeholder="blur"/>
                        <Image src={flag} alt="Флаг спортклуба" width={400} placeholder="blur"/>
                    </div>
                    <div className="sportclub__files">
                        <Doc file="/files/sportclub/Приказ о создании ШСК.pdf" type="pdf" title="Приказ о создании ШСК"/>
                        <Doc file="/files/sportclub/Положение о ШСК 2017 год.docx" type="doc" title="Положение о ШСК"/>
                        <Doc file="/files/sportclub/Анализ_работы_школьного_спортивно_клуба.docx" type="doc" title="Анализ работы ШСК"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
