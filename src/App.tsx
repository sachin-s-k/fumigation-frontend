
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import SignIn from './Sign-in'
import HomeNav from './Home-nav'
import Batch from './Batch'
import Record from './Record'
import Invigilator from './Invigilator'
import Landing from './Landing'
import OtpComponent from './Otp-Component'
import BatchRecord from './Batch-student'
import Time from './Time-input'
import Modal from './Inv-Modal'
import Tab from './Tab'
import Tabs from './Tabs'
import MainNav from './Main-Nav'
import Navigation from './Navigation-bar'
import otpLogin from '../src/Authentication/otpLogin.tsx'
function App() {
  let user: Boolean = true



  //const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>

      {user ? <div>
        <Navigation />


        <></>










        <BrowserRouter>
          <MainNav />

          <Routes>


            <Route path='/' element={<SignIn />}></Route>
            <Route path='/home' element={<HomeNav />}></Route>
            <Route path='/batch' element={<Batch />}></Route>
            <Route path='/fumigation-record' element={<Record />}></Route>
            <Route path='/current-invigilators' element={<Invigilator />}></Route>
            <Route path='/pending-students' element={<Record />}></Route>
            <Route path='/view-batch/:id/' element={<BatchRecord />}></Route>
           
          </Routes>

        </BrowserRouter>

      </div> : <SignIn />
      }




    </>
  )
}

export default App
