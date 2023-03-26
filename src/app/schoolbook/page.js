import PageHeader from "@/components/page-header/PageHeader";
import book1 from "@/assets/images/books/book1.png";
import book2 from "@/assets/images/books/book2.png";
import book3 from "@/assets/images/books/book3.png";
import Image from "next/image";

const Schoolbook = () => {
    return (
        <>
            <PageHeader>Учебники</PageHeader>
            <div className="container">
                <div className="schoolbook">
                    <div className="schoolbook__image"><Image src={book1} width={150} placeholder="blur" alt="book"/></div>
                    <div className="schoolbook__title">Физическая культура 1 — 4 классы (Лях В.И.) 2018 Г.</div>
                </div>
                <div className="schoolbook">
                    <div className="schoolbook__image"><Image src={book2} width={150} placeholder="blur" alt="book"/></div>
                    <div className="schoolbook__title">Физическая культура 8 — 9 классы В.И. Лях, А.А. Зданевич</div>
                </div>
                <div className="schoolbook">
                    <div className="schoolbook__image"><Image src={book3} width={150} placeholder="blur" alt="book"/></div>
                    <div className="schoolbook__title">Физическая культура 10 — 11 классы Лях, Зданевич 2018 Г.</div>
                </div>
            </div>
        </>
    );
};

export default Schoolbook;
