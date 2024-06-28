import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import SearchBox from "./SearchBox";
import products from "../products";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const brands = [...new Set(products.map((product) => product.brand))];
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'> 
            <Navbar.Brand>
              {/* <img alt='ProShop' /> */}
              Shop Anything
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* Search box */}
              <SearchBox />

              {/* Cart link with badge */}
              <Link to='/cart'>
                <Navbar.Brand>
                  <FaShoppingCart /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                </Navbar.Brand>
              </Link>

              {/* User links (conditional) */}
              {userInfo?.token ? (
                <>
                  <NavDropdown title={"Logout"} id='username'>
                    {/* <NavDropdown.Item to='/profile'>
                      Profile
                    </NavDropdown.Item> */}
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Link to='/login'> 
                  <Navbar.Brand>
                    <FaUser /> Sign In
                  </Navbar.Brand>
                </Link>
              )}

              {/* Admin links */}
              {false && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item to='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {/* Filter by brand dropdown */}
              <Nav.Link>
                <NavDropdown title="Filter by Brand">
                  <NavDropdown.Item key="all" value="">
                    All Brands
                  </NavDropdown.Item>
                  {brands.map((brand) => (
                    <NavDropdown.Item key={brand} value={brand}>
                      {brand}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
