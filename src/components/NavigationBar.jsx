import React from 'react';
import '../App.css';
import { Button } from '@chakra-ui/react';
import { chakra, Input, Stack, HStack } from '@chakra-ui/react';
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
import { Icon, Box, Text} from '@chakra-ui/react';
import { LiaUserFriendsSolid } from "react-icons/lia"; // friends icon
import { MdOutlineHome } from "react-icons/md"; // home icon
import { BiCloset } from "react-icons/bi"; // hanger
import { IoSettingsOutline } from "react-icons/io5"; // settings
import MenuButton from './MenuButton';


function NavigationBar({isOpen,onClose}) {

    function Option({link, pageName, icon}) {

        return (
            <Box h = '3.5em' w = '100%' alignContent={'center'} pl = '25px'
                as = {Link} to = {link}
                _hover = {{
                    backgroundColor: '#FEFAE0',
                    '.icon': { color: '#63744F' },
                    '.text': { textColor: '#63744F' },
                }}>
                <HStack alignContent={'center'}>
                    <Icon as={icon} strokeWidth={'.0px'} h = '100%' w = '1.5em' color={'#CCD5AE'} className="icon"/>
                    <Text textColor={'#CCD5AE'} fontSize={"20px"} fontWeight={'400'} pl = '5px' pt = '3px' className="text">
                        {pageName}
                    </Text>
                </HStack>
            </Box>        
        );
    }
    
  return (
    <Drawer 
        isOpen={isOpen} 
        placement='left' 
        onClose={onClose}
        //finalFocusRef={btnRef}
        >
        <DrawerOverlay />
            <DrawerContent maxWidth="250px" backgroundColor = "#63744F">
                <MenuButton onClick={onClose} buttonColor={'#CCD5AE'}></MenuButton>
                        <DrawerBody p = '0'>
                            <Stack spacing={0} direction='column' align='stretch' pt = '15px'>
                                <Option link="/profile" pageName="My Closet" icon = {BiCloset}/>
                                <Option link="/friends" pageName="Friends" icon = {LiaUserFriendsSolid}/>
                                <Option link="/" pageName="Settings" icon = {IoSettingsOutline}/>
                                <Option link="/" pageName="About" icon = {MdOutlineHome}/>
                            </Stack>
                        </DrawerBody>
            </DrawerContent>
    </Drawer> 
  );
}

export default NavigationBar;