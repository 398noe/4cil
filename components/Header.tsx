import { memo } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export const Header = memo(() => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="navbar-expand-lg">
                <Container>
                    <Navbar.Brand
                        className="mx-4"
                        href="/">
                        4CIL
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto gap-2"
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#howto">How To</Nav.Link>
                            <NavDropdown title="License">
                                <NavDropdown.Item>非商用利用向け</NavDropdown.Item>
                                <NavDropdown.Item>商用利用向け</NavDropdown.Item>
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