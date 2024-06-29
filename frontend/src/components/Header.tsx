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
              {/* Search box */}
              <SearchBox />

              {/* Filter by brand dropdown */}
              <NavDropdown title='Filter by Brand'>
                <NavDropdown.Item key='all' eventKey=''>
                  All Brands
                </NavDropdown.Item>
                {brands.map((brand) => (
                  <NavDropdown.Item key={brand} eventKey={brand}>
                    {brand}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* Cart link with badge */}
              <Link to='/cart'>
                <Navbar.Brand>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems?.reduce((a:number, c:any) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Navbar.Brand>
              </Link>

              {/* User links (conditional) */}
              {userInfo?.token ? (
                <>
                  <Navbar.Brand onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <FaSignOutAlt /> Logout
                  </Navbar.Brand>
                </>
              ) : (
                <Link to='/login'>
                  <Navbar.Brand>
                    <FaUser /> Sign In
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