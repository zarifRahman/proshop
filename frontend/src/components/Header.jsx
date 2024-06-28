import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import SearchBox from "./SearchBox";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log('cartItems---', cartItems)
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <img alt='ProShop' />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />
              <Nav.Link >
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              {true ? (
                <>
                  <NavDropdown title={"test"} id='username'>
                    <NavDropdown.Item to='/profile'>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>console.log("first")}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link to='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              )}

              {/* Admin Links */}
              {true && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item  to='/admin/productlist'>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
