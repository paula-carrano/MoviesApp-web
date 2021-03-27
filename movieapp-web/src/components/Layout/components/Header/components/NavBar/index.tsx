import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import navLinks from "./dataNav"
import { MenuItem } from './type';
import { Logo } from './components';


export const NavBar: FC = () => {
    return (
        <div className="navbar-collapse">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Logo /></Navbar.Brand>
                <Nav className="mr-auto">
                    {
                        navLinks.map(({ link, icon, name }: MenuItem) => {
                            return (
                                <Nav.Link key={name} href={link}>
                                    <FontAwesomeIcon icon={icon} /> {name}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Navbar>
        </div>
    );
}

