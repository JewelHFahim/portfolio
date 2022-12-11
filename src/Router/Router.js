import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Blog from "../component/Blog/Blog";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home/Home";
import Projects from "../component/Projects/Projects";
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
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/project",
                    element: <Projects></Projects>
                },
                {
                    path: "/blog",
                    element:<Blog></Blog>
                }
            ]
    }
])

export default router;