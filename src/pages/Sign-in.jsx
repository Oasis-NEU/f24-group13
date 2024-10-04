import React from 'react';
import { Input, Stack } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';

export default function Signin() {
    return (
        <div>
            <h1>Sign in page!</h1>
            <Stack spacing={3}>
                <Center bg='white' h='100px' color='black'>
                <Input usernameBox='medium size' size='md' />
                </Center>
                <Center bg='white' h='100px' color='black'>
                <Input passwordBox='medium size' size='md' />
                </Center>   
            </Stack>
        </div>
    );

}