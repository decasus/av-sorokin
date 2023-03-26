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
                        <Link href="/">Нормативная база</Link>
                        <Link href="/">Рабочие программы</Link>
                        <Link href="/">Учебники</Link>
                        <Link href="/">Презентации</Link>
                        <Link href="/">Внеклассные мероприятия</Link>
                        <Link href="/">Работа со слабоуспевающими</Link>
                        <Link href="/">Разработки уроков</Link>
                        <Link href="/">Домашние задания</Link>
                        <Link href="/">Инструкции по ФК</Link>
                        <Link href="/">Тесты к олимпиадам</Link>
                        <Link href="/">Комплексы упражнений</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="menu__elem">
                        <span>Достижения учеников</span>
                        <span className="dropdown__icon"><FontAwesomeIcon width={10} height={10} icon={faAngleDown}/></span>
                    </div>
                    <div className="dropdown__content">
                        <Link href="/">Дипломы и грамоты</Link>
                        <Link href="/">Проекты учеников</Link>
                    </div>
                </div>
                <Link href="src/components/header/Header#">
                    <div className="menu__elem">ГТО</div>
                </Link>
                <Link href="src/components/header/Header#">
                    <div className="menu__elem">МО</div>
                </Link>
                <Link href="src/components/header/Header#">
                    <div className="menu__elem">Школьный спортклуб</div>
                </Link>
                <Link href="src/components/header/Header#">
                    <div className="menu__elem">Фотогалерея</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
