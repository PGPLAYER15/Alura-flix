import styled from "styled-components"

const Labelestilizado = styled.label`
    color:white;
`


const CampoTexto =  (props)=>{
    
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion

    const {type = "text" } = props

    

    const manejarCambio  = (e)=> {
        
        props.ActualizarValor(e.target.value)
    }

    return (
    <div className = {`campo campo-${type}`} >
            <Labelestilizado>{props.titulo} </Labelestilizado>
            <input 
            placeholder= {placeholderModificado} 
            required={props.required} 
            value={props.valor}
            type= {type}
        /> 
        
    </div>
    )
}

export default CampoTexto