import React from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Heading, Image, Paragraph} from 'grommet';

import "./Benefits.css";

const BenefitRight = (props) => {
    return (
        <Box height="100vh" direction="row" className="benefit">
            <Box align="start">
                <Heading level="2">
                    {props.title}
                </Heading>
                <Paragraph size="medium" color='#737b8d' margin={{bottom: "60px"}}>
                    {props.detail}
                </Paragraph>
                <Button primary label={props.type}/>
            </Box>
            <Image src={props.img}/>
        </Box>
    )
};

export default BenefitRight;