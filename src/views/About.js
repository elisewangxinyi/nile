import { Box, Carousel, Grommet, Heading, Paragraph } from "grommet"
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

const About = () => {
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
                    <Box width="65%">
                        <Heading level={1} margin="none">
                            Secure Your Package Through Supporting Your 
                            Favorite Shops with Nile.
                        </Heading>
                    </Box>
                </Box>

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
                            When we started, our mission was simple: put an end to 
                            porch piracy across North America, while supporting 
                            local businesses in an increasingly e-commerce-centric world.
                        </Paragraph>
                        <Paragraph fill>
                            Today, we are building the medium that connects the 
                            online shopping sphere with the brick-and-mortar one. 
                            We pick up where e-commerce leaves off and help plug the 
                            gaps: whether in package theft, reverse logistics, or 
                            BOTI (Buy Online, Try In-person)
                        </Paragraph>
                    </Box>

                    <Box
                    className="members"
                    direction="row"
                    align="center"
                    justify="between"
                    wrap
                    >
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/memberProfile.png"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/listLocation.jpg"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                        <Membercard
                        img = {process.env.PUBLIC_URL + "/assets/listLocation.jpg"}
                        name = "Simone Cumberbatch"
                        description = "Full Stack Developer"
                        />
                    </Box> 
                </Box>

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