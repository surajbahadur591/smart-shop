import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>

                    <Navbar.Brand href="/">Smart Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i> CART</Nav.Link>
                        <Nav.Link href="/login"><i class="fas fa-user-alt"></i> Sign In</Nav.Link>
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
</Navbar>
        </header>
    )
}

export default Header
