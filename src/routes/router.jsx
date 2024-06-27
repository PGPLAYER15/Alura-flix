import Home from './pages/home';
import Header from '../Components/Header';
import Formulario from '../pages/Formulario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

const RouterContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
`

const Contenido = styled.div`
    flex:1;
`

const routes = ()=>{
    <BrowserRouter>
        <RouterContainer>
            <Header>
                <Contenido>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Formulario" element={<Formulario/>} />
                    </Routes>
                </Contenido>
            </Header>
        </RouterContainer>
    </BrowserRouter>
}