import React from 'react';
import '../App.css';
import { Button } from '@chakra-ui/react';
import { chakra, Input, Stack } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function NavigationBar({isOpen,onClose}) {
    
  return (
    <Drawer 
        isOpen={isOpen} 
        placement='left' 
        onClose={onClose}
        //finalFocusRef={btnRef}
        >
        <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                    <DrawerHeader>NavigationMenu</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={4} direction='column' align='center'>
                                <Button as={Link} to="/profile" >My Closet</Button>/
                                <Button as={Link} to="/friends" >Friends</Button>
                                <Button> {/*as={Link} to="/"*/}Settings</Button>
                                <Button as={Link} to="/" >Home</Button>
                            </Stack>
                        </DrawerBody>
            </DrawerContent>
    </Drawer> 
  );
}

export default NavigationBar;