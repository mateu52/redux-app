import React from "react"
import { Outlet } from 'react-router-dom';
import { Menu } from "./Menu/Menu";
import { Footer } from "./Footer/Footer";
//import styles from '../style/style.css'
export const Layout = () => {
    return (
        <div className="bg-green-300 max-w-md" >
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}