import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/login'];
  const shouldRenderHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <>
      <ToastContainer />
      {shouldRenderHeader && <Header />}
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App