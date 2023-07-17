
import { About } from "./pages/about";
import Main from "./pages/main";
import { PortFolio } from "./pages/portfolio";
import Navbar from "./sections/common/navbar";
import { Outlet } from "react-router-dom";

export const RootRouter = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
}