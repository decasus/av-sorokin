'use client'

import Link from "next/link";

const MenuItem = ({title, route, closeMenu, dropdown}) => {
    return <Link className={dropdown ? `dropdown__elem` : `menu__elem`} onClick={closeMenu} href={route}>{title}</Link>
}

export default MenuItem;

