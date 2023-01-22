import { Box, Button, Grommet, Heading, Image, Paragraph } from 'grommet';
import {Package, Basket} from "grommet-icons";
import React from 'react';
import Navbar from '../Components/Navbar';

import "./Home.css";

const title_individual = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore 
                         magna aliqua. Ut enim ad minim veniam, quis nostrud 
                         exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat.`
const title_merchant = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore 
                         magna aliqua. Ut enim ad minim veniam, quis nostrud 
                         exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat.`

const homeTheme = {
    global: {
        colors: {
            brand: '#3C64B1'
        },
        // font: {
        //     family: 'Monument Grotesk'
        // } 
    }
};

const Home = () => {
    return (
        <Grommet full theme={homeTheme}>
            <Navbar/>
            <Box direction='row' gap="150px" className='intro'>
                <Box align='start'>
                    <Heading level="1" margin={{bottom: "40px"}}>
                        Secure Your Packages and <br/>Support Local Business!
                    </Heading>
                    <Box direction='row' gap='xlarge'margin={{bottom: "20px"}}>
                        <Box direction='column'>
                            <Package color='brand'/>
                            <Paragraph size='small'>{title_individual}</Paragraph>
                        </Box>
                        <Box>
                            <Basket color='brand'/>
                            <Paragraph size='small'>{title_merchant}</Paragraph>
                        </Box>
                    </Box>
                    <Button secondary label="Learn More"/>
                </Box>
             
                <Image 
                        src={process.env.PUBLIC_URL + "/assets/intro-img.jpg"}/>
        
            </Box>
            <Box height='100vh' background='brand'></Box>
        </Grommet>
    )
};

export default Home;