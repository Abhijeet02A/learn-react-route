import { Outlet } from "react-router";
import MainNavigation from "../component/MainNavigation";
import classes from './Root.module.css';

const RootLayout = () => {
    return <> <MainNavigation />
    <main className={classes.content}>
    <Outlet />
    </main>    </> 
};

export default RootLayout;