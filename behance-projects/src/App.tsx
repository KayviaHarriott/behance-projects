import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { FinanceManagementLandingPage } from './pages/FinanceManagementLandingPage'

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<LandingPage/>} />
        <Route path="/projects/1" element={<FinanceManagementLandingPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
