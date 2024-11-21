import React from 'react';
import { chakra, Input, Stack } from '@chakra-ui/react';
import {Box, AbsoluteCenter, useDisclosure} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Flex, Grid, Text } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import './styles.css'; // path to get Akaya Telivigala font 


export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()    
    
    return (
        
        <div style = {{width: '100%', height: '100vh'}}>
            <div style={{ backgroundColor: '#E9EDC9', width: '100%', height: '10px', display: 'flex'}}>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                </div>
                <stack>
            <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '1px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' ,
                flexDirection: 'column'}}>
                    <Image
                        height="800px"
                        src='test-images/vector.png'
                    />
                    {/*
                    Potential box code to overlay multiple images:

                    <Box position="relative" display="inline-block">
                    
                    <Image
                        src='test-images/Front page bottom blob.png'
                        alt="First image" 
                        width="400px" 
                        height="auto"
                        borderRadius="md"
                    />
                    
                    <Image
                        src='test-images/vector.png'
                        alt="Overlay image" 
                        position="absolute" 
                        top="0" 
                        left="0"
                        width="100%"  // You can adjust this based on your need
                        height="00%" // You can adjust this based on your need
                        borderRadius="md"
                    />
                    </Box>
                    */}
                    </div>
            <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '500px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' ,
                flexDirection: 'column'}}>
                    <p style={{ color: '#606C38', fontSize: '60px', marginRight: '200px' }}>
                        <h1 className="akaya-telivigala-regular">Style</h1></p>
                    <p style={{ color: '#CCD5AE', fontSize: '50px', marginLeft: '200px' }}>
                        <h1 className="nunito">swap</h1></p>
            </div>
            </stack>
            <div style={{ backgroundColor: '#283618', width: '100%', height: '1000px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    {/*Links to the sign in page  */}
                    <Link to={'/signup'}> <Text color = "#CCD5AE" style={{ fontSize: '30px' }}> Sign up! </Text></Link> 
                    <p>
                    </p>
                    <p style={{ color: '#CCD5AE', fontSize: '80px' }}>Revamp Your Wardrobe,</p>
                    <p style={{ color: '#CCD5AE', fontSize: '80px' }}>Reimagine Your World</p>   
                    <p style={{ color: '#CCD5AE', fontSize: '30px' }}><h1 className="nunito">Our purpose:</h1></p>    
                    <p style={{ color: '#CCD5AE', fontSize: '10px' }}><h1 className="nunito">To reduce spending on unneccessary purchases you will just wear once,
                        and to support sharing clothes. Our goal is to promote sustainability while encouraging trying out new outfits and
                        styles. Join now to see what you can create!</h1></p>       
            </div>
            <div>
                    <stack>
                    <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    <p style={{ color: '#283618' }}>My name is Liz F. and I am a third year Computer Engineering and 
                        Computer Science major. I worked on design and the frontend aspect of the About page. A fun fact about me
                        is I used to work on a Mac and Cheese food truck. 
                    </p>
                    </div>
                    <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <p style={{ color: '#283618' }}>My name is Kyra H. and I am a 3rd year Computer Science Major with a 
                        Psychology Minor and a concentration in AI. I worked on design and on the frontend. A fun fact about 
                        me is that I've been on a billboard in Times Square!
                    </p>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    </div>
                    <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        height="200px"
                        src='test-images/Stock img.jpg'
                    />
                    <p style={{ color: '#283618' }}>My name is Khushi K. and I am a 3rd year Computer Science major with a software
                        concentration. I worked on the backend mainly. A fun fact about me is I have a birthmark on my eye. 
                    </p>
                    </div>
                    <div style={{ backgroundColor: '#FEFAE0', width: '100%', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <p style={{ color: '#283618' }}>My name is Gabby.
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