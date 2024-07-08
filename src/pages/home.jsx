import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Normalize from '../Components/Normalize';
import Banner from '../Components/Banner/Banner';
import CategoriaVideos from "../Components/CategoriaVIdeos/CategoriaVIdeos"
import Footer from '../Components/FooterPage';
import { useVideo } from '../Components/videoContext/VideosContext';

const Fondo = styled.div`
  background-color: #191919;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContenedorCategorias = styled.div`
  width: 100%;
  height: auto;
  min-height: min-content;
  padding: 0px 0 70px 0;
  background-color: #191919;
`;

const LoadingMessage = styled.p`
  color: white;
  text-align: center;
  font-size: 1.5em;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 1.5em;
`;

const Home = () => {
  const { videos, loading, error, fetchVideos } = useVideo();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    if (videos.length > 0) {
      const uniqueCategories = [...new Set(videos.map(video => JSON.stringify({ nombre: video.category, color: video.categoryColor })))];
      setCategorias(uniqueCategories.map(cat => JSON.parse(cat)));
    }
  }, [videos]);

  if (loading) {
    return <LoadingMessage>Cargando videos...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <>
      <Normalize />
      <Fondo>
        <Header fondo={"#262626"} />
        <Banner />
        <ContenedorCategorias>
          {categorias.map(categoria => (
            <CategoriaVideos
              key={categoria.nombre}
              categoria={categoria.nombre}
              color={categoria.color}
              videos={videos.filter(video => video.category === categoria.nombre)}
            />
          ))}
        </ContenedorCategorias>
        <Footer />
      </Fondo>
    </>
  );
};

export default Home;