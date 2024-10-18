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

export default function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    return (
        <div style={{ backgroundColor: 'lightblue', height: '100vh', width: '100vw'}}>
            <Stack spacing={4} direction='row' align='center'>
                <Button ref={btnRef} colorScheme='pink' onClick={onOpen}>
                    Open</Button>
                    <Drawer 
                    isOpen={isOpen} 
                    placement='left' 
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>NavigationMenu</DrawerHeader>

                            <DrawerBody>
                                <Stack spacing={4} direction='column' align='center'>
                                    <Button placeholder={'My Closet'} >My Closet</Button>/
                                    <Button placeholder={'Friends'} >Friends</Button>
                                    <Button placeholder={'Settings'} >Settings</Button>
                                    <Button placeholder={'About'} >About</Button>
                                </Stack>
                                
                            </DrawerBody>
                        </DrawerContent>
                        </Drawer> 
                <Button colorScheme='red'>UserProfile</Button>
                <Button colorScheme='green'>Notifications</Button>
                <Button colorScheme='yellow'>AddToCloset</Button>
            </Stack>
            <h1 style={{fontSize: 24}}>Profile page!</h1>
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