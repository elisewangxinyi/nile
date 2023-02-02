import { Box, Button, Grommet, Heading, Paragraph } from "grommet";
import React from "react";
import IndiFlowLeft from "../Components/IndiFlowLeft";
import IndiFlowRight from "../Components/IndiFlowRight";
import IndividualCard from "../Components/IndividualCard";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";

import "./Individuals.css";

const requestAddress = `Voluptatem nihil cumque id similique tempora
                        ut Neque asperiores aut. Et dolorem animi est 
                        officia placeat impedit occaecati quaerat. 
                        Accusantium necessitatibus veritatis cum voluptas rem.`

const selectMerchant = `We'll show you the Nile-Secure Merchants nearby, 
                        as well as any juicy discounts they might have in-store. 
                        Just pick the store most convenient to you`

const oneDollar = `Confirm your package delivery with the store for just $1. 
                   You'll be asked to enter package size(s) and tracking numbers, 
                   if you know them.`

const alertDelivery = `We'll ping you when the package is here, either through 
                       the app or through a text message (your choice). You'll 
                       also get a QR code to use when you head over to pick up 
                       your package.`

const pickup = `Simply swing by the shop and show the cashier your QR code to 
                collect your package(s). Spot anything interesting while you're 
                here? Pick it up at a discount (on us) and take it home with you.`

const cardStolen = `Our verified partners always have an eye on your package, 
                    so you have one less thing to worry about.`

const cardDiscount = `Get discounts in-store on anything you buy when you 
                      pick-up your packages... just to brighten up your day a 
                      little bit more.`

const cardLocalBusiness = `Empower local businesses to plug the leak in the 
                           e-commerce supply chain, while spreading awareness 
                           on their company's offerings`
const Individuals = () => {
    return (
        <Grommet full>
            <Navbar/>
            <Box 
                full
                align="center"
                gap="180px"
            >
                <Box 
                    fill="horizontal"
                    height="100vh" 
                    background="url(/assets/individuals-titlebg.jpg)"
                    direction="column"
                    justify="center"
                    pad={{top: "xlarge", left: "200px"}}
                    >
                        <Box width="large" align="start" className="individual-intro">
                            <Heading level={1}>
                                Safe, Convenient and Easy Way to Secure Packages!
                            </Heading>
                            <Paragraph>
                                Have you packages delivered to a Nile-secure merchant 
                                of your choice in your neighborhood, if you aren't 
                                home to receive it. <br/><br/>Well keep it safe until you 
                                swing by to pick it up!
                            </Paragraph>
                            <Button secondary label="See How it Works"></Button>
                            <Paragraph margin={{top: "50px"}}>
                                "Dolorem nihil pariatur laboriosam velit aliquid 
                                eveniet sit animi id. Nam est at et nesciunt 
                                perferendis autem neque eos. Odit distinctio ut 
                                est eos sint maxime."---John
                            </Paragraph>
                        </Box>
                </Box>
                <Box 
                    fill
                    align="center"
                    className="individuals-flow">
                        <Heading 
                            level={3} 
                            textAlign="center" 
                            margin={{top: "0px", bottom: "60px"}}>
                                HOW IT WORKS:
                        </Heading>
                        <IndiFlowRight
                            title = "REQUEST ADDRESS"
                            detail = {requestAddress}
                            img = {process.env.PUBLIC_URL + "/assets/request.jpg"}
                        />
                        <IndiFlowLeft
                            title = "SELECT NILE-SECURE MERCHANT NEAR YOU"
                            detail = {selectMerchant}
                            img = {process.env.PUBLIC_URL + "/assets/select-merchant.jpg"}
                        />
                        <IndiFlowRight
                            title = "CONFIRM WITH JUST $1"
                            detail = {oneDollar}
                            img = {process.env.PUBLIC_URL + "/assets/Confirm.jpg"}
                        />
                        <IndiFlowLeft
                            title = "ALERT FOR PACKAGE DELIVERY"
                            detail = {alertDelivery}
                            img = {process.env.PUBLIC_URL + "/assets/alert.jpg"}
                        />
                        <IndiFlowRight
                            title = "5.TIME FOR PACKAGE PICKUP!"
                            detail = {pickup}
                            img = {process.env.PUBLIC_URL + "/assets/pickup.jpg"}
                        />

                </Box>
                <Box 
                    className="individual-cards"
                    fill="horizontal"
                    pad={{left: "100px", right: "100px"}}
                    direction="row"
                    justify="between">
                        <IndividualCard
                        title = "No More Stolen Packages"
                        detail = {cardStolen}
                        />
                        <IndividualCard
                        title = "Discounts from Your Favourite"
                        detail = {cardDiscount}
                        />
                        <IndividualCard
                        title = "Support Local Business"
                        detail = {cardLocalBusiness}
                        />
                </Box>
                <Signup/>
            </Box>
            
        </Grommet>
    )
}

export default Individuals;