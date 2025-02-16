import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login/Login'
import Dashboard from './components/pages/Dashboard/Dashboard'
import { useState } from 'react'
import { NavigationContext } from './utils/contexts/contexts'

function App() {

  const [ currentPage, setCurrentPage ] = useState<string>('dashboard')
  const [ previousPage, setPreviousPage ] = useState<string>('login')

  const navigationContextValue = { currentPage, setCurrentPage, previousPage, setPreviousPage}

  return (
    <>
    <NavigationContext.Provider value={navigationContextValue}>
    <Routes>
        <Route path='' index element={<Login/>}/>
      <Route path='/'>
        <Route path='login' index element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </NavigationContext.Provider>
    </>
  )
}

export default App
