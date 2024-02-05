//React libraries
import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ToDoList from '../pages/ToDoList'

//Base component
import Layout from '../layout/Layout'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                errorElement:<NotFound/>,
                children:[
                    {
                        path:"/",
                        element:<Home/>
                    },
                    {
                        path:"/todo",
                        element:<ToDoList/>
                    },
                ]
            }
        ]
    }
])

export default router