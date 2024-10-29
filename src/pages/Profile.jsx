import React from 'react';
import { Box, useDisclosure } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';


export default function Profile() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
        <div style={{ backgroundColor: 'lightblue', height: '100vh', width: '100vw'}}>
            <Stack spacing={4} direction='row' align='center'>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                <Button colorScheme='red'>UserProfile</Button>
                <Button colorScheme='green'>Notifications</Button>
                <Button colorScheme='yellow'>AddToCloset</Button>
            </Stack>
            <h1 style={{fontSize: 24}}>Profile Page!</h1>
                <Stack align='center'>
                <SimpleGrid columns={5} spacingX='20px' spacingY='20px'>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                    <Box bg='tomato' height='180px' width='180px'></Box>
                </SimpleGrid>
                </Stack>
        </div>
    );

}