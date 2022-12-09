import { createBrowserRouter } from "react-router-dom";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home/Home";
import Main from "../Layout/Main";


const router = createBrowserRouter([

    {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element:<Home></Home>
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                }
            ]
    }
])

export default router;