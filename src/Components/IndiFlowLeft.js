import React from "react";
import {Box, Heading, Image, Paragraph} from 'grommet';

import "./IndiFlowRight.css";

const IndiFlowLeft = (props) => {
    return (
        <Box 
            width="100%"
            direction="row"
            justify="center"
            align="center"
            gap="200px"
            pad={{left: "100px", right: "100px"}}>
                <Box className="individual-img">
                    <Image src={props.img} fit="contain"/>
                </Box>
                <Box 
                    align="start" 
                    width="600px" 
                    gap="20px"
                    className="individual-flow">
                        <Heading level="1" textAlign="start" margin="none">
                            {props.title}
                        </Heading>
                        <Paragraph size="medium" color='#737b8d' margin="none">
                            {props.detail}
                        </Paragraph>
                </Box>
        </Box>
    )
};

export default IndiFlowLeft;