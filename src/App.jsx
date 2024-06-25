
import styled from 'styled-components'
import Header from './Components/Header'
import Normalize from './Components/Normalize'

const Fondo = styled.div`
  background-color: #262626;
  width:100%;
  min-height: 100vh;
`





function App() {

  return (
    <>
      <Fondo>
        <Normalize/>
        <Header></Header>
        
      </Fondo>
    </>
  )
}

export default App
