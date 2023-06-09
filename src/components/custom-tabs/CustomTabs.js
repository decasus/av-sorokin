'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CustomTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Достижения</Tab>
                <Tab>Награды</Tab>
                <Tab>Грамоты (2018-2019)</Tab>
                <Tab>Грамоты (2019-2020)</Tab>
                <Tab>Грамоты (2021-2022)</Tab>
            </TabList>

            <TabPanel>
                <div className="ats">
                    <ul>
                        <li>Являюсь районным экспертом по проверке экзаменационных работ и практических заданий по физической культуре</li>
                        <li>Являюсь областным экспертом по аттестации педагогических работников по физической культуре и ОБЖ, а также экспертом по аккредитации основных образовательных программ по физической культуре</li>
                        <li>Руководитель районного методического объединения учителей физической культуры</li>
                        <li>Член методического совета регионального методического объединения учителей физической культуры при ИРО</li>
                        <li>Член профессионального (общественного) жюри областного этапа Всероссийского конкурса «Учитель года России</li>
                        <li>Администратор пункта тестирования ВСК ГТО Гаврилов-Ямского района</li>
                        <li>Обладатель официального статуса «Лицо Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» ГТО Гаврилов-Ямского МР</li>
                        <li>Руководитель отряда ЮИД Средней школы №1</li>
                        <li>Руководитель ВПК «Разведчик» Средней школы №1</li>
                        <li>За годы работы подготовил более 40 выпускников поступивших в ЯГПУ имени К.Д.Ушинского на факультет «Физическое воспитание» и национальный институт физической культуры имени Лесгафта</li>
                        <li>Подготовил 4 мастера спорта по полиатлону</li>
                        <li>Сам являюсь Чемпионом мира</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="ats">
                    <table>
                        <thead><tr><td>Год</td><td>Сведения о награждениях</td><td>Примечания</td></tr></thead>
                        <tbody>
                        <tr>
                            <td>2003</td>
                            <td>Почетная грамота Государственного комитета по ФК и спорту</td>
                        </tr>
                        <tr>
                            <td>2003</td>
                            <td>Почетная грамота Министерства образования РФ.
                            </td>
                            <td>Приказ №194/22-17 от 9.09.2003</td>
                        </tr>
                        <tr>
                            <td>2006</td>
                            <td>Награжден знаком «Отличник физической культуры и спорта»</td>
                            <td>Приказ №67-о от 22.09.2006</td>
                        </tr>
                        <tr>
                            <td>2007</td>
                            <td>Награжден знаком «Почетный работник общего образования РФ»</td>
                            <td>Приказ №1071/к-н от 22.08.2007</td>
                        </tr>
                        <tr>
                            <td>2007</td>
                            <td>Победитель конкурса лучших учителей Российской Федерации</td>
                            <td>Приказ №224 от 1.08.2007 Москва</td>
                        </tr>
                        <tr>
                            <td>2008</td>
                            <td>Удостоен звания «Почетный гражданин города Гаврилов-Ям»</td>
                        </tr>
                        <tr>
                            <td>2011</td>
                            <td>Награжден Губернаторским Почетным знаком Алексея Петровича Мельгунова</td>
                            <td>Указ губернатора №142 от 18.04.2011</td>
                        </tr>
                        <tr>
                            <td>2013</td>
                            <td>Почетный знак «За заслуги в развитии физической культуры и спорта»</td>
                            <td>Приказ № 150-нг от 6.11.2013</td>
                        </tr>
                        <tr>
                            <td>2020</td>
                            <td>Юбилейная медаль «90 лет ВДВ»</td>
                            <td>Союз десантников России</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="ats__title">Последние 5 лет являюсь лауреатом районной ярмарки педагогических идей</div>
                        2017 г. «Воспитание и социализация в образовательных организациях: новые ориентиры». <br/>
                        2018 г. «Семья и образовательная организация: пути эффективного сотрудничества в современных условиях» <br/>
                        2019 г.  «Формирование навыков и компетенций 21 века» <br/>
                        2020 г.  «Современная образовательная среда как фактор обеспечения качества образовательного процесса»
                    <div className="ats__title">Являюсь победителем Всероссийского педагогического конкурса эссе «Мое профессиональное кредо» 2018 г. по версии «Педлидер» №854461 от 9.06.2018 г.</div>
                    <div className="ats__title">Являюсь призером междунаролной олимпиады для педагогов «Коррекционная педагогика» от проекта «Мега-талант» 27.03.2018 г. №1569/493016</div>
                    <div className="ats__title">Являюсь победителем Всероссийской блиц-олимпиады «Время знаний»</div>
                    <div className="ats__title">Профессиональная компетентность учителя физической культуры 2019 г.</div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="ats">
                    <ul>
                        <li>Благодарственное письмо Главы МР «За пропаганду здорового образа жизни». 2018 г.</li>
                        <li>Грамота управления образования МР «За активную деятельность по профилактике ДТП». Приказ №289 от 10.10.2018 г.</li>
                        <li>Благодарственное письмо спортивного клуба «Буревестник»</li>
                        <li>Благодарность ИРО «За эффективную работу в региональном методическом объединении учителей ФК». Приказ ИРО №01-03/113 от 14.08.2018 г.</li>
                        <li>Благодарность департамента образования ЯО «За большой вклад в реализацию ГТО». Приказ департамента образования № 02-14/16 от 11.07.2018 г.</li>
                        <li>Грамота Управления образования ЯО «За добросовестный творческий труд». Приказ № 313 от 13.11.2018 г.</li>
                        <li>Благодарность Губернатора ЯО «За многолетний и творческий труд» 2018г.</li>
                        <li>Благодарность Управления культуры</li>
                        <li>Грамота управления образования МР «За подготовку победителей муниципального конкурса исследовательских проектов учащихся. Приказ №127 от 12.04.2019 г.</li>
                        <li>Грамота управления образования МР «За подготовку призера регионального этапа Всероссийской олимпиада школьников по физической культуре». Приказ № 130 от 17.04.2019 г.</li>
                        <li>Грамота управления образования МР «За подготовку призеров муниципального этапа Всероссийской олимпиада школьников по физической культуре». Приказ №130 от 17.04.2019 г.</li>
                        <li>Грамота управления образования МР «За подготовку призеров регионального этапа Всероссийской олимпиада школьников по ОБЖ». Приказ №130 от 17.04.2019 г</li>
                        <li>Грамота управления образования МР «За подготовку призеров муниципального этапа Всероссийской олимпиада школьников по ОБЖ». Приказ №130 от 17.04.2019 г</li>
                        <li>Благодарственное письмо Главы МР «За отличную подготовку команды призера областного комплексного мероприятия Проект Р.А.З.У.М.». 2019 г.</li>
                        <li>Публикация урока по лыжной подготовке. Журнал. «Физическая культура в школе. Все для учителя» №1 за 2016 г.</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="ats">
                    <ul>
                        <li>Диплом за 2 место (№ 1881301 от 27.10.2019) Всероссийской олимпиады «Эстафета знаний»</li>
                        <li>Диплом за активное участие в Международной научно-практической конференции</li>
                        <li>«Современные технологии обеспечения безопасности жизнедеятельности». 31.10.2019 г.</li>
                        <li>Сертификат за выступление с докладом на 74-й международной научной конференции</li>
                        <li>«Чтения Ушинского» 5-6 марта 2020 г.</li>
                        <li>Благодарность Начальника Главного управления МЧС России по Ярославской области</li>
                        <li>За организацию и проведение региональной военно-патриотической акции «Лыжный пробег Русь 2020».</li>
                        <li>Грамота управления образования МР «За подготовку призеров муниципального этапа Всероссийской олимпиада школьников по ОБЖ». Приказ №148 от 14.05.2020 г.</li>
                        <li>Диплом за 2 место Всероссийской олимпиады «Подари знание» №2218371 от 25.05.2020 г.</li>
                        <li>Диплом за 2 место Всероссийской олимпиады «Педагогический успех». №2257317 от 13.06.2020 г.</li>
                        <li>Грамота лауреата 10-й муниципальной ярмарки педагогических идей «Современная образовательная среда как фактор обеспечения качества образовательного процесса от Начальника Управления образования МР». Приказ № 88 от 13.03.2020 г.</li>
                        <li>Благодарность ректора ИРО ЯО за эффективную реализацию Концепции преподавания учебного предмета «Физическая культура» в 2019-2020 учебном году. Приказ № 01-03/289 от 1.09.2020 г.</li>
                        <li>Благодарственное письмо от Президента НП «СК «Буревестник — ВВ» за плодотворное сотрудничество. 2020 г.</li>
                        <li>Благодарственное письмо от Начальника управления туризма</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="ats">
                    <div className="ats__title">2021</div>
                    <ul>
                        <li>«За подготовку команды победителя легкоатлетической эстафеты к Дню Победы». Глава городского поселения Гаврилов-Ям.  Благодарность.</li>
                        <li>«За активную работу в качестве председателя экспертной комиссии муниципального конкурса исследовательских проектов учащихся 7-11 классов». 	Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За подготовку победителя муниципального конкурса исследовательских проектов учащихся 7-11 классов». Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За подготовку победителя и призеров муниципального этапа ВОШ по физической культуре». Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За активное участие в проведении муниципальной 11-ой Ярмарки педагогических идей «Организация образовательного процесса с использованием электронного обучения и дистанционных образовательных технологий»». Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За качественную и добросовестную работу и большой вклад во внедрение и популяризацию ВФСК ГТО». Департамент образования Ярославской области. Благодарность. Приказ № 02-14/18 от 20.04.2021 г.</li>
                        <li>«За активное участие и плодотворное сотрудничество в рамках проведения спортивно-исторического события Ретро-матч». Управление культуры, туризма, спорта и молодежной политики Администрации Гаврилов-Ямского муниципального района. Благодарственное письмо.</li>
                        <li>«За активное участие в спортивной жизни района». Управление культуры, туризма, спорта и молодежной политики Администрации Гаврилов-Ямского муниципального района. Благодарственное письмо.</li>
                    </ul>
                    <div className="ats__title">2022</div>
                    <ul>
                        <li>«За подготовку команды призера на областном мероприятии «Зимний рубеж»». 2022 г.	Управление культуры, туризма, спорта и молодежной политики Администрации Гаврилов-Ямского муниципального района. Благодарственное письмо.</li>
                        <li>«За качественную и добросовестную работу и большой вклад во внедрение и популяризацию ВФСК ГТО». Департамент образования Ярославской области. Грамота. Приказ № 02-14/50 от 14.12.2021 г.</li>
                        <li>«За профессионализм и конструктивный подход к экспертной деятельности». Проректор ГАУ ДПО ЯО ИРО. Благодарность. Приказ № 01-03/56 от 25.03.2022 г.</li>
                        <li>«За подготовку команды победителя легкоатлетической эстафеты к Дню Победы». Глава городского поселения Гаврилов-Ям.  Благодарность.</li>
                        <li>«За активное участие в проведении муниципальной 12-ой Ярмарки педагогических идей «Функциональная грамотность в современном образовании»». Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За подготовку победителя и призеров муниципального этапа ВОШ по физической культуре в 2021-22 году». Управление образования Администрации Гаврилов-Ямского муниципального района. Грамота.</li>
                        <li>«За активное участие в спортивной жизни и развитии спорта на территории Гаврилов -Ямского района». Управление культуры, туризма, спорта и молодежной политики Администрации Гаврилов-Ямского муниципального района. Благодарственное письмо.</li>
                        <li>«За организацию патриотического велопробега, посвященного Дню государственного флага Российской Федерации». Управление культуры, туризма, спорта и молодежной политики Администрации Гаврилов-Ямского муниципального района. Благодарственное письмо.</li>
                        <li>«За инициативу и трудолюбие, усердие, активное участие в военно-патриотическом воспитании молодежи». Военный комиссар Ярославской области. Грамота.</li>
                </ul>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CustomTabs;

