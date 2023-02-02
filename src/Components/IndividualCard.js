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
                <Box dir="row">
                    <Box>
                        <Image/>
                    </Box>
                    <Box>
                        <Image/>
                    </Box>
                </Box>
                <Paragraph textAlign="center">
                    {props.detail}
                </Paragraph>
            </Box>
        </Card>

    )
}

export default IndividualCard;