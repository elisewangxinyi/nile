import { Box, Card, Heading, Image, Paragraph } from "grommet"

const Membercard = (props) => {
    return (
        <Card>
            <Box 
            width="250px" 
            height="300px" 
            align="center"
            justify="start"
            gap="10px">
                <Box 
                className="member-profile"
                width="250px"
                height="250px">
                    <Image src={props.img} fit="cover"/>
                </Box>
                <Box 
                pad={{left: "medium", right: "medium"}} 
                gap="10px"
                align="center">
                    <Heading level={4} margin="none">
                        {props.name}
                    </Heading>
                    <Paragraph margin="none">
                        {props.description}
                    </Paragraph>
                </Box>
                
            </Box>
        </Card>
    )
}

export default Membercard;