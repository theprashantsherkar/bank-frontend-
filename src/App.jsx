import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/banker/Login'
import Register from './pages/banker/Register'
import CustomerLogin from './pages/customer/Login'
import CustomerRegister from './pages/customer/Register'
import Transactions from './pages/banker/Transactions'
import Account from './pages/customer/Account'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

export const backendUrl = 'http://localhost:9000'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/banker'>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='transactions' element={ <Transactions/>} />
        </Route>
        <Route path='/customer'>
          <Route path='login' element={<CustomerLogin />} />
          <Route path='register' element={<CustomerRegister />} />
          <Route path='account' element={ <Account/>} />
        </Route>

      </Routes>
      <Toaster/>

    </Router>
  )
}

export default App