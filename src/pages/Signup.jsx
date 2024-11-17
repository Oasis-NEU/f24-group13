import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, Input, Text, useDisclosure } from '@chakra-ui/react';
import { supabase, profiles, userposts } from '../database/db';
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const navigate = useNavigate();

    async function postData() {
        // user can't enter a blank form
        if (username == '' || email == '' || password == '' || phoneNum == '') {
            setErrorMsg("One or more fields are empty.");
            return;
        }
        
        // sanity check
        console.log('Attempting to post:', { username, password, email, phoneNum });

        const { data, error } = await supabase
            .from(profiles)
            .upsert({ username, password, email, phone_num: phoneNum })
            .select();
        if (error) {
            console.error('Post error:', error.message);

            // checks if a user alreaady exists in the system
            if (error.message.includes('duplicate key value') && error.message.includes('email')) {
                setErrorMsg("This email is already in use. Sign up with a different one.");
            } else if (error.message.includes('duplicate key value') && error.message.includes('username')) {
                setErrorMsg("This username is already in use. Sign up with a different one.");
            } else if (error.message.includes('duplicate key value') && error.message.includes('phone_num')) {
                setErrorMsg("This phone number is already in use. Sign up with a different one.");
            } else {
                setErrorMsg("An error occurred. Please try again");
            }
        } else {
            console.log('Signup successful! Post data response:', data);
            setErrorMsg("");
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
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='phone number'
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                />
                {errorMsg && (
                    <Text color="red.500" textAlign="center">
                        {errorMsg}
                    </Text>
                )}
                <Button onClick={postData}>sign up</Button>
                <Text textAlign="center"> {/* ensures text is centered */}
                    already have an account?
                    <Link to={'/login'}> log in</Link> {/* ensures the button links to the log-in page */}
                </Text>
            </Grid>
        </Flex>
    );
}