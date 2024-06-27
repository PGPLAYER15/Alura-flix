import Header from '../Components/Header';
import styled from 'styled-components';
import Normalize from '../Components/Normalize';
import Banner from '../Components/Banner/Banner';


const Fondo = styled.div`
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`

const Home = ()=> {
  return (
    <>
        <Normalize />
            <Fondo>
                <Header/>
                <Banner/>
            </Fondo>
    </>
       
  )
}

export default Home