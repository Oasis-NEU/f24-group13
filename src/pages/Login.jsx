import React, { useState } from 'react';
import { Flex, Grid, Text, Button, Input, useDisclosure, background, textDecoration } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, profiles, userposts } from '../database/db';
import backgroundImage from "../../test-images/gradient_bkgd.png";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
    };

    const inputBoxStyle = {
        borderRadius: "25px",
        background: "#FEFAE0",
        padding: "20px",
    };

    async function validateData() {
        if (username == '' || password == '') {
            setErrorMsg("one or more fields are empty.");
            return;
        }

        const { data, error } = await supabase
            .from(profiles)
            .select('username, password')
            .eq('username', username);

        if (error) {
            console.error('fetch error:', error.message);
            setErrorMsg("an error occurred. please try again.");
        } else if (data.length == 0) {
            console.log("no user found w this username");
            setErrorMsg("incorrect username or password.");
        } else {
            const user = data[0];
            
            if (user.password === password) {
                console.log("successful login bbg");
                setErrorMsg("");
                navigate('/home');
            } else {
                console.log("wrong pass");
                setErrorMsg("incorrect username or password.");
            }
        }
    } 

    return (
        <Flex direction="column" align="center" justify="center" height="100vh" padding={4} style={backgroundStyle}>
            <Grid 
                templateColumns="repeat(1, 1fr)" // creating 1 column, column will take up full available width 
                gap={4} // space between grid items vertically and horizontally
                width="100%" // sets the width of the grid container to 100% of the flex container's width
                maxWidth="400px" // limits how wide the grid can become
                justifyItems="center" // centers the content of each grid cell horizontally
                style={inputBoxStyle}
            >
                <img src='../../test-images/logo.svg'/>
                <Input
                    placeholder='username'
                    _placeholder={{ color: "#FEFAE0" }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    focusBorderColor="#D4A373"
                    backgroundColor= "rgba(99, 116, 79, 0.7)"
                    color= "#FEFAE0"
                />
                <Input
                    placeholder='password'
                    _placeholder={{ color: "#FEFAE0" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    focusBorderColor="#D4A373"
                    backgroundColor= "rgba(99, 116, 79, 0.7)"
                    color= "#FEFAE0"
                />
                {errorMsg && (
                    <Text color="red.500" textAlign="center">
                        {errorMsg}
                    </Text>
                )}
                <Button onClick={validateData} backgroundColor="#63744F" color="#FEFAE0">log in</Button>
                <Text textAlign="center"> {/* ensures text is centered */}
                    don't have an account?
                    <Link to={'/signup'}> sign up</Link> {/* ensures the button links to the log-in page */}
                </Text>
            </Grid>
        </Flex>
    );
}
