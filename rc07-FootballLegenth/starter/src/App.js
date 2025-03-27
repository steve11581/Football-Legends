import Container from 'react-bootstrap/Container'
import Header from './Components/Header/Header';
import LegentContainer from './Components/Legents/LegentContainer';

function App() {
  return (
   <Container className='text-center my-5'>
     <Header/>
     <LegentContainer/>
   </Container>
  
  );
}

export default App;
