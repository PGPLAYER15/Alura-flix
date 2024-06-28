import Header from '../Components/Header';
import styled from 'styled-components';
import Normalize from '../Components/Normalize';
import Banner from '../Components/Banner/Banner';
import Categoria from '../Components/Categorias/categoria';
import CategoriaVideos from '../Components/CategoriaVIdeos/CategoriaVIdeos';
import { useState,useEffect } from 'react';


const Fondo = styled.div`
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        // Extraer categorías únicas con sus colores
        const uniqueCategories = [...new Set(data.map(video => JSON.stringify({nombre: video.category, color: video.categoryColor})))];
        setCategorias(uniqueCategories.map(cat => JSON.parse(cat)));
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Normalize />
      <Fondo>
        <Header/>
        <Banner/>
        {categorias.map(categoria => (
          <CategoriaVideos
            key={categoria.nombre}
            categoria={categoria.nombre}
            color={categoria.color}
            videos={videos.filter(video => video.category === categoria.nombre)}
          />
        ))}
      </Fondo>
    </>
  );
}

export default Home;