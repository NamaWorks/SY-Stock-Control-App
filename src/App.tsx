import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login/Login'
import Dashboard from './components/pages/Dashboard/Dashboard'
import { useState } from 'react'
import { NavigationContext, ProductsContext } from './utils/contexts/contexts'
import { ProductsContextInterface } from './utils/interfaces/interfaces'

function App() {

  const [ currentPage, setCurrentPage ] = useState<string>('dashboard')
  const [ previousPage, setPreviousPage ] = useState<string>('login')
  const [ products , setProducts ] = useState<[] | undefined | void>(undefined)

  const navigationContextValue = { currentPage, setCurrentPage, previousPage, setPreviousPage}
  const productsContextValue = { products, setProducts }

  return (
    <>
    <NavigationContext.Provider value={navigationContextValue}>
    <ProductsContext.Provider value={productsContextValue as ProductsContextInterface}>
    <Routes>
        <Route path='' index element={<Login/>}/>
      <Route path='/'>
        <Route path='login' index element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </ProductsContext.Provider>
    </NavigationContext.Provider>
    </>
  )
}

export default App
