import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'; // Import your custom CSS file for additional styling

const Header = () => {
    return (
        <Navbar className="header-navbar" expand="lg" variant="dark">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="header-brand">Admin Dashboard</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
