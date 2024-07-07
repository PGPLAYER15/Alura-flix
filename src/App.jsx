import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Normalize from './Components/Normalize';
import Formulario from './pages/Formulario';
import Home from './pages/home';
import { VideoProvider } from './Components/videoContext/VideosContext.jsx';

function App() {
  return (
    <VideoProvider>
      <Router>
        <Normalize />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Formulario" element={<Formulario/>} />
        </Routes>
      </Router>
    </VideoProvider>
  )
}

export default App;