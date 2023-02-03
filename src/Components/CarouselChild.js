import { Box, Heading, Image, Paragraph } from "grommet"

const CarouselChild = () => {
    return (
        <Box 
        direction="row" 
        height="300px"
        align="center">
            <Box width="50%" height="100%">
                <Image
                    src={process.env.PUBLIC_URL + "/assets/listLocation.jpg"}
                    fit="contain"
                    />
            </Box>
            
            <Box width="50%" height="100%" justify="center">
                <Heading level={4}>this is the tile</Heading>
                <Paragraph>Learn more about our research here</Paragraph>
            </Box>
        </Box>
    )
}

export default CarouselChild;