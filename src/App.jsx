
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import RegistrationForm from './Pages/RegistrationForm'
import ShowStudents from './Pages/ShowStudents'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/registration' element={<RegistrationForm/>}></Route>
        <Route path='/studentlist' element={<ShowStudents/>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </>
  )
}

export default App
