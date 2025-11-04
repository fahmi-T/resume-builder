import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage'
import Resumegenerator from './Pages/Resumegenerator'
import History from './Pages/History'
import Form from './Pages/Form'
import Pagenotfound from './Pages/Pagenotfound';





function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Landingpage/>}/>     
        <Route path='/resume-generator' element={<Resumegenerator/>}/>    
        <Route path='/history' element={<History/>}/>  
        <Route path='/form' element={<Form/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>    
        </Routes>
        <Footer/>
    </>
  )
}

export default App
