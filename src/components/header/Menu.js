'use client'

import Dropdown from "@/components/header/Dropdown";
import {useEffect, useState} from "react";
import MenuItem from "@/components/header/MenuItem";

const Menu = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        open ? document.documentElement.style.overflow = "hidden" :
            document.documentElement.style.overflow = "auto"
    }, [open]);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <>
            <nav className={`menu ${open && `menu--active`}`}>
                <MenuItem title="Главная" route="/" closeMenu={closeMenu}/>
                <Dropdown
                    title="Обо мне"
                    items={[
                        {href: "about", title: "Автобиография"},
                        {href: "essay", title: "Эссе"},
                        {href: "qualification", title: "Квалификация"},
                        {href: "my-achievements", title: "Мои достижения"},
                        {href: "courses", title: "Курсы"},
                    ]}
                    closeMenu={closeMenu}/>
                <Dropdown
                    title="Методическая копилка"
                    items={[
                        {href: "regulatory-base", title: "Нормативная база"},
                        {href: "work-programs", title: "Рабочие программы"},
                        {href: "schoolbook", title: "Учебники"},
                        {href: "presentations", title: "Презентации"},
                        {href: "activities", title: "Внеклассные мероприятия"},
                        {href: "underachievement", title: "Работа со слабоуспевающими"},
                        {href: "lesson-development", title: "Разработки уроков"},
                        {href: "hometasks", title: "Домашние задания"},
                        {href: "instructions", title: "Инструкции по ФК"},
                        {href: "tests-for-olympiads", title: "Тесты к олимпиадам"},
                        {href: "complexes", title: "Комплексы упражнений"},
                    ]}
                    closeMenu={closeMenu}/>
                <Dropdown
                    title="Достижения учеников"
                    items={[
                        {href: "diplomas", title: "Дипломы и грамоты"},
                        {href: "student-projects", title: "Проекты учеников"}
                    ]}
                    closeMenu={closeMenu}/>
                <div className="hidden-br"/>
                <MenuItem title="ГТО" route="gto" closeMenu={closeMenu}/>
                <MenuItem title="МО" route="association" closeMenu={closeMenu}/>
                <MenuItem title="Школьный спортклуб" route="sportclub" closeMenu={closeMenu}/>
                <MenuItem title="Галерея" route="gallery" closeMenu={closeMenu}/>
            </nav>
            <div className={`menu-btn ${open && 'menu-btn--active'}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};

export default Menu;
