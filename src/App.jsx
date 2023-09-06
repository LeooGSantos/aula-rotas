import './App.css'
import Menu from './components/Menu'
import {Outlet} from 'react-router-dom'
import Rodape from './components/Rodape'

function App(){

  return(
    <>
      <Outlet/>
      <Menu/>
      <Rodape/>
    </>
  )
}
export default App

