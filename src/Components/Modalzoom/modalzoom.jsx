import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CampoTexto from "../Campo/Campo";
import { AiOutlineCloseCircle } from "react-icons/ai";



const Overlay = styled.div`
  background-color: rgba(9, 21, 51, 0.69);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 20px;
  color: white;
  position: absolute;
  top: 794px;
  background: #03122f;
  padding: 0;
  border: 4px solid #6bd1ff;
  border-radius: 19px;
  width: 974px;
  height: 1140px;

  form {
    padding: 40px;
  }

  h2 {
    font-size: 60px;
    color: #2271d1;
  }
`;

const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContenedorBtn = styled.div`
  display: flex;
  margin: 40px;
  justify-content: space-between;
`;

const BtnSumitReset = styled.button`
  display: flex;
  width: 180px;
  height: 54px;
  color: white;
  background: none;
  border: 2px #f5f5f5 solid;
  border-radius: 10px;
  cursor: pointer;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  transition: background, box-shadow, color, border 0.5s ease-out;

  &:hover {
    box-shadow: inset 0 0 11px 3px #2271d1;
    background: black;
    color: #2271d1;
    border: 2px #2271d1 solid;
  }
`;

const BtnCerrarModal = styled.button`
  position: relative;
  left: 650px;
  background: none;
  color: white;
  border: none;
  width: 43.33px;
  height: 43.33px;
  cursor: pointer;
`;

const ModalZoom = ({ isOpen, closeModal, video, onVideoUpdate }) => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (video) {
      setTitulo(video.title);
      setImagen(video.photo);
      setVideoUrl(video.link);
      setDescripcion(video.description);
    }
  }, [video]);

  if (!isOpen || !video) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedVideo = {
      ...video,
      title: titulo,
      photo: imagen,
      link: videoUrl,
      description: descripcion,
    };

    try {
      const response = await fetch(`https://my-json-server.typicode.com/PGPLAYER15/alura-flix-api/videos/${video.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVideo),
      });

      if (!response.ok) {
        throw new Error('Failed to update video');
      }

      const result = await response.json();
      onVideoUpdate(result);
      closeModal();
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  return (
    <>
      <Overlay />
      <DialogEstilizado>
        <form onSubmit={handleSubmit}>
          <BtnCerrarModal onClick={closeModal}>
            <AiOutlineCloseCircle style={{ width: "43.33px", height: "43.33px", cursor: "pointer" }} />
          </BtnCerrarModal>

          <h2>EDITAR CARD:</h2>

          <CampoContainer>
            <CampoTexto
              titulo="Titulo"
              required
              tamaño={"62px"}
              valor={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder={"Ingresa el titulo del video"}
            />
            <CampoTexto
              titulo="Imagen"
              required
              tamaño={"62px"}
              valor={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder={"Ingresa la URL de la imagen"}
            />
            <CampoTexto
              titulo="Video"
              required
              tamaño={"62px"}
              valor={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder={"Ingresa la url del video"}
            />
            <CampoTexto
              titulo="Descripcion"
              required
              valor={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder={"Descripcion del video"}
              tamaño={"112px"}
            />
          </CampoContainer>

          <ContenedorBtn>
            <BtnSumitReset type="submit">Guardar</BtnSumitReset>
            <BtnSumitReset type="reset">Limpiar</BtnSumitReset>
          </ContenedorBtn>
        </form>
      </DialogEstilizado>
    </>
  );
};

export default ModalZoom;
