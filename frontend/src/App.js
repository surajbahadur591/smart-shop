import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from '../src/screens/HomeScreen'

const App = ()=> {
  return (
    <>
    <Header/>
    <main className="py-3 ">
      <Container>
      {/* <h1>Welcome to Smart Shop</h1> */}
      <HomeScreen/>
      </Container>
    
    </main>
    <Footer />
    </>
  );
}

export default App;
