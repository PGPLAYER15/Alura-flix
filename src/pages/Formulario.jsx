import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Normalize from "../Components/Normalize";
import Header from "../Components/Header";
import Footer from "../Components/FooterPage";
import { useVideo } from '../Components/videoContext/VideosContext.jsx';

const FondoColor = styled.div`
  background-color: #191919;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  background-color: #191919;
  width: 100%;
  height: 110vh;
  box-shadow: inset 0 10px 11px -4px #2271d1;
`;

const TituloEstilizado = styled.h1`
  text-align: center;
  font-size: 60px;
  color: white;
  margin-top: 70px;
`;

const ParrafoEstilizado = styled.p`
  text-align: center;
  font-size: 30px;
  color: white;
`;

const CrearCardParrafo = styled.p`
  font-size: 40px;
  color: white;
  position: relative;
`;

const ContainerForm = styled.form`
  margin: 90px 188px;
  color: white;
`;

const InputEstilizado = styled.input`
  width: 470px;
  height: 60px;
  border: 2px solid #262626;
  background-color: #191919;
  border-radius: 12px;
  color: white;
  padding: 0 10px;
  outline-color: #4e4e4e;

  &.error {
    border-color: #e53935;
    background-color: none;
  }
`;

const ContenedorInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px);
  gap: 20px;

  label {
    margin-bottom: 5px;
    font-size: 20px;
  }

  textarea {
    width: 100%;
    height: 120px;
    border: 2px solid #262626;
    background-color: #191919;
    border-radius: 12px;
    color: white;
    padding: 10px;
    resize: none;

    &.error {
      border-color: #e53935;
      background-color: none;
    }
  }
`;

const BtnEnviarLimpiar = styled.button`
  width: 180.13px;
  height: 54px;
  background: none;
  border-radius: 10px;
  border: 2px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: border 0.5s ease-out;

  &:hover {
    border: 2px solid #2271d1;
  }
`;

const SelectEstilizado = styled.select`
  width: 100%;
  height: 60px;
  border: 2px solid #262626;
  background-color: #191919;
  border-radius: 12px;
  color: white;
  padding: 0 10px;
  outline-color: #4e4e4e;

  &.error {
    border-color: #e53935;
    background-color: none;
  }

  option {
    color: black;
    background: white;
  }
`;

const categories = [
  { value: "BACK END", label: "Back-end" },
  { value: "FRONT END", label: "Front-end" },
  { value: "INNOVACIÓN Y GESTIÓN", label: "Innovación y gestión" },
];


const Formulario = () => {
  const { addVideo } = useVideo();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      title: "",
      category: "",
      categoryColor: "",
      photo: "",
      link: "",
      description: "",
  });

  const [errors, setErrors] = useState({});

  const categoryColors = {
      "BACK END": "#00C86F",
      "FRONT END": "#6BD1FF",
      "INNOVACIÓN Y GESTIÓN": "#FFBA05",
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value,
          categoryColor: name === "category" ? categoryColors[value] : prevState.categoryColor,
      }));
  };

  const validateForm = () => {
      let newErrors = {};
      Object.keys(formData).forEach((key) => {
          if (!formData[key]) {
              newErrors[key] = true;
          }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        formData.categoryColor = categoryColors[formData.category] || "";
        const nuevoVideo = await addVideo(formData);
        console.log('Nuevo video creado:', nuevoVideo);
        
        setFormData({
          title: "",
          category: "",
          categoryColor: "",
          photo: "",
          link: "",
          description: ""
        });
        setErrors({});
        
        navigate('/');
      } catch (error) {
        console.error('Error al crear el video:', error);
      }
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <>
      <Normalize />
      <FondoColor>
        <Header fondo={"#040910"} />
        <Container>
          <TituloEstilizado>NUEVO VIDEO</TituloEstilizado>
          <ParrafoEstilizado>Complete el formulario para crear una nueva tarjeta de video</ParrafoEstilizado>

          <ContainerForm onSubmit={handleSubmit}>
            <CrearCardParrafo>Crear Card</CrearCardParrafo>

            <ContenedorInputs>
              <InputGroup>
                <label htmlFor="title">Titulo</label>
                <InputEstilizado
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ingrese el titulo"
                  className={errors.title ? "error" : ""}
                />

                <label htmlFor="category">Categoria</label>
                <SelectEstilizado
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? "error" : ""}
                >
                  <option value="">Seleccione una categoria</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </SelectEstilizado>
              </InputGroup>

              <InputGroup>
                <label htmlFor="photo">Link Imagen</label>
                <InputEstilizado
                  type="text"
                  id="photo"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  placeholder="Ingrese el link de la imagen"
                  className={errors.photo ? "error" : ""}
                />

                <label htmlFor="link">Link Video</label>
                <InputEstilizado
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Ingrese el link del video"
                  className={errors.link ? "error" : ""}
                />
              </InputGroup>

              <InputGroup style={{ flexBasis: "100%" }}>
                <label htmlFor="description">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Ingrese la descripción"
                  className={errors.description ? "error" : ""}
                />
              </InputGroup>
            </ContenedorInputs>

            <BtnEnviarLimpiar type="submit">Enviar</BtnEnviarLimpiar>
          </ContainerForm>
        </Container>
        <Footer />
      </FondoColor>
    </>
  );
};

export default Formulario;
