import React from 'react';
import { chakra, Input, Stack } from '@chakra-ui/react';
import {Box, AbsoluteCenter, useDisclosure} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        
        <div style = {{width: '100wv', height: '100vh'}}>
            <div style={{ backgroundColor: '#E9EDC9', width: '100vw', height: '10px', display: 'flex'}}>
                <Button ref={btnRef} colorScheme='#E9EDC9' onClick={onOpen}>
                    Navigation</Button>
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
                        </div>
            <div style={{ backgroundColor: '#E9EDC9', width: '100vw', height: '500px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' ,
                flexDirection: 'column'}}>
                    <p style={{ color: 'white', fontSize: '60px' }}>Style Swap</p>
                    <p></p>
                    <p style={{ color: 'white', fontSize: '18px' }}>our slogan</p>
            </div>
            <div style={{ backgroundColor: 'white', width: '100vw', height: '300px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'black' }}>This is where our blurb will go.</p>
            </div>
            <div style={{ backgroundColor: '#D4A373', width: '100vw', height: '500px',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'white' }}>This is where our pictures and about us will go.</p>
            </div>
        </div>
        

    );

}