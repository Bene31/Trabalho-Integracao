import Formulario from "./Formulario";
import User from "./pages/user/User";
import Home from "./Home";

const routesConfig = [
    {
        path:"/Home",
        component: Home,
        exact: true
    },
   {
        path:"/",
        component: Formulario,
        exact: true
    },
    {
        path:"/user",
        component: User,
        exact: true
    }
]

export default routesConfig