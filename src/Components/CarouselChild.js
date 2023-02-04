import { Box, Heading, Image, Paragraph } from "grommet"

const CarouselChild = (props) => {
    return (
        <Box 
        direction="row" 
        height="300px"
        align="center"
        pad="medium"
        justify="center"
        gap="20px">
            <Box width="50%" height="100%" className="carousel-img">
                <Image
                    src={props.img}
                    fit="contain"
                    />
            </Box>
            
            <Box height="100%" justify="center" className="carousel-text">
                <Heading level={4}>{props.info}</Heading>
                <Paragraph color="#737B7D">Learn more about our research here</Paragraph>
            </Box>
        </Box>
    )
}

export default CarouselChild;