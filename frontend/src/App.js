import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  return (
    <>
      <ToastContainer />
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
          {/* <HomeScreen />
          <ProductScreen /> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App