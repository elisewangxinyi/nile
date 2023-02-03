import { Box, Button, Grommet, Heading, Image, Paragraph } from "grommet";
import React from "react";
import IndiFlowLeft from "../Components/IndiFlowLeft";
import IndiFlowRight from "../Components/IndiFlowRight";
import IndividualCard from "../Components/IndividualCard";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";

import "./Individuals.css";

const listLocation = `It just takes 30 seconds to fill up your store profile and 
                      list your location on the Nile app. You can also decide 
                      your own package pickup hours & package content restrictions.`

const getNotified = `Nile alerts you when a package pick up order is placed at 
                    your store. You can view all the packages arriving at your 
                    store, as well as estimated delivery dates, at anytime in-app.`

const packageDelivered = `Package(s) arrive right to your front desk. All you 
                          have to do is indicate in-app that you have received 
                          the package and store it somewhere safe. We'll handle all the communication.`

const customerPickup = `We'll ping you when the package is here, either through 
                       the app or through a text message (your choice). You'll 
                       also get a QR code to use when you head over to pick up 
                       your package.`

const nileDiscount = `Simply swing by the shop and show the cashier your QR code to 
                collect your package(s). Spot anything interesting while you're 
                here? Pick it up at a discount (on us) and take it home with you.`

const cardFootTraffic = `Turn your store's quiet hours into an opportunity to 
                     attract more customers`

const cardAdvertisement = `Get noticed by e-commerce shoppers residing in your neighbourhood`

const cardCommunityConnection = `Develop a community of patrons that frequent 
                                your store and help bolster your customer base`



const merchantsTheme = {
global: {
    colors: {
        brand: '#3C64B1'
    },
}
};

const Merchants = () => {
    return (
        <Grommet full theme={merchantsTheme}>
            <Navbar/>
            <Box 
                full
                align="center"
                gap="180px"
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
                            <Heading level={1}>
                                Make connections and Get more foot traffic 
                                for Your Business!
                            </Heading>
                            <Paragraph>
                                Supercharge your customer acquisition with 
                                additional foot traffic from e-commerce shoppers 
                                picking up their packages at your store, at times 
                                convenient to you.<br/><br/>Gain visibility 
                                across your neighborhood and maximize the 
                                conversion rate of this additional foot traffic 
                                through out in-app incentive strategies.
                            </Paragraph>
                            <Button secondary label="See How it Works"></Button>
                            <Paragraph margin={{top: "50px"}}>
                                "Dolorem nihil pariatur laboriosam velit aliquid 
                                eveniet sit animi id. Nam est at et nesciunt 
                                perferendis autem neque eos. Odit distinctio ut 
                                est eos sint maxime."---Simone
                            </Paragraph>
                        </Box>
                </Box>
                <Box 
                    fill
                    align="center"
                    className="individuals-flow">
                        <Heading
                            level={3} 
                            textAlign="start" 
                            color="brand"
                            margin={{top: "0px", bottom: "60px"}}>
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
                        <IndividualCard
                        title = "More Foot Traffic"
                        detail = {cardFootTraffic}
                        iconLeft = {process.env.PUBLIC_URL + "/assets/people-icon.svg"}
                        iconRight = {process.env.PUBLIC_URL + "/assets/feet-icon.svg"}
                        />
                        <IndividualCard
                        title = "Advertise Your Business"
                        detail = {cardAdvertisement}
                        iconLeft = {process.env.PUBLIC_URL + "/assets/mic-icon.svg"}
                        iconRight = {process.env.PUBLIC_URL + "/assets/global-icon.svg"}
                        />
                        <IndividualCard
                        title = "Build Community Connections"
                        detail = {cardCommunityConnection}
                        iconLeft = {process.env.PUBLIC_URL + "/assets/organization-icon.svg"}
                        iconRight = {process.env.PUBLIC_URL + "/assets/connections-icon.svg"}
                        />
                </Box>
                <Signup/>
            </Box>
            
        </Grommet>
    )
}

export default Merchants;