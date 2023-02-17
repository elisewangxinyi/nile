import React, {useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import {Box, Button, Heading, Image, Paragraph} from 'grommet';
import { motion, useAnimation, useInView } from 'framer-motion';


import "./Benefits.css";

// for scroll to appear animation
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

const BenefitRight = (props) => {
    const control = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    useEffect(() => {
        if (isInView) {
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
                <Box align="start">
                    <Heading level="2">
                        {props.title}
                    </Heading>
                    <Box size="medium" margin={{bottom: "60px"}}>
                        {props.detail}
                    </Box>
                    <Link to={`/${props.type}`}>
                        <Button primary label={props.btnText}/>
                    </Link>
                </Box>
                <Image src={props.img}/>
        </motion.div>
        
    )
};

export default BenefitRight;