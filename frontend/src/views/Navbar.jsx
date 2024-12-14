import { Container, Button, Navbar as NavbarAlias, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const {handleCalculaTotal} = useContext(CartContext)
  const token = false
  const botones = (token ?
    (<>
      <NavLink to='/profile'>
        <Button className="me-2" variant="outline-light">🔓Profile</Button>
      </NavLink>
      <NavLink to='/logout'>
        <Button className="me-2" variant="outline-light">🔒Logount</Button>
      </NavLink>
    </>) :
    (<>
      <NavLink to='/login'>
        <Button className="me-2" variant="outline-light">🔐Login</Button>
      </NavLink>
      <NavLink to='/register'>
        <Button className="me-2" variant="outline-light">🔐Registrer</Button>
      </NavLink>
    </>)
  )

  return (
    <>
      <NavbarAlias expand="lg" bg="dark" className='justify-content-between' data-bs-theme="dark">
        <Container>
          <NavbarAlias.Brand href="#home">¡Pizzeria Mamma Mia!</NavbarAlias.Brand>
          <NavbarAlias.Toggle aria-controls="basic-navbar-nav" />
          <NavbarAlias.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/'>
                <Button className="me-2" variant="outline-light">🍕Home</Button>
              </NavLink>
              {botones}
            </Nav>
            <Nav className='justify-content-end'>
              <NavLink to='/cart'>
                <Button variant="outline-light">🛒Total: ${handleCalculaTotal()}</Button>
              </NavLink>
            </Nav>
          </NavbarAlias.Collapse>
        </Container>
      </NavbarAlias>
    </>
  )
}

export default Navbar