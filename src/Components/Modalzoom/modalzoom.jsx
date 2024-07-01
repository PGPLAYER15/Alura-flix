import { styled } from "styled-components";
import { useState } from "react";
import CampoTexto from "../Campo/Campo";

const Overlay = styled.div`
  background-color: rgba(9, 21, 51, 0.69);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const DialogEstilizado = styled.dialog`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    gap:20px;
    color:white;
  position: absolute;
  top: 494px;
  background: #03122F;
  padding: 0;
  border: 4px solid #6BD1FF;
  border-radius: 12px;
  width: 974px;
  height:1140px;
  display: flex;
  justify-content: center;

  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }

  h2{
    font-size:60px;
    color:#2271D1;
  }
`;

const CampoContainer = styled.div`
    display:flex;
    flex-direction:column;

`

const ModalZoom = ({isOpen,closeModal}) => {
  /* const [titulo, actualizarTitulo] = useState("");
  const [Imagen , actualizacionImagen] = useState("") */


    if(!isOpen) return null;

  return (
    <>
      <>
        <Overlay />
        <DialogEstilizado >
          <form method="dialog">
            <h2>Editar Card:</h2>

            <CampoContainer>
                <CampoTexto
                    titulo="hola"
                    required
                    /* valor={titulo} */
                    placeholder={"Ingresa el titulo del video"}
                />

                <CampoTexto
                    titulo=""
                    required
                    /* valor={Imagen} */
                    placeholder={"Ingresa el titulo del video"}
                />

                <CampoTexto
                    titulo=""
                    required
                    /* valor={Video} */
                    placeholder={"Ingresa la url del video"}
                />

                <CampoTexto
                    titulo=""
                    required
                    /* valor={titulo} */
                    placeholder={"Descripcion del video"}
                />
            </CampoContainer>
            

            <button type="submit"> Guardar </button>
            <button type="reset"> Limpiar </button>
          </form>
        </DialogEstilizado>
      </>
    </>
  );
};

export default ModalZoom;
