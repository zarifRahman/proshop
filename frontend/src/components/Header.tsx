import React, { FC } from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import products from '../products';
import { Link, useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state: any) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);

  const brands: string[] = [...new Set(products.map((product: any) => product.brand))];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Shop Anything</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center'>
              <SearchBox />

              {/* Cart link with badge */}
              <Link to='/cart' className="ml-4">
                <Navbar.Brand>
                <div className="flex items-center justify-center pt-4">
                  <FaShoppingCart /> <span className='mx-1'>Cart</span>
                  {cartItems.length > 0 && (
                    <Badge pill bg='success'>
                      {cartItems?.reduce((a:number, c:any) => a + c.qty, 0)}
                    </Badge>
                  )}
                </div>
                </Navbar.Brand>
              </Link>

              {/* User links (conditional) */}
              {userInfo?.token ? (
                <>
                  <Navbar.Brand onClick={handleLogout} className="ml-4" style={{ cursor: 'pointer' }}>
                    <div className="flex items-center">
                      <FaSignOutAlt /> Logout
                    </div>
                  </Navbar.Brand>
                </>
              ) : (
                <Link to='/login' className="ml-4 pt-4">
                  <Navbar.Brand>
                    <div className="flex items-center">
                      <FaUser /> Sign In
                    </div>
                  </Navbar.Brand>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;