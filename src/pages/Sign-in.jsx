import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Grid, Text } from '@chakra-ui/react';
import CenteredTextBox from '../components/Textbox';
import Box from '../components/Box';

export default function Signin() {
    return (
        // items in container are stacked vertically, 
        <Flex direction="column" align="center" justify="center" height="100vh" padding={4}>
            <Grid 
                templateColumns="repeat(1, 1fr)" // creating 1 column, column will take up full available width 
                gap={4} // space between grid items vertically and horizontally
                width="100%" // sets the width of the grid container to 100% of the flex container's width
                maxWidth="400px" // limits how wide the grid can become
                justifyItems="center" // centers the content of each grid cell horizontally
            > 
                <CenteredTextBox message={"Username"} />
                <CenteredTextBox message={"Password"} />
                <CenteredTextBox message={"Phone number"} />
                <Link to={'/home'}>
                    <Box message={"Sign up"} buttonColor={'#E9E9E9'}></Box>
                </Link>
                <Text textAlign="center"> {/* ensures text is centered */}
                    Already have an account?
                    <Link to={'/log-in'}> Log in</Link> {/* ensures the button links to the log-in page */}
                </Text>
            </Grid>
        </Flex>
    );
}
