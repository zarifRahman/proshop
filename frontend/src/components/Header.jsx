import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
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
              {/* <SearchBox /> */}
              <Nav.Link >
                <FaShoppingCart /> Cart
                
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
