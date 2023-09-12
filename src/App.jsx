import { BrowserRouter, Route, RouterProvider, Routes,
   createBrowserRouter } from "react-router-dom"


import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import AppLayout from "./AppLayout"
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Todo from './components/todo/todo';
import Details from "./components/Home/details";
import { Provider } from "react-redux";
import store from "./movies/store";
import Favorite from "./components/favorite/favorite";
import { useState } from "react";
import Counter from "./components/counter/counter";
import {CtxProvider} from "./context/context";

const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {index:true,element:<Home/>},

      {path:"/login" , element:<Login/>},
      {path:"/signup" , element:<Signup/>},
      {path:"/counter" , element:<Counter/>},
      {path:"/todo" , element:<Todo/>},
      {path:"/details/:id" , element:<Details/>},
      {path:"/favorite" , element:<Favorite/>},
      
      {path:"*",element:<NotFound/>}
    ]
  }
])


function App() {
 
  const [ctx,setctx]=useState(1)
  const [aa,setaa]=useState(4)
  const [languge,setlanguge]=useState("en")
  let x={ctx,setctx,aa,setaa,languge,setlanguge}
  
  return <Provider store={store}>
    
      <CtxProvider value ={x}>

        <RouterProvider router={router}/>

      </CtxProvider>
        
    </Provider>
}

export default App
