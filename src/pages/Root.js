import { Outlet } from "react-router";
import MainNavigation from "../component/MainNavigation";


const RootLayout = () => {
    return <> <MainNavigation />
    <main >
    <Outlet />
    </main>    </> 
};

export default RootLayout;