import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Normalize from '../Components/Normalize';
import Banner from '../Components/Banner/Banner';
import CategoriaVideos from '../Components/CategoriaVIdeos/CategoriaVIdeos';
import Footer from '../Components/FooterPage';
import ModalZoom from '../Components/Modalzoom/modalzoom';

const Fondo = styled.div`
  background-color: #191919;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContenedorCategorias = styled.div`
  width: 100%;
  height: auto;
  min-height: min-content; 
  padding: 0px 0 70px 0;
  background-color: #191919;
`

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        const uniqueCategories = [...new Set(data.map(video => JSON.stringify({nombre: video.category, color: video.categoryColor})))];
        setCategorias(uniqueCategories.map(cat => JSON.parse(cat)));
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleVideoUpdate = (updatedVideo) => {
    setVideos(videos.map(video => 
        video.id === updatedVideo.id ? updatedVideo : video
    ));
  };

  return (
    <>
      <Normalize />
      <Fondo>
        <Header fondo={"#262626"}/>
        <Banner/>
        <ContenedorCategorias>
          {categorias.map(categoria => (
            <CategoriaVideos
              key={categoria.nombre}
              categoria={categoria.nombre}
              color={categoria.color}
              videos={videos.filter(video => video.category === categoria.nombre)}
              onVideoEdit={handleVideoUpdate}
            />
          ))}
        </ContenedorCategorias>
        <Footer/>
        <ModalZoom 
          isOpen={isModalOpen} 
          closeModal={() => setIsModalOpen(false)}
          video={selectedVideo}
          onVideoUpdate={handleVideoUpdate}
        />
      </Fondo>
    </>
  );
}

export default Home;