import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Normalize from './Components/Normalize';
import Formulario from './pages/Formulario';
import Home from './pages/home';


function App() {
  return (
    <Router>
      <Normalize />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Formulario" element={<Formulario/>} />
        </Routes>
    </Router>
  )
}

export default App;