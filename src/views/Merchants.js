import { Box, Button, Grommet, Heading, Image, Paragraph } from "grommet";
import React, {useEffect, useRef} from "react";
import { motion, useAnimation, useInView} from 'framer-motion';

import IndiFlowLeft from "../Components/IndiFlowLeft";
import IndiFlowRight from "../Components/IndiFlowRight";
import BenefitCard from "../Components/BenefitCard";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";

import "./flow.css";

const listLocation = <Paragraph color='#737b8d' margin='none'>
                    It just takes <strong>30 seconds</strong> to fill up your store profile and 
                    list your location on the Nile app. <br/><br/>You can also decide 
                    your own package pickup hours & package content restrictions.
                    </Paragraph>

const getNotified = <Paragraph color='#737b8d' margin='none'>
                    Nile <strong>alerts</strong> you when a package pick up order 
                    is placed at your store. You can <strong>view</strong> all 
                    the packages arriving at your store, as well as estimated 
                    delivery dates, at anytime in-app.
                    </Paragraph>

const packageDelivered = <Paragraph color='#737b8d' margin='none'>
                        Package(s) arrive right to your <strong>front desk</strong>. 
                        All you have to do is indicate in-app that you have 
                        received the package and store it somewhere safe. 
                        We'll handle all the communication.
                        </Paragraph>

const customerPickup = <Paragraph color='#737b8d' margin='none'>
                        You package's customer is notified as soon as your 
                        receive the package and comes to pick it up 
                        within <strong>3 business days</strong>.<br/><br/>When 
                        they're here, simply scan the <strong>QR code</strong> that 
                        the customer shows you through the Nile app to verify 
                        identity and hand him his packages. Easy peasy!
                        </Paragraph>

const nileDiscount = <Paragraph color='#737b8d' margin='none'>
                    Incentivize customers to spend in-store when they're 
                    collecting packages.<br/><br/>On the Nile app, you'll have the 
                    ability to <strong>add incentives</strong> to your store 
                    screen. This results in more customers choosing your store 
                    as their pickup location and spending more in-store when 
                    they arrive for package pickup.
                    </Paragraph>

const cardFootTraffic = `Turn your store's quiet hours into an opportunity to 
                     attract more customers`

const cardAdvertisement = `Get noticed by e-commerce shoppers residing in your neighbourhood`

const cardCommunityConnection = `Develop a community of patrons that frequent 
                                your store and help bolster your customer base`


// Grommet Theme
const merchantsTheme = {
    global: {
        colors: {
            brand: '#3C64B1'
        },
    }
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



const Merchants = () => {
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
        <Grommet full theme={merchantsTheme}>
            <Navbar/>
            <Box 
                full
                align="center"
                gap="80px"
            >
                <Box 
                    fill="horizontal"
                    height="100vh" 
                    background="url(/assets/merchants-titlebg.jpg)"
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
                                    Make connections and Get more foot traffic 
                                    for Your Business!
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
                                    Supercharge your customer acquisition with 
                                    additional foot traffic from e-commerce shoppers 
                                    picking up their packages at your store, at times 
                                    convenient to you.<br/><br/>Gain visibility 
                                    across your neighborhood and maximize the 
                                    conversion rate of this additional foot traffic 
                                    through out in-app incentive strategies.
                                </Paragraph>
                                <Button 
                                    secondary 
                                    label="See How it Works" 
                                    onClick={handleClick}
                                />
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
                                    est eos sint maxime."---Simone
                                </Paragraph>
                            </motion.div>

                            
                        </Box>
                </Box>
                <Box 
                    fill
                    align="center"
                    className="merchants-flow"
                    ref={ref}>
                        <Heading
                            level={3} 
                            textAlign="start" 
                            color="brand"
                            margin={{top: "100px", bottom: "40px"}}>
                                Business Owners? We Gotchu!
                        </Heading>
                        <IndiFlowRight
                            title = "List My Location"
                            detail = {listLocation}
                            img = {process.env.PUBLIC_URL + "/assets/listLocation.jpg"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/leftToright-connector.svg"}/>
                        </Box>
                        <IndiFlowLeft
                            title = "Get Notified"
                            detail = {getNotified}
                            img = {process.env.PUBLIC_URL + "/assets/notify.jpg"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/rightToLeft-connector.svg"}/>
                        </Box>
                        <IndiFlowRight
                            title = "Package Delivered"
                            detail = {packageDelivered}
                            img = {process.env.PUBLIC_URL + "/assets/packageDelivered.jpg"}
                        />
                         <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/leftToright-connector.svg"}/>
                        </Box>
                        <IndiFlowLeft
                            title = "Customer Pickup"
                            detail = {customerPickup}
                            img = {process.env.PUBLIC_URL + "/assets/customerPickup.png"}
                        />
                        <Box>
                            <Image 
                            src={process.env.PUBLIC_URL + "/assets/rightToLeft-connector.svg"}/>
                        </Box>
                        <IndiFlowRight
                            title = "Offer Nile Membership Discounts"
                            detail = {nileDiscount}
                            img = {process.env.PUBLIC_URL + "/assets/nileDiscount.jpg"}
                        />

                </Box>
                <Box 
                    fill="horizontal"
                    pad={{left: "100px", right: "100px"}}
                    direction="row"
                    justify="between">
                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "More Foot Traffic"
                            detail = {cardFootTraffic}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/people-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/feet-icon.svg"}
                            />
                        </motion.div>

                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "Advertise Your Business"
                            detail = {cardAdvertisement}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/mic-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/global-icon.svg"}
                            />
                        </motion.div>

                        <motion.div
                        variants={variant}  
                        ref = {refCard}
                        initial='hidden'
                        animate={control}
                        >
                            <BenefitCard
                            title = "Build Community Connections"
                            detail = {cardCommunityConnection}
                            iconLeft = {process.env.PUBLIC_URL + "/assets/organization-icon.svg"}
                            iconRight = {process.env.PUBLIC_URL + "/assets/connections-icon.svg"}
                            />
                        </motion.div>

                </Box>
                <Signup/>
            </Box>
            
        </Grommet>
    )
}

export default Merchants;