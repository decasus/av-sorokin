import PageHeader from "@/components/page-header/PageHeader";
import Image from "next/image";
import gto from "@/assets/images/gto.png";
import Link from "next/link";

const Gto = () => {
    return (
        <>
            <PageHeader>ВФСК ГТО</PageHeader>
            <div className="container">
                <div className="gto">
                    <Image src={gto} alt="gto"/>
                    <p>Всероссийский физкультурно-спортивный
                        комплекс «Готов к&nbsp;труду и&nbsp;обороне» (ГТО)&nbsp;— полноценная программная
                        и&nbsp;нормативная
                        основа физического воспитания населения страны, нацеленная на&nbsp;развитие массового спорта
                        и&nbsp;оздоровление нации.</p><p>Комплекс ГТО предусматривает подготовку к&nbsp;выполнению
                    и&nbsp;непосредственное выполнение населением различных возрастных групп
                    (от&nbsp;6&nbsp;до&nbsp;70&nbsp;лет и&nbsp;старше) установленных нормативных требований по&nbsp;трем
                    уровням трудности, соответствующим золотому, серебряному и&nbsp;бронзовому знакам отличия «Готов
                    к&nbsp;труду и&nbsp;обороне» (ГТО).</p>
                    <ul>
                        <li><Link href="https://user.gto.ru/norms" target="_blank"><b>Нормы</b></Link></li>
                        <li><Link href="https://user.gto.ru/document" target="_blank"><b>Документы по ВСК ГТО</b></Link></li>
                        <li><Link href="https://user.gto.ru/#gto-method" target="_blank"><b>Как выполнять нормативы</b></Link></li>
                        <li><Link
                            href="https://xn--76-glc8bt.xn--p1ai/prinimayushchemu/metodicheskie_rekomendatsii.html" target="_blank"><b>Методические
                            рекомендации</b></Link></li>
                        <li><Link href="https://xn--76-glc8bt.xn--p1ai/index.html" target="_blank"><b>ГТО в Ярославской
                            области</b></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Gto;
