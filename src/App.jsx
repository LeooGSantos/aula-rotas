import './App.css'
import{Menu} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

function App(){

  return(
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}
export default App