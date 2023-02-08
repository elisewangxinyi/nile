import React, {useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Heading, Image, Paragraph} from 'grommet';
import { motion, useAnimation, useInView } from 'framer-motion';


import "./Benefits.css";

const variant = {
    visible: { 
        opacity: 1, 
        y: 0, 
        transition:{duration: 0.8}
    },
    hidden: { 
        opacity: 0, 
        y: 80 
    }
}

const BenefitLeft = (props) => {
    const control = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    useEffect(() => {
        if (isInView) {
            console.log("im in view")
            control.start('visible')
        }
    })

    return (
        <motion.div
        ref={ref}
        initial='hidden'
        animate={control}
        variants={variant}
        className="benefit">
            {/* <Box height="100vh" direction="row" > */}
                <Image src={props.img}/>
                <Box align="start">
                    <Heading level="2">
                        {props.title}
                    </Heading>
                    <Paragraph color='#737b8d' margin={{bottom: "60px"}}>
                        {props.detail}
                    </Paragraph>
                    <Link to={`/${props.type}`}>
                        <Button primary label={props.btnText}/>
                    </Link>
                </Box>
            {/* </Box> */}
        </motion.div>
        
    )
};

export default BenefitLeft;