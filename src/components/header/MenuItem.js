'use client'

import Link from "next/link";

const MenuItem = ({title, route, closeMenu, dropdown}) => {
    const handleRoute = () => closeMenu();
    return <Link className={dropdown ? `dropdown__elem` : `menu__elem`} onClick={handleRoute} href={route}>{title}</Link>
}

export default MenuItem;

