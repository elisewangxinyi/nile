import { Box, Carousel, Grommet, Heading, Paragraph } from "grommet"
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import CarouselChild from "../Components/CarouselChild";
import Membercard from "../Components/Membercard";
import Navbar from "../Components/Navbar"
import Signup from "../Components/Signup";

import "./About.css";

const surveyImage = process.env.PUBLIC_URL + "/assets/about-survey.jpg"
const surveyText = `Survey Collection and Poster. Gauge current consumer 
                    landscape, demand & profile at CMU`
const piracyImage = process.env.PUBLIC_URL + "/assets/about-piracy.jpg"
const piracyText = `Porch Piracy Research`
const competitorImage = process.env.PUBLIC_URL + "/assets/about-competitor.jpg"
const competitorText = `Competitor Analysis: Amazon, USPS/FedEx/other postal 
                        services, direct brand shipping`
//Carousel content class
class CarouselSlide {
    constructor(img, description){
        this.img = img;
        this.description = description;
    }
}

const carouselMaterial = [
    new CarouselSlide(surveyImage, surveyText),
    new CarouselSlide(piracyImage, piracyText),
    new CarouselSlide(competitorImage, competitorText),

]

//Grommet theme
const aboutTheme = {
    global: {
        colors: {
            brand: '#3C64B1'
        },
    }
};

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

const About = () => {
    const control = useAnimation();
    const refStory = useRef(null);
    const isStoryInView = useInView(refStory, { once: true});

    useEffect(() => {
        if (isStoryInView) {
            control.start('visible')
        }
    })

    return (
        <Grommet full theme={aboutTheme}>
            <Navbar/>
            <Box
            full
            align="center"
            gap="100px"
            >
                <Box
                fill="horizontal"
                height="100vh"
                background="url(/assets/about-titlebg.jpg)"
                justify="center"
                align="center"
                >
                    <motion.div
                    initial={{opacity: 0, y: 80}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Box width="65%">
                            <Heading level={1} margin="none">
                                Secure Your Package Through Supporting Your 
                                Favorite Shops with Nile.
                            </Heading>
                        </Box>
                    </motion.div>
                    
                </Box>

                <motion.div
                ref={refStory}
                initial='hidden'
                animate={control}
                variants={variant}
                >
                    <Box 
                    fill="horizontal"
                    pad={{left: "15%", right: "15%"}}
                    gap="20px"
                    className="story">
                        <Box>
                            <Heading level={3}>
                                Our Story
                            </Heading>
                            <Paragraph fill margin={{bottom: "0px"}}>
                                When we started, <strong>our mission was simple</strong>: put an end to 
                                porch piracy across North America, while supporting 
                                local businesses in an increasingly e-commerce-centric world.
                            </Paragraph>
                            <Paragraph fill>
                                Today, we are building the medium that <strong>connects</strong> the 
                                online shopping sphere with the brick-and-mortar one. 
                                We pick up where e-commerce leaves off and help <strong>plug the 
                                gaps</strong>: whether in package theft, reverse logistics, or 
                                BOTI (Buy Online, Try In-person)
                            </Paragraph>
                            <Paragraph color="brand" fill>
                                <strong>
                                    We envision a world where the online shopping 
                                    experience blends in seamlessly with the in-person world???
                                </strong>
                            </Paragraph>
                            <Paragraph fill>
                                See a beautiful dress online but don't know your size? 
                                No problem, <strong>try it out</strong> in three sizes at any store near 
                                home tomorrow. And just take home the size that fits. 
                                Bought a new phone online, but don't quite like 
                                how it's too big for your pockets? No 
                                worries, <strong>return it at your favorite 
                                local coffee shop</strong>.
                            </Paragraph>
                            
                        </Box>

                        <Box
                        className="members"
                        direction="row"
                        align="center"
                        justify="center"
                        wrap
                        >
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/anqi.JPG"}
                            name = "Anqi Chen"
                            description = "input title here"
                            />
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/BrianChien.jpg"}
                            name = "Brian Chien"
                            description = "Frontend Developer"
                            />
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/elise.jpg"}
                            name = "Elise Wang"
                            description = "Web Designer/Developer"
                            />
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/martin.tiff"}
                            name = "Martin Ackermann"
                            description = "CTO"
                            />
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/tejas.png"}
                            name = "Tejas Venkatesh"
                            description = "CEO"
                            />
                            <Membercard
                            img = {process.env.PUBLIC_URL + "/assets/tracy.png"}
                            name = "Tracy Meng"
                            description = "UI/UX Designer"
                            />
                        </Box> 
                    </Box>
                </motion.div>
                
               
                <Box 
                fill="horizontal"
                pad={{left: "15%", right: "15%"}}
                gap="20px"
                className="methodology"
                >
                    <Box>
                        <Heading level={3}>
                            Our Methodology
                        </Heading>
                        <Paragraph fill margin={{bottom: "0px"}}>
                            Et has minim elitr intellegat. Mea aeterno eleifend 
                            antiopam ad, nam no suscipit quaerendum.
                        </Paragraph>
                        <Paragraph fill>
                            Voluptatem nihil cumque id similique tempora ut. 
                            Neque asperiores aut. Et dolorem animi est officia 
                            placeat impedit occaecati quaerat. Accusantium 
                            necessitatibus veritatis cum voluptas rem. 
                            Aspernatur autem vel in placeat eum dolores aperiam. 
                            Fugit aspernatur sit eos enim. Voluptatem nihil cumque 
                            id similique tempora ut. Neque asperiores aut. 
                        </Paragraph>
                    </Box>

                    <Box>
                        <Carousel controls="arrows" wrap>
                            {carouselMaterial.map((slide, idx) => {
                                return <CarouselChild
                                        key = {idx}
                                        img = {slide.img}
                                        info = {slide.description}
                                        />

                            })}
                        </Carousel>
                    </Box>
                </Box>
                <Signup/>
            </Box>
        </Grommet>
    )
}

export default About;