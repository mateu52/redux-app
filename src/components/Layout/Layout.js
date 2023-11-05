import React from "react"
import { Outlet } from 'react-router-dom';
import { Menu } from "./Menu/Menu";
import { Footer } from "./Footer/Footer";
export const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}