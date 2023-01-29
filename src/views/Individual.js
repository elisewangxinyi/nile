import { Box, Button, Grommet, Heading, Paragraph } from "grommet";
import React from "react";
import IndiFlowLeft from "../Components/IndiFlowLeft";
import IndiFlowRight from "../Components/IndiFlowRight";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";

import "./Individuals.css";

const test = `Voluptatem nihil cumque id similique tempora
ut Neque asperiores aut. Et dolorem animi est 
officia placeat impedit occaecati quaerat. 
Accusantium necessitatibus veritatis cum voluptas 
rem. Aspernatur autem vel in placeat eum dolores 
aperiam. Fugit aspernatur sit eos enim.
Amet quia culpa voluptatum laboriosam. 
Qui omnis soluta asperiores omnis omnis perferendis. 
Ea laudantium minus nemo. Magnam ipsam atque 
quod omnis et velit vero. Sunt voluptates ipsa 
deleniti ea saepe. Consequatur nam consequatur 
tenetur ab incidunt iste aut iste sed. 
Sed nesciunt est dolores natus recusandae 
minima sunt. Enim repellat et est consequatur 
voluptatibus. Rem non fugiat ipsam incidunt 
illum cumque ipsam esse. Qui dolorem accusantium 
est corporis soluta veritatis. Corrupti 
consequatur et mollitia reiciendis voluptatem.`

const selectMerchant = `We'll show you the Nile-Secure Merchants nearby, 
                        as well as any juicy discounts they might have in-store. 
                        Just pick the store most convenient to you`

const Individuals = () => {
    return (
        <Grommet full>
            <Navbar/>
            <Box 
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
                        <Button secondary label="text"></Button>
                        <Paragraph margin={{top: "50px"}}>
                            "Dolorem nihil pariatur laboriosam velit aliquid 
                            eveniet sit animi id. Nam est at et nesciunt 
                            perferendis autem neque eos. Odit distinctio ut 
                            est eos sint maxime."---John
                        </Paragraph>
                    </Box>
            </Box>
            <Box 
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
                        detail = {test}
                        img = {process.env.PUBLIC_URL + "/assets/request.jpg"}
                    />
                    <IndiFlowLeft
                        title = "SELECT NILE-SECURE MERCHANT NEAR YOU"
                        detail = {selectMerchant}
                        img = {process.env.PUBLIC_URL + "/assets/select-merchant.jpg"}
                    />
                    <IndiFlowRight
                        title = "REQUEST ADDRESS"
                        detail = {test}
                        img = {process.env.PUBLIC_URL + "/assets/request.jpg"}
                    />
                    <IndiFlowLeft
                        title = "SELECT NILE-SECURE MERCHANT NEAR YOU"
                        detail = {selectMerchant}
                        img = {process.env.PUBLIC_URL + "/assets/select-merchant.jpg"}
                    />
                    <IndiFlowRight
                        title = "REQUEST ADDRESS"
                        detail = {test}
                        img = {process.env.PUBLIC_URL + "/assets/request.jpg"}
                    />
                    <Box className="individual-cards">
                        there will be benefit cards
                    </Box>
                    <Signup/>
            </Box>
        </Grommet>
    )
}

export default Individuals;