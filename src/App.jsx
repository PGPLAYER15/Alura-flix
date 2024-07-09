import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Normalize from './Components/Normalize';
import Formulario from './pages/Formulario';
import Home from './pages/home';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    fetch('https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error:', error));
  };

  const addVideo = (newVideo) => {
    setVideos(prevVideos => [...prevVideos, newVideo]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos(prevVideos => 
      prevVideos.map(video => video.id === updatedVideo.id ? updatedVideo : video)
    );
  };

  const deleteVideo = (id) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
  };

  return (
    <Router>
      <Normalize />
      <Routes>
        <Route path="/" element={<Home videos={videos} updateVideo={updateVideo} deleteVideo={deleteVideo} />} />
        <Route path="/Formulario" element={<Formulario addVideo={addVideo} />} />
      </Routes>
    </Router>
  );
}

export default App;