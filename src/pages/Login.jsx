import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import CenteredTextBox from '../components/Textbox';
import Box from '../components/Box';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Flex 
            direction="column" // stacks items vertically
            align="center" // centers items horizontally
            justify="center" // centers items vertically
            height="100vh" 
            padding={4}
        >
            {/* ensures the buttons are arranged in a grid layout */}
            <Grid templateColumns="repeat(1, 1fr)" gap={4} width="100%" maxWidth="400px" justifyItems="center" > 
                <CenteredTextBox message={"Username"} />
                <CenteredTextBox message={"Password"} />
                <Link to={'/home'}>
                    <Box message={"Log in"} buttonColor={'#E9E9E9'}></Box>
                </Link>
                <Text>
                    Don't have an account?
                    <Link to={'/sign-in'}> Sign up</Link> {/* ensures the button links to the sign-in page */}
                </Text>
            </Grid>
        </Flex>
    );
}
