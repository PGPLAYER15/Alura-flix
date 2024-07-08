import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVideos(data);
      setError(null);
    } catch (e) {
      console.error("Error fetching videos:", e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const addVideo = async (newVideo) => {
    setLoading(true);
    try {
      const response = await fetch('https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });

      if (!response.ok) {
        throw new Error(`Failed to add video. Status: ${response.status}`);
      }

      const addedVideo = await response.json();
      setVideos(prevVideos => [...prevVideos, addedVideo]);
      return addedVideo;
    } catch (e) {
      console.error("Error adding video:", e);
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const updateVideo = async (updatedVideo) => {
    setLoading(true);
    try {
      const response = await fetch(`https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos/${updatedVideo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVideo),
      });

      if (!response.ok) {
        throw new Error(`Failed to update video. Status: ${response.status}`);
      }

      const result = await response.json();
      setVideos(prevVideos => prevVideos.map(video => (video.id === result.id ? result : video)));
      return result;
    } catch (e) {
      console.error("Error updating video:", e);
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const deleteVideo = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete video. Status: ${response.status}`);
      }

      setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
    } catch (e) {
      console.error("Error deleting video:", e);
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return (
    <VideoContext.Provider value={{ videos, loading, error, fetchVideos, addVideo, updateVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};