import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    Navigate,
    } from "react-router-dom"

import   Home  from "./Pages/Home/Home"
import Login  from "./Pages/Login/Login"
import  Cadastro from "./Pages/Cadastro/Cadastro"
import Perfil from "./Pages/Perfil"
import Usuarios from "./Pages/Usuarios/Usuarios"
import { AppLayout } from "./layouts"
import useAuthStore from "./stores/auth"

function RotasPrivadas(){
    const token = useAuthStore((state) => state.token);

    if (token) return <Outlet />;

    return <Navigate to= "/login" replace />;
}


const router = createBrowserRouter (
    createRoutesFromElements(
        
            <Route path= "/" element = {<AppLayout />}>
            <Route element={<RotasPrivadas />}>
             <Route path= "perfil" element= {<Perfil />} />
             <Route index element= {<Home />} />
             </Route>
            <Route path= "login" element= {<Login />} />
            <Route path= "cadastro" element= {<Cadastro />} />
            <Route path= "usuario" element= {<Usuarios />} />
           
            </Route>

           
            
        
    )
)

export default function Routes() {
    return <RouterProvider router ={router} />
}