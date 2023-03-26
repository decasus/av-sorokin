import PageHeader from "@/components/page-header/PageHeader";
import Doc from "@/components/document/Document";

const StudentProjects = () => {
    return (
        <>
            <PageHeader>Проекты учеников</PageHeader>
            <div className="container">
                <Doc file="/files/student-projects/Физкультура.-нагрузка-на-детей-с-ослабленным-здоровьем.ppt"
                     type="ppt"
                     title="Физкультура. Нагрузка на детей с ослабленным здоровьем"
                />
                <Doc file="/files/student-projects/Спортивная-династия.ppt"
                     type="ppt"
                     title="Спортивная династия"
                />
                <Doc file="/files/student-projects/проект-по-полиатлону-Иванова.ppt"
                     type="ppt"
                     title="Проект по полиатлону (Иванова)"
                />
                <Doc file="/files/student-projects/История-развития-лыжнного-спорта.ppt"
                     type="ppt"
                     title="История развития лыжнного спорта"
                />
                <Doc file="/files/student-projects/Лыжный-спорт-в-Ярославской-области.pptx"
                     type="ppt"
                     title="Лыжный спорт в Ярославской области"
                />
                <Doc file="/files/student-projects/ЛА-в-школе.pptx"
                     type="ppt"
                     title="Легкая атлетика в школе"
                />
                <Doc file="/files/student-projects/Здоровый-образ-жизни.pptx"
                     type="ppt"
                     title="Здоровый образ жизни"
                />
                <Doc file="/files/student-projects/Зимние-Олимпийские-игры.pptx"
                     type="ppt"
                     title="Зимние Олимпийские игры"
                />
            </div>
        </>
    );
};

export default StudentProjects;
