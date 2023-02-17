import { Box, Button, Grommet, Heading, Image, Paragraph } from "grommet";
import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from 'framer-motion';


import IndiFlowLeft from "../Components/IndiFlowLeft";
import IndiFlowRight from "../Components/IndiFlowRight";
import BenefitCard from "../Components/BenefitCard";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";

import "./flow.css";

const requestAddress = <Paragraph color='#737b8d' margin='none'>
                        You've been eyeing those fancy new shoes online. 
                        We get it, we've been too. Once you know what you want 
                        to purchase, go ahead and fire up 
                        the <strong>Nile app</strong> for an <strong>address.</strong>
                       </Paragraph>

const selectMerchant = <Paragraph color='#737b8d' margin='none'>
                        We'll show you the Nile-Secure Merchants nearby, as well 
                        as any <strong>juicy discounts</strong> they might have in-store. Just pick the store most convenient to you
                       </Paragraph>

const oneDollar = <Paragraph color='#737b8d' margin='none'>
                    Confirm your package delivery with the store for just <strong>$1</strong>. You'll be asked to enter package 
                    size(s) and tracking numbers, if you know them.
                  </Paragraph>

const alertDelivery = <Paragraph color='#737b8d' margin='none'>
                        We'll ping you when the package is here, either through 
                        the app or through a text message (your choice). 
                        You'll also get a <strong>QR code</strong> to use when you head over to pick up your package.
                      </Paragraph>

const pickup = <Paragraph color='#737b8d' margin='none'>
                Simply swing by the shop and show the cashier your <strong>QR code</strong> to collect your 
                package(s). Spot anything interesting while you're here? Pick it up at a <strong>discount 
                (on us)</strong> and take it home with you.
               </Paragraph>

const cardStolen = `Our verified partners always have an eye on your package, 
                    so you have one less thing to worry about.`

const cardDiscount = `Get discounts in-store on anything you buy when you 
                      pick-up your packages... just to brighten up your day a 
                      little bit more.`

const cardLocalBusiness = `Empower local businesses to plug the leak in the 
                           e-commerce supply chain, while spreading awareness 
                           on their company's offerings`


//Grommet Theme
const individualTheme = {
global: {
    colors: {
        brand: '#3C64B1'
    },
},
};

// for scroll to appear animation
const variant = {
    visible: { 
        opacity: 1, 
        y: 0, 
        transition:{
            duration: 0.3, 
            delay: 0.5
        }
    },
    hidden: { 
        opacity: 0, 
        y: 50 
    }
}

const Individuals = () => {
    //smooth scroll to sections
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    // benefit cards animation
    const control = useAnimation();
    const refCard = useRef(null);
    const isInView = useInView(refCard, { once: true});

    useEffect(() => {
        if (isInView) {
            control.start('visible')
        }
    })
    return (
        <Grommet full theme={individualTheme}>
            <Navbar/>
            <Box 
                full
                align="center"
                gap="80px"
            >
                <Box 
                fill="horizontal"
                height="100vh" 
                background="url(/assets/individuals-titlebg.jpg)"
                direction="column"
                justify="center"
                pad={{top: "xlarge", left: "200px"}}
                >
                    
                    <Box width="large" align="start" className="indiMerch-intro">
                        <motion.div 
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Heading level={1}>
                                Safe, Convenient and Easy Way to Secure Packages!
                            </Heading>
                        </motion.div>
                        
                        <motion.div 
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Paragraph>
                                Have you packages delivered to a Nile-secure merchant 
                                of your choice in your neighborhood, if you aren't 
                                home to receive it. <br/><br/>Well keep it safe until you 
                                swing by to pick it up!
                            </Paragraph>
                            <Button secondary label="See How it Works" onClick={handleClick}/>
                        </motion.div>
                        
                        <motion.div 
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Paragraph margin={{top: "50px"}}>
                                "Dolorem nihil pariatur laboriosam velit aliquid 
                                eveniet sit animi id. Nam est at et nesciunt 
                                perferendis autem neque eos. Odit distinctio ut 
                                est eos sint maxime."---John
                            </Paragraph>
                        </motion.div>
                        
                    </Box>
                    
                </Box>
                

                <Box 
                    fill
                    align="center"
                    className="individuals-flow"
                    ref={ref}>
                       
                            <Heading 
                                level={3} 
                                textAlign="start" 
                                color="brand"
                                margin={{top: "100px", bottom: "60px"}}>
                                    Individual Shoppers? Let's Go!
                            </Heading>
                      
                        
                        <IndiFlowRight
                            title = "Request Address"
                            detail = {requestAddress}
                            img = {process.env.PUBLIC_URL + "/assets/request.jpg"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/leftToright-connector.svg"}/>
                        </Box>
                        <IndiFlowLeft
                            title = "Select Nile-secure Merchant Near You"
                            detail = {selectMerchant}
                            img = {process.env.PUBLIC_URL + "/assets/select-merchant.jpg"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/rightToLeft-connector.svg"}/>
                        </Box>
                        <IndiFlowRight
                            title = "Confirm With Just $1"
                            detail = {oneDollar}
                            img = {process.env.PUBLIC_URL + "/assets/Confirm.jpg"}
                        />
                         <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/leftToright-connector.svg"}/>
                        </Box>
                        <IndiFlowLeft
                            title = "Alert For Package Delivery"
                            detail = {alertDelivery}
                            img = {process.env.PUBLIC_URL + "/assets/alert.jpg"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/rightToLeft-connector.svg"}/>
                        </Box>
                        <IndiFlowRight
                            title = "Time For Package Pickup!"
                            detail = {pickup}
                            img = {process.env.PUBLIC_URL + "/assets/pickup.jpg"}
                        />

                </Box>
                
                    <Box 
                    fill="horizontal"
                    pad={{left: "100px", right: "100px"}}
                    direction="row"
                    justify="between"
                    >
                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "No More Stolen Packages"
                            detail = {cardStolen}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/box-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/protect-icon.svg"}
                            />
                        </motion.div>

                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "Discounts from Your Favourite"
                            detail = {cardDiscount}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/lowprice-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/favcart-icon.svg"}
                            />
                        </motion.div>

                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "Support Local Business"
                            detail = {cardLocalBusiness}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/newstore-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/volunteer-icon.svg"}
                            />
                        </motion.div>


                       
                        
                    </Box>
               

                <Signup/>
            </Box>
            
        </Grommet>
    )
}

export default Individuals;