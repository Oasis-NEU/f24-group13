import React from 'react';
import { chakra, Input, Stack } from '@chakra-ui/react';
import {Box, AbsoluteCenter, useDisclosure} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Flex, Grid, Text } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';


export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        
        <div style = {{width: '100%', height: '100vh'}}>
            <div style={{ backgroundColor: '#E9EDC9', width: '100%', height: '10px', display: 'flex'}}>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
            </div>
            <div style={{ backgroundColor: '#E9EDC9', width: '100%', height: '25px', 
                display: 'flex', justifyContent: 'left',
                flexDirection: 'column'}}>
                    <Image
                        height="25px"
                        width = "90%"
                        src='test-images/Main Picture.png'
                    />
            </div>
            <div style={{ backgroundColor: '#E9EDC9', width: '100%', height: '500px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' ,
                flexDirection: 'column'}}>
                    <p style={{ color: 'white', fontSize: '60px' }}>Style Swap</p>
                    <p></p>
                    <p style={{ color: 'white', fontSize: '18px' }}>our slogan</p>
                    {/*Links to the sign in page  */}
                    <Link to={'/signin'}> <Text color = "white"> Sign up! </Text></Link> 
            </div>
            <div style={{ backgroundColor: 'white', width: '100%', height: '500px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'black' }}>Blurb about Closet Swap</p>
            </div>
            <div>
                    <stack>
                    <div style={{ backgroundColor: '#D4A373', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    <p style={{ color: 'white' }}>My name is Liz and I am a third year Computer Engineering and 
                        Comuter Science major. ahdusiufehwebfkj;wherihwekrndfjfopuwoiefhwfnwfnwfjwherfuiwyroqjlrnNR
                        EUIRHWeiurhBRKhrfiuhfenwfJNEFIWEUR8WYRWEBFSFN;efsh
                    </p>
                    </div>
                    <div style={{ backgroundColor: '#D4A373', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <p style={{ color: 'white' }}>My name is kyra and I am Liz's twin and I am a third year Computer Engineering and 
                        Comuter Science major. ahdusiufehwebfkj;wherihwekrndfjfopuwoiefhwfnwfnwfjwherfuiwyroqjlrnNR
                        EUIRHWeiurhBRKhrfiuhfenwfJNEFIWEUR8WYRWEBFSFN;efsh
                    </p>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    </div>
                    <div style={{ backgroundColor: '#D4A373', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    <p style={{ color: 'white' }}>My name is Liz and I am a third year Computer Engineering and 
                        Comuter Science major. ahdusiufehwebfkj;wherihwekrndfjfopuwoiefhwfnwfnwfjwherfuiwyroqjlrnNR
                        EUIRHWeiurhBRKhrfiuhfenwfJNEFIWEUR8WYRWEBFSFN;efsh
                    </p>
                    </div>
                    <div style={{ backgroundColor: '#D4A373', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <p style={{ color: 'white' }}>My name is kyra and I am Liz's twin and I am a third year Computer Engineering and 
                        Comuter Science major. ahdusiufehwebfkj;wherihwekrndfjfopuwoiefhwfnwfnwfjwherfuiwyroqjlrnNR
                        EUIRHWeiurhBRKhrfiuhfenwfJNEFIWEUR8WYRWEBFSFN;efsh
                    </p>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    </div>
                    </stack>

            </div>
        </div>
        

    );

}