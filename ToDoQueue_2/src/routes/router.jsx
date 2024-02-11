//rafce
// Librerias de React
import React from "react";
// Crear el enrutador(Los links del Ménu)
import { createBrowserRouter } from "react-router-dom";
// Páginas
import NotFound from '../pages/NotFound';
import ToDoList from "../pages/ToDoList";
import Prueba from '../pages/RMCharacter';
// Componete Base
import Layout from "../layout/Layout";
import RMCharacter from "../pages/RMCharacter";

// Definir lo que hay dentro del enrutador
const router = createBrowserRouter([
    {
        // Si escribo una ruta que NO existe va a la página de error
        path:"/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                // Si la base de la ruta está bien, pero el resto esta mal va a la página de error
                errorElement: <NotFound/>,
                children:[
                    {
                        // Esto va para la página Home
                        path: "/RMCharacter",
                        element: <RMCharacter/>
                    },
                    {
                        // Esto va para la página todolist
                        path: "/todo",
                        element: <ToDoList/>
                    },
                    {
                        // Esto va para la página prueba
                        path: "/prueba",
                        element: <Prueba/>
                    }
                ]
            }
        ]
    }
])

export default router