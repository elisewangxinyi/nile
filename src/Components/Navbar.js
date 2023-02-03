import React from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Heading} from 'grommet';

import "./Navbar.css";

const Navbar = () => {
    return (
        <Box 
        tag="header" 
        direction="row" 
        background='white' 
        align="center"
        style={{zIndex: "1"}}
        className="nav">
            <div className="logo">
                <Link to="/home">
                    <img src={process.env.PUBLIC_URL + "/assets/logo_nile.png"}
                         alt="logo of Nile"/>
                </Link>
            </div>
            <Box direction="row" gap="large" className="nav-pages">
                <Link to="/individuals">
                    <Heading level='4' margin="none">Individuals</Heading>
                </Link>
                <Link to="/merchants">
                    <Heading level='4' margin="none">Merchants</Heading>
                </Link>
                <Link to="/about">
                    <Heading level='4' margin="none">About</Heading>
                </Link>
            </Box>

            <Button primary label="Sign Up" color="#3C64B1"/>
        </Box>
    )
};

export default Navbar;