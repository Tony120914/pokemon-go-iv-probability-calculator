import { createHashRouter } from "react-router";
import Home from "./components/pages/Home.js";
import Support from "./components/pages/Support.js";

const hashRouter = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/support',
        element: <Support />
    }
]);

export default hashRouter;
