import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, Input, Text } from '@chakra-ui/react';
import { supabase, profiles, userposts } from '../database/db';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    
    const navigate = useNavigate();

    async function postData() {
        // TODO: make sure user cant enter in a blank form
        console.log('Attempting to post:', { username, password, email, phoneNum });
        const { data, error } = await supabase
            .from(profiles)
            .upsert({ username, password, email, phone_num: phoneNum })
            .select();
        if (error) {
            console.error('Post error:', error.message);
        } else {
            console.log('Signup successful! Post data response:', data);
            navigate('/home');
        }
    }    

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
                <Input
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Phone number'
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                />
                <Button onClick={postData}>Sign up</Button>
                <Text textAlign="center"> {/* ensures text is centered */}
                    Already have an account?
                    <Link to={'/login'}> Log in</Link> {/* ensures the button links to the log-in page */}
                </Text>
            </Grid>
        </Flex>
    );
}