import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/politica-privacidade' element={<PoliticaPrivacidade />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
