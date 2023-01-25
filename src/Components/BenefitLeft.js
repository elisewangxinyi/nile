import React from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Heading, Image, Paragraph} from 'grommet';

import "./Benefits.css";

const BenefitLeft = (props) => {
    return (
        <Box height="100vh" direction="row" className="benefit">
            <Image src={props.img}/>
            <Box align="start">
                <Heading level="2">
                    {props.title}
                </Heading>
                <Paragraph color='#737b8d' margin={{bottom: "60px"}}>
                    {props.detail}
                </Paragraph>
                <Button primary label={props.type}/>
            </Box>
        </Box>
    )
};

export default BenefitLeft;