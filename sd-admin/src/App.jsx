import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import NestedExample from "./components/NestedExample"
import Receipts from "./components/NestedExample/Receipts"
import Accounts from "./components/NestedExample/Accounts"
import Products from "./components/NestedExample/products"
import Staff from "./components/NestedExample/Staff"
import UseRef from "./components/Hooks/useRef"
import UseReducer from "./components/Hooks/UseReducer"
import UserContext,{UserDataContext} from "./components/context/UserContext"
import DashboardContext from "./components/context/Dashboardcontext"
import Home from "./components/Home"


function App() {
  let [data,setData] = useState([
    {
      name:"Ajith",
      username:"ajith123",
      email:"ajith@gmail.com",
      mobile:"12345678",
      batch:"B100",
    },
    {
      name:"Kumar",
      username:"kum2710",
      email:"kumar@gmail.com",
      mobile:"098765431",
      batch:"B107",
    },
    {
      name:"prabha",
      username:"prabha2501",
      email:"prabha@gmail.com",
      mobile:"979151428",
      batch:"B102",
    },
   
  ])

  return <>
    <div id='wrapper'>
      <BrowserRouter>
     
     
      <Routes>
            <Route path='dashboard' element={
            <UserContext>
              <DashboardContext>
              <Sidebar/><Dashboard/>
              </DashboardContext>
            </UserContext>}/>
            <Route path='create' element={
              <UserContext>
               <Sidebar/> <Create/>
              </UserContext>
            }/>
            <Route path='edit/:id' element={
              <UserContext>
              <Sidebar/><Edit/>
              </UserContext>
            }/>
           
      <Route path='NestedExample' element={<><Sidebar/><NestedExample/></>}>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='receipts' element={<Receipts/>}/>
                <Route path='staffs' element={<Staff/>}/>
            </Route>
            <Route path='/UseRef' element={<><Sidebar/><UseRef/></>}/>
            <Route path='/usereducer' element={<><Sidebar/><UseReducer/></>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/*'  element={<Navigate to='/dashboard'/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  </>
}

export default App