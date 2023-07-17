
import Main from "./pages/main";
import { PortFolio } from "./pages/portfolio";
import Navbar from "./sections/common/navbar";

export const RootRouter = () => {
    return (
        <>
            <Navbar />
            <Main/>
        </>
    );
}

export const PortfolioRouter = () => {
    return (
        <>
            <Navbar/>
            <PortFolio/>
        </>
    )
}