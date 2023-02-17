import { Box, Button, Grommet, Heading, Image, Paragraph } from 'grommet';
import {Package, Basket} from "grommet-icons";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import BenefitLeft from '../Components/BenefitLeft';
import BenefitRight from '../Components/BenefitRight';
import Navbar from '../Components/Navbar';
import Signup from '../Components/Signup';

import "./Home.css";

const title_individual = `No longer will you have to deal with unattended packages 
                        on your front door`
const title_merchant = `Enjoy juicy discounts at your favorites stores when 
                        your packages are rerouted there`


const title_theft = `A World Without Stolen Packages`
const info_theft = <Paragraph color='#737b8d' margin='none'>
                    For the typical urban/suburban American, there's a good 14% chance they'll have 
                    a package stolen this year.<br/><br/> And a 91% chance you'll come home to them soaked 
                    in bad weather.<br/><br/>With Nile, we keep your packages safe from prying eyes and the 
                    elements when you aren't home, at nearby shops you already frequent.
                    </Paragraph>

const title_discount = `Get Discounts From Your Local Favourite`
const info_discount = <Paragraph color='#737b8d' margin='none'>
                        Something catching your eye when picking up your package 
                        at a Nile-secure merchant?<br/><br/>You're in luck! 
                        We'll give you a discount so you can take that home with you too!
                      </Paragraph>

const title_traffic = `Increase Foot Traffic For Your Business`
const info_traffic = <Paragraph color='#737b8d' margin='none'>
                        Running a small business? We understand how important it is to get people through 
                        the door.<br/><br/>Why not become a Nile-secured merchant and bring in a stream of neighbors 
                        checking your store out?
                    </Paragraph>

const title_advertise = `Advertise Your Business Through Nile`
const info_advertise =  <Paragraph color='#737b8d' margin='none'>
                            Online shopping has never been hotter.<br/><br/>Now, it's a better time than ever to have your physical stores be part of the e-commerce value chain. 
                            When you sign up to be a Nile-secure delivery point, you become part of this 
                            ecosystem. <br/><br/>As we expand further to becoming the one-stop for reverse 
                            logistics, your store can get to be one of few in the neighborhood that has all 
                            of e-commerce returns, and their buyers, passing through it.
                        </Paragraph>

 




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
    // collect emails
    const [email, setEmail] = useState("");
    //smooth scroll to sections
    const refTest = useRef(null);
    const handleClick = () => {
        refTest.current?.scrollIntoView({behavior: 'smooth'});
    };

    console.log(info_advertise)
    return (
        <Grommet full theme={homeTheme}>
            <Navbar/>
            <Box direction='row' gap="150px" className='intro'>
                <Box align='start'>
                    <motion.div
                    initial={{opacity: 0, y: 80}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Heading level="1" margin={{bottom: "40px"}}>
                            Secure Your Packages and <br/>Support Local Business!
                        </Heading>
                        <Box direction='row' gap='xlarge'margin={{bottom: "20px"}}>
                            <Box direction='column'>
                                <Package color='brand'/>
                                <Paragraph size='medium'>{title_individual}</Paragraph>
                            </Box>
                            <Box>
                                <Basket color='brand'/>
                                <Paragraph size='medium'>{title_merchant}</Paragraph>
                            </Box>
                        </Box>
                    </motion.div>
                    
                    <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Button secondary label="Learn More" onClick={handleClick}/>
                    </motion.div>
                    
                </Box>
             
                <Image src={process.env.PUBLIC_URL + "/assets/intro-img.jpg"}/>
            </Box>

            <Box ref={refTest} gap="150px" margin={{bottom: "150px"}}>
                <BenefitLeft
                title = {title_theft}
                detail = {info_theft}
                type = "individuals"
                btnText = "For Individuals"
                img = {process.env.PUBLIC_URL + "/assets/intro-theft1.jpg"}
                />
                <BenefitRight
                title = {title_discount}
                detail = {info_discount}
                type = "individuals"
                btnText = "For Individuals"
                img = {process.env.PUBLIC_URL + "/assets/intro-discount.jpg"}
                />
                <BenefitLeft
                title = {title_traffic}
                detail = {info_traffic}
                type = "merchants"
                btnText = "For Merchants"
                img = {process.env.PUBLIC_URL + "/assets/intro-traffic.jpg"}
                />
                <BenefitRight
                title = {title_advertise}
                detail = {info_advertise}
                type = "merchants"
                btnText = "For Merchants"
                img = {process.env.PUBLIC_URL + "/assets/intro-advertise1.jpg"}
                />
            </Box>
            
            <Signup
            getEmail = {setEmail}/>
        </Grommet>
    )
};

export default Home;