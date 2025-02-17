import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login/Login'
import Dashboard from './components/pages/Dashboard/Dashboard'
import { useState } from 'react'
import { NavigationContext, ProductsContext } from './utils/contexts/contexts'
import { CategorieInterface, ProductsContextInterface } from './utils/interfaces/interfaces'
import Subgroups from './components/elements/Subgroups/Subgroups'
import Items from './components/elements/Items'

function App() {

  const [ currentPage, setCurrentPage ] = useState<string>('dashboard')
  const [ previousPage, setPreviousPage ] = useState<string>('login')
  const [ products , setProducts ] = useState<[] | undefined | void>(undefined)
  const [productsTree, setProductsTree] = useState<CategorieInterface[] | undefined>(undefined);
  const [ fetchingData, setFetchingData ] = useState<boolean>(false)

  const navigationContextValue = { currentPage, setCurrentPage, previousPage, setPreviousPage, fetchingData, setFetchingData}
  const productsContextValue = { products, setProducts, productsTree, setProductsTree }

  return (
    <>
    <NavigationContext.Provider value={navigationContextValue}>
    <ProductsContext.Provider value={productsContextValue as ProductsContextInterface}>
    <Routes>
        <Route path='' index element={<Login/>}/>
      <Route path='/'>
        <Route path='login' index element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/:group' element={<Subgroups/>}/>
        <Route path='dashboard/:group/:subgroup' element={<Items/>}/>
      </Route>
    </Routes>
    </ProductsContext.Provider>
    </NavigationContext.Provider>
    </>
  )
}

export default App
