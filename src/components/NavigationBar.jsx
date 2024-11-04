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
import { small } from 'framer-motion/client';

function NavigationBar({isOpen,onClose}) {
    
  return (
    <Drawer 
        isOpen={isOpen} 
        placement='left' 
        onClose={onClose}
        //finalFocusRef={btnRef}
        >
        <DrawerOverlay />
            <DrawerContent maxWidth="250px">
                <DrawerCloseButton />
                    <DrawerHeader>style swap</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={2} direction='column' align='stretch'>
                                <Button 
                                    as={Link} to="/" 
                                    variant="ghost" 
                                    justifyContent="flex-start" 
                                    w="full" 
                                    fontWeight="normal" 
                                    _hover={{ 
                                        color: "black",
                                        // bg: "gray.100",
                                        fontWeight: "semibold",
                                     }}
                                >
                                    home
                                </Button>
                                <Button 
                                    as={Link} to="/profile" 
                                    variant="ghost" 
                                    justifyContent="flex-start" 
                                    w="full" 
                                    fontWeight="normal" 
                                    _hover={{ 
                                        color: "black",
                                        // bg: "gray.100",
                                        fontWeight: "semibold",
                                     }}
                                >
                                    my closet
                                </Button>
                                <Button 
                                    as={Link} to="/friends" 
                                    variant="ghost" 
                                    justifyContent="flex-start" 
                                    w="full" 
                                    fontWeight="normal" 
                                    _hover={{ 
                                        color: "black",
                                        // bg: "gray.100",
                                        fontWeight: "semibold",
                                     }}
                                >
                                    friends
                                </Button>
                                <Button 
                                    // as={Link} to="/" 
                                    variant="ghost" 
                                    justifyContent="flex-start" 
                                    w="full" 
                                    fontWeight="normal" 
                                    _hover={{ 
                                        color: "black",
                                        // bg: "gray.100",
                                        fontWeight: "semibold",
                                     }}
                                >
                                    settings
                                </Button>
                            </Stack>
                        </DrawerBody>
            </DrawerContent>
    </Drawer> 
  );
}

export default NavigationBar;