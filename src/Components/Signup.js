import { Box, Button, Heading, Paragraph} from "grommet"
import TextField from '@mui/material/TextField';

const Signup = (props) => {
    return (
        <Box 
            width="100%"
            height="400px"
             direction="column" 
             align="center"
             pad={{top: "90px"}}
             background={{color: "#3C64B1", opacity: "0.1"}}>
            <Heading level="2">
                Sign Up Today!
            </Heading>
            <Paragraph color="#737b8d" fill margin={{top: "0px", bottom: "40px"}}>
                Get updates on our latest partnerships and member's discounts
            </Paragraph>
            <Box 
                direction="row" 
                width="medium" 
                align="center" 
                gap="medium"
                justify="between">
                {/* <TextInput 
                    className="email"
                    background="white"
                    placeholder="type here" 
                    // value={props.email}
                    onChange={(event) => props.getEmail(event.target.value)}
                /> */}
                <TextField label="Type here" variant="outlined"/>
                <Button 
                    primary 
                    color="brand"
                    label="Sign Me Up"
                    size="medium"/>
            </Box>
            
        </Box>
    )
};

export default Signup;