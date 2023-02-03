import { Box, Card, Heading, Image, Paragraph } from "grommet"

const IndividualCard = (props) => {
    return (
        <Card>
            <Box 
                width="400px"
                height="450px"
                justify="between"
                align="center"
                pad="large">
                <Heading level={3} textAlign="center">{props.title}</Heading>
                <Box 
                    direction="row" 
                    justify="center" 
                    fill="horizontal"
                    gap="40px">
                    <Box>
                        <Image 
                            src={props.iconLeft}
                            fit="cover"
                        />
                    </Box>
                    <Box>
                        <Image 
                            src={props.iconRight}
                            fit="cover"
                        />
                    </Box>
                </Box>
                <Paragraph textAlign="start">
                    {props.detail}
                </Paragraph>
            </Box>
        </Card>

    )
}

export default IndividualCard;