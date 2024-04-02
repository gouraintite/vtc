import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import Scan from "../pages/scan";
import Capture from "../pages/capture";
import Login from "../pages/login";
import Notification from "../pages/notification";
import Profile from "../pages/profile";
import EditProfile from "../pages/edit_profile";

// import Register from "../modules/auth/pages/register/register";
// import Register from "../modules/auth/pages/register/Main";
// import More from "../modules/auth/pages/more/More";


function Router() {
    
    const routes = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/scan',
            element: <Scan />
        },
        {
            path: '/capture',
            element: <Capture />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/notification',
            element: <Notification />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/edit-profile',
            element: <EditProfile />
        },
        {
            path: '*',
            // element: <ErrorPage />
        },
    ]

    return useRoutes(routes);
}

export default Router