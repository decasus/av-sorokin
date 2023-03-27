'use client'

import {useRouter} from "next/navigation";

const MenuItem = ({title, route, closeMenu, dropdown}) => {
    const router = useRouter()
    const handleRoute = async () => {
        await router.push(route);
        closeMenu();
    }
    return <div className={dropdown ? `dropdown__elem` : `menu__elem`} onClick={handleRoute}>{title}</div>
}

export default MenuItem;

