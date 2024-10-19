import React from 'react';
import { Link } from 'react-router-dom'
import { Flex, Grid, Text } from '@chakra-ui/react';
import CenteredTextBox from '../components/Textbox';
import Box from '../components/Box';

export default function Signin() {
    return (
        <Flex direction="column" align="center" justify="center" height="100vh" padding={4}>
            <Grid templateColumns="repeat(1, 1fr)" gap={4} width="100%" maxWidth="400px"> 
                <CenteredTextBox message={"Username"} />
                <CenteredTextBox message={"Password"} />
                <CenteredTextBox message={"Phone Number"} />
                <Link to={'/home'}>
                    <Box message={"Sign up"} buttonColor={'#E9E9E9'}></Box>
                </Link>
                <Text>
                    Already have an account?
                    <Link to={'/log-in'}> Log in</Link>
                </Text>
            </Grid>
        </Flex>
    );
}
