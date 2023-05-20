import { Container, Nav, Navbar as BNavbar } from "react-bootstrap";
//import CartWidget from "./CartWidget"//
import {  Link } from "react-router-dom";

function Navbar() {
    return (
        
            <BNavbar bg="dark" variant="dark">
                <Container>
                    <BNavbar.Brand as={Link} to="/">
                        Mi Tienda
                    </BNavbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/1">
                            1
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/2">
                            2
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/3">
                            3
                        </Nav.Link>
                    </Nav>
                </Container>
            </BNavbar>
        
    );
}

export default Navbar;
