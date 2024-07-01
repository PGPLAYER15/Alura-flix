import styled from "styled-components"

const Labelestilizado = styled.label`
    color: white;
    font-size: 20px;
`
const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const InputEstilizado = styled.input`
    background: none;
    border: 2px solid #2271D1;
    width: 573px;
    border-radius: 10px;
    padding: 0px 10px;
    color: white;
`

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    const { type = "text" } = props

    return (
        <ContainerContent>
            <Labelestilizado>{props.titulo}</Labelestilizado>
            <InputEstilizado 
                style={{ height: `${props.tamaño}` }}
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={props.onChange}
                type={type}
            /> 
        </ContainerContent>
    )
}

export default CampoTexto