import { createBrowserRouter } from "react-router";
import Root from "./components/Root/Root";
import Home from "./page/Home";
import Books from "./page/Books";
import BooksDetails from "./components/BooksDetails";

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
        },
        {
            path:'/books-details/:bookId',
            Component: BooksDetails,
            loader: ()=>fetch('/booksData.json')
        }
    ]
  },
]);