import { createBrowserRouter } from "react-router";
import Root from "./components/Root/Root";
import Home from "./page/Home";
import Books from "./page/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
        {
            index:true, Component:Home
        },
        {
            path:'/books',
            Component:Books
        }
    ]
  },
]);