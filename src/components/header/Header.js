import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <Link href="/">
                    <div className="menu__elem">Главная</div>
                </Link>
                <div className="dropdown">
                    <div className="menu__elem">
                        <span>Обо мне</span>
                        <span className="dropdown__icon"><FontAwesomeIcon width={10} height={10} icon={faAngleDown}/></span>
                    </div>
                    <div className="dropdown__content">
                        <Link href="/about">Автобиография</Link>
                        <Link href="/essay">Эссе</Link>
                        <Link href="/qualification">Квалификация</Link>
                        <Link href="/my-achievements">Мои достижения</Link>
                        <Link href="/courses">Курсы</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="menu__elem">
                        <span>Методическая копилка</span>
                        <span className="dropdown__icon"><FontAwesomeIcon width={10} height={10} icon={faAngleDown}/></span>
                    </div>
                    <div className="dropdown__content">
                        <Link href="/regulatory-base">Нормативная база</Link>
                        <Link href="/work-programs">Рабочие программы</Link>
                        <Link href="/schoolbook">Учебники</Link>
                        <Link href="/presentations">Презентации</Link>
                        <Link href="/activities">Внеклассные мероприятия</Link>
                        <Link href="/underachievement">Работа со слабоуспевающими</Link>
                        <Link href="/lesson-development">Разработки уроков</Link>
                        <Link href="/hometasks">Домашние задания</Link>
                        <Link href="/instructions">Инструкции по ФК</Link>
                        <Link href="/tests-for-olympiads">Тесты к олимпиадам</Link>
                        <Link href="/complexes">Комплексы упражнений</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="menu__elem">
                        <span>Достижения учеников</span>
                        <span className="dropdown__icon"><FontAwesomeIcon width={10} height={10} icon={faAngleDown}/></span>
                    </div>
                    <div className="dropdown__content">
                        <Link href="/diplomas">Дипломы и грамоты</Link>
                        <Link href="/student-projects">Проекты учеников</Link>
                    </div>
                </div>
                <Link href="/gto">
                    <div className="menu__elem">ГТО</div>
                </Link>
                <Link href="/association">
                    <div className="menu__elem">МО</div>
                </Link>
                <Link href="/sportclub">
                    <div className="menu__elem">Школьный спортклуб</div>
                </Link>
                <Link href="/gallery">
                    <div className="menu__elem">Фотогалерея</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
