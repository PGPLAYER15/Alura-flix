import { useEffect,useState } from "react";
import styled from "styled-components";
import Normalize from "../Components/Normalize";
import Header from "../Components/Header";
import Footer from "../Components/FooterPage";

const FondoColor = styled.div`
    background-color: #191919;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    width:100%;
    background-color: #191919;
    width: 100%;
    height: 110vh;
    box-shadow:inset 0 10px 11px -4px #2271D1 ;
    
`

const TituloEstilizado = styled.h1`
    text-align:center;
    font-size: 60px;
    color:white;
    margin-top:70px;
`

const ParrafoEstilizado = styled.p`
    text-align:center;
    font-size: 30px;
    color:white;
    
`
const CrearCardParrafo = styled.p`
    font-size:40px;
    color:white;
    position:relative;
    /* left:20px; */
`
const ContainerForm = styled.form`
    margin: 90px 188px;
    color: white;
`

const InputEstilizado = styled.input`
    width: 470;
    height: 60px;
    border: 2px solid #262626;
    background-color: #191919;
    border-radius: 12px;
    color: white;
    padding: 0 10px;
    outline-color: #4e4e4e;

    &.error {
        border-color: #E53935;
        background-color: none;
    }
`

const ContenedorInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    color: white;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 10px); // Ajusta esto según tus necesidades
    gap:20px;

    label {
        margin-bottom: 5px;
        font-size:20px ; 
    }

    textarea {
        width: 100%;
        height: 120px;
        border: 2px solid #262626;
        background-color: #191919;
        border-radius: 12px;
        color: white;
        padding: 10px;
        resize:none;

        

        &.error {
            border-color: #E53935;
            background-color:none;

            
            
        }

    }
`
const BtnEnviarLimpiar = styled.button`
    width: 180.13px;
    height: 54px;
    background:none;
    border-radius:10px;
    border: 2px solid white;
    color:white;
    font-size:20px;
    cursor: pointer;
    transition: border 0.5s ease-out; /* transición para el efecto de hover */

    
    &:hover{
        border: 2px solid #2271D1;
        
    }

`


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
        border-color: #E53935;
        background-color: none;
    }

    option {
        color: black;
        background: white;
    }
`;

const Formulario = () => {

    const categories = [
        { value: "BACK END", label: "Back-end" },
        { value: "FRONT END", label: "Front-end" },
        { value: "INNOVACIÓN Y GESTIÓN", label: "Innovación y gestión" }
    ];

    useEffect(() => {
        console.log("Componente Formulario renderizado");
    }, []);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        categoryColor: "",
        photo: "",
        link: "",
        description: ""
    });

    const categoryColors = {
        "BACK END": "#00C86F",
        "FRONT END": "#6BD1FF",
        "INNOVACIÓN Y GESTIÓN": "#FFBA05"
    };
        
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log("Componente Formulario renderizado");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            // Asignar el color correspondiente a la categoría cuando se selecciona
            categoryColor: name === "category" ? categoryColors[value] : prevState.categoryColor
        }));
    };
    

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach(key => {
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
                // Asignar el color correspondiente a la categoría seleccionada
                formData.categoryColor = categoryColors[formData.category] || "";
    
                const response = await fetch('http://localhost:3000/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to create video');
                }
    
                const result = await response.json();
                console.log('Nuevo video creado:', result);
    
                // Limpiar el formulario después de un envío exitoso
                setFormData({
                    title: "",
                    category: "",
                    categoryColor: "",
                    photo: "",
                    link: "",
                    description: ""
                });
                setErrors({});
            } catch (error) {
                console.error('Error creating video:', error);
            }
        } else {
            console.log('Formulario inválido');
        }
    };
    

    return (
        <>
            <Normalize/>
            <FondoColor>
                <Header fondo={"#040910"}/>
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
                                    className={errors.title ? 'error' : ''}
                                />
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="category">Categoria</label>
                                <SelectEstilizado 
                                    id="category" 
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className={errors.category ? 'error' : ''}
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categories.map(cat => (
                                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                                    ))}
                                </SelectEstilizado>
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="photo">Imagen</label>
                                <InputEstilizado 
                                    type="text" 
                                    id="photo" 
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    placeholder="Ingresa el enlace de la imagen"
                                    className={errors.photo ? 'error' : ''}
                                />
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="link">Video</label>
                                <InputEstilizado 
                                    type="text" 
                                    id="link" 
                                    name="link"
                                    value={formData.link}
                                    onChange={handleChange}
                                    placeholder="Ingresa el enlace del video"
                                    className={errors.link ? 'error' : ''}
                                />
                            </InputGroup>

                            <InputGroup>
                                <label htmlFor="description">Descripcion</label>
                                <textarea 
                                    id="description" 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="¿de que se trata este video?"
                                    className={errors.description ? 'error' : ''}
                                />
                            </InputGroup>
                        </ContenedorInputs>
                        <div style={{display:"flex",marginTop:"40px" ,gap:"20px"}}>
                            <BtnEnviarLimpiar type="submit">Crear Video</BtnEnviarLimpiar>
                            <BtnEnviarLimpiar type="reset"> Limpiar </BtnEnviarLimpiar>

                        </div>
                        
                    </ContainerForm>
                </Container>
                <Footer/>
            </FondoColor>
        </>
    );
};

export default Formulario