'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import MenuItem from "@/components/header/MenuItem";

const Dropdown = ({title, items, closeMenu}) => {

    const [open, setOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setWindowSize(window.innerWidth);
        const handleWindowResize = () => setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    });

    useEffect(() => {
        setIsDesktop(windowSize > 768)
    }, [windowSize]);


    return (<div className="dropdown">
            <div className="menu__elem" onClick={!isDesktop ? () => setOpen(!open) : null}>
                <span>{title}</span>
                <span className="dropdown__icon"><FontAwesomeIcon width={10} height={10} icon={faAngleDown}/></span>
            </div>
            {!isDesktop && open && <div className="dropdown__content">
                {items.map((item, index) => <MenuItem route={item.href} title={item.title} key={index} closeMenu={closeMenu} dropdown/>)}
            </div>}
            {isDesktop && <div className="dropdown__content">
                {items.map((item, index) => <MenuItem route={item.href} title={item.title} key={index} closeMenu={closeMenu} dropdown/>)}
            </div>}
        </div>);
};

export default Dropdown;
