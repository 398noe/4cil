import { memo } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export const Header = memo(() => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="navbar-expand-lg">
                <Container>
                    <Navbar.Brand
                        className="mx-4"
                        href="#home">
                        4CIL
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto gap-2"
                            navbarScroll
                        >
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>HowTo</Nav.Link>
                            <NavDropdown title="License">
                                <NavDropdown.Item>Illust</NavDropdown.Item>
                                <NavDropdown.Item>Audio</NavDropdown.Item>
                                <NavDropdown.Item>Video</NavDropdown.Item>
                                <NavDropdown.Item>3D Model</NavDropdown.Item>
                                <NavDropdown.Item>Novel</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="gap-2">
                            <Button variant="primary">Go GitHub</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
});

export default Header;