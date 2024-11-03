import React from 'react';
import { Box, GridItem, Spacer, useDisclosure } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
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
import { Grid } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react';


export default function Profile() {
   
    var x = 3;
    const picture1 = {
        item:'shirt'
    }

    const picture2 = {
        item:'jeans'
    }

    const picture3 = {
        item:'shoes'
    }

    const picture4 = {
        item:'socks'
    }

    const picture5 = {
        item:'socks'
    }

    const picture6 = {
        item:'socks'
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemsList, setItems] = useState([picture1, picture2, picture3, picture4, picture5, picture6])

    const btnRef = React.useRef()
    
    return (
        <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw'}}>
            <Stack spacing={4} direction='row' align='center'>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                <Text fontSize={'20px'} pt ='20px' pl ='5px'>
                        Profile
                </Text>
                <IconButton style={{position: 'absolute', top: '15px', right: '40px' }} colorScheme='green'>
                    <IoNotificationsOutline />
                </IconButton>
                <IconButton style={{position: 'absolute', top: '15px', left: '130px' }}colorScheme='red'>
                    <FaPerson />
                </IconButton>
            {/*    <Button style={{position: 'absolute', top: '10px', left: '40px' }}colorScheme='red'>UserProfile</Button> */} 
            {/*   <Button style={{position: 'absolute', top: '20px', right: '20px' }}colorScheme='green'>Notif</Button> */} 
                <Button style={{position: 'absolute', top: '15px', right: '90px' }}colorScheme='yellow'>+</Button>
            </Stack>
            {/* <h1 style={{fontSize: 24}}>Profile Page!</h1> */} 
            <Grid
            templateColumns="repeat(auto-fill, minmax(20vw, 1fr))" 
            templateRows= {`repeat(${x}, 1fr)`}
            columnGap={1}
            rowGap={3}
            p = {10}
            >
                {ItemsList.map((picture, idx) => (
                    <GridItem key={idx} w='400px'>
                        <Link to={picture.item}>
                        <Box display={"flex"} maxWidth={'180px'} borderWidth={'1px'} borderRadius={5} overflow={'hidden'}>
                            <Flex align="center" paddingRight={'15px'} paddingLeft={'15px'} columnGap={'5px'}>
                            <Box p='10px'>
                                            <VStack rowGap={'0px'} h = '50px' w = '50px' alignItems={'flex-start'} >
                                                <Text textAlign="left" fontSize={'14px'} as='b'textColor={'gray.800'} >
                                                    {picture.item}
                                                </Text>
                                            </VStack>
                             </Box>
                            </Flex>
                        </Box>
                        </Link>
                    </GridItem>
                ))}

            </Grid>
        </div>
    );

}