import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddExpense from './pages/addExpense/AddExpense';
import Home from './pages/home/Home';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/add-expense' exact element={<AddExpense/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App