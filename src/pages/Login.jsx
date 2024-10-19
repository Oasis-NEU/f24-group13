import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import CenteredTextBox from '../components/Textbox';
import Box from '../components/Box';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Flex 
            direction="column" // Stack items vertically
            align="center" // Center horizontally
            justify="center" // Center vertically
            height="100vh" // Take full viewport height
            padding={4}
        >
            <Grid templateColumns="repeat(1, 1fr)" gap={4} width="100%" maxWidth="400px"> 
                <CenteredTextBox message={"Username"} />
                <CenteredTextBox message={"Password"} />
                <Link to={'/home'}>
                    <Box message={"Log in"} buttonColor={'#E9E9E9'}></Box>
                </Link>
                <Text>
                    Don't have an account?
                    <Link to={'/sign-in'}> Sign up</Link>
                </Text>
            </Grid>
        </Flex>
    );
}
