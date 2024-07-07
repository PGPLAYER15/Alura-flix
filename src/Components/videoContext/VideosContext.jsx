import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const addVideo = async (newVideo) => {
    setVideos(prevVideos => [...prevVideos, newVideo]);
    console.log('Video añadido al contexto:', newVideo);
};

  const fetchVideos = useCallback(() => {
      fetch('https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos')
        .then(response => response.json())
        .then(data => {
            setVideos(data);
            console.log('Videos recuperados:', data);
        })
        .catch(error => console.error('Error:', error));
  }, []);
  
  

  const updateVideo = (updatedVideo) => {
    setVideos(prevVideos => prevVideos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

  const deleteVideo = (id) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
  };

  return (
    <VideoContext.Provider value={{ videos, fetchVideos, addVideo, updateVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
