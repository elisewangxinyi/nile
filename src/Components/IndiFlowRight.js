import React from "react";
import {Box, Heading, Image, Paragraph} from 'grommet';

import "./IndiFlowRight.css";

const IndiFlowRight = (props) => {
    return (
        <Box 
            width="100%"
            direction="row"
            justify="start"
            gap="300px"
            pad={{top: "50px", left: "100px", right: "100px"}}>
                <Box align="center" width="600px" className="individual-flow">
                    <Heading level="3" textAlign="center" margin={{top: "0px"}}>
                        {props.title}
                    </Heading>
                    <Paragraph size="medium" color='#737b8d' margin={{bottom: "60px"}}>
                        {props.detail}
                    </Paragraph>
                </Box>
                <Box width="300px">
                    <Image src={props.img}/>
                </Box>
        </Box>
    )
};

export default IndiFlowRight;