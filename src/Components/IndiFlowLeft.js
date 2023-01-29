import React from "react";
import {Box, Heading, Image, Paragraph} from 'grommet';

import "./IndiFlowRight.css";

const IndiFlowLeft = (props) => {
    return (
        <Box 
            width="100%"
            direction="row"
            justify="start"
            align="center"
            gap="300px"
            pad={{top: "50px", left: "100px", right: "100px"}}>
                <Box width="600px">
                    <Image src={props.img}/>
                </Box>
                <Box align="center" width="650px" className="individual-flow">
                    <Heading level="3" textAlign="center" margin={{top: "0px", bottom: "60px"}}>
                        {props.title}
                    </Heading>
                    <Paragraph size="medium" color='#737b8d' margin={{bottom: "60px"}}>
                        {props.detail}
                    </Paragraph>
                </Box>
        </Box>
    )
};

export default IndiFlowLeft;