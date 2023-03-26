import portrait from "@/assets/images/portrait.png"
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";
const About = () => {
    return (
        <>
            <PageHeader>Автобиография</PageHeader>
            <div className="container">
                <div className="biography">
                    <div className="biography__photo">
                        <Image src={portrait} alt="portrait"/>
                    </div>
                    <div className="biography__text">
                        <p>Родился 11 февраля 1964 г. в г. Гаврилов-Ям Ярославской области.</p>
                        <p>С 1971 по 1981 г. обучался в СОШ №2 г. Гаврилов-Ям.</p>
                        <p>С 1982 по 1984 г. служил в Вооруженных силах СССР, ВДВ.</p>
                        <p>С 1984 по 1988 г. обучался в ЯГПИ им. К.Д. Ушинского на факультете «Физическое воспитание»,
                            в 1988 г. получил диплом с отличием.</p>
                        <p>С 1988 г. и по настоящее время работаю в средней школе №1 г. Гаврилов-Ям.</p>
                        <p>С 1992 г. дополнительно на базе своей школы работаю старшим тренером-преподавателем Гаврилов
                            -Ямской ДЮСШ по полиатлону.</p>
                        <p>С 1997 г. в своей школе работаю преподавателем – организатором ОБЖ.</p>
                        <p>Несколько лет руководил районным методическим объединением учителей ОБЖ. В настоящее время,
                            более 10 лет, руковожу районным методическим объединением учителей физической культуры.</p>
                        <p>С 2018 являюсь членом методического совета регионального методического объединения учителей
                            физической культуры образовательных организаций Ярославской области.</p>
                        <p>Являюсь администратором районного места тестирования учащихся 1-11 классов ВСК ГТО.</p>
                        <p>Несколько лет являюсь одним из руководителей школьного ВПК «Разведчик». Совершил 21 прыжок с
                            парашютом.</p>
                        <p>Несмотря на большую занятость, нахожу время для самосовершенствования: интересуюсь новинками
                            методической литературы, участвую и выступаю в международных и всероссийских
                            научно-практических конференциях «Чтения Ушинского», «Современные технологии обеспечения
                            безопасности жизнедеятельности», принимаю участие в профессиональных конкурсах «Учитель
                            года»(2010 г. – лауреат районного конкурса), «О присуждении премии лучшим учителям России в
                            педагогической деятельности»(2007 г.-победитель регионального этапа), «Лучший тренер». Веду
                            активный и здоровый образ жизни – являюсь участником районных, областных, всероссийских и
                            международных соревнований по полиатлону, легкой атлетике, горному бегу, лыжным гонкам,
                            гиревому спорту. Являюсь кандидатом в мастера спорта по зимнему и летнему полиатлону.</p>
                        <p>В 2008 г. удостоен звания «Почетный гражданин г. Гаврилов-Ям».</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
