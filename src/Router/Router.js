import { createBrowserRouter } from "react-router-dom";
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
                }
            ]
    }
])

export default router;