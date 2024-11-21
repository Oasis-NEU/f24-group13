import React from 'react';
import { Box, useDisclosure } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { SimpleGrid, Grid, Flex } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';

export default function Profile() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
        <div style={{ backgroundColor: '#283618', height: '100vh', width: '100vw'}}> {/* block scrolling */}
            <Stack spacing={4} direction='row' align='center' p ='10px'>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                <Button colorScheme='red'>UserProfile</Button>
                <Button colorScheme='green'>Notifications</Button>
                <Button colorScheme='yellow'>AddToCloset</Button>
            </Stack>
            <h1 style={{fontSize: 24}}>Profile Page!</h1>

            <Flex direction="column" align="center" justify="center" height="100vh" padding={4}>
                <Grid 
                    templateColumns="repeat(3, 1fr)" // creating 1 column, column will take up full available width 
                    gap={4} // space between grid items vertically and horizontally
                    width="100%" // sets the width of the grid container to 100% of the flex container's width
                    maxWidth="500px" // limits how wide the grid can become
                    justifyItems="center" // centers the content of each grid cell horizontally
                >
                    {Array(10).fill(null).map((_, i) => (
                        <Box key={i} bg='white' height='250px' width='250px'></Box>
                    ))}
                </Grid>
            </Flex>
        </div>
    );
}