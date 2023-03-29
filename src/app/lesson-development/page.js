import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const Lesson = () => {
    return (
        <>
            <PageHeader>Разработки уроков</PageHeader>
            <div className="container">
                <Doc file="/files/lesson-development/План-конспект-урока-физ-в-11-кл..doc" title="План конспект урока по физической культуре в 11 классе"/>
                <Doc file="/files/lesson-development/Урок-физической-культуры-3класс-метание.Титовская-Н.Н..doc" title='Урок "Метание мяча" 3 класс'/>
            </div>
        </>
    );
};

export default Lesson;
