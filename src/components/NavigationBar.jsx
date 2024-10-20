
import React from 'react';
import '../App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Box, AbsoluteCenter, useDisclosure} from '@chakra-ui/react';
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

function NavigationBar({message}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
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
  );
}

export default NavigationBar;