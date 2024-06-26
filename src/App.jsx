
import styled from 'styled-components'
import Header from './Components/Header'
import Normalize from './Components/Normalize'
import Banner from './Components/Banner/Banner'

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
        <Header/>
        <Banner/>
      </Fondo>
    </>
  )
}

export default App
