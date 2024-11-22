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
import './styles.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

export default function Profile() {
   
    var x = 3;
    const picture1 = {
        item:'shirt',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const picture2 = {
        item:'jeans',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const picture3 = {
        item:'shoes',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const picture4 = {
        item:'socks',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const picture5 = {
        item:'socks',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const picture6 = {
        item:'socks',
        itemColor: '#CCD5AE',
        itemimgURL:'test-images/ghost.jpg'
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemsList, setItems] = useState([picture1, picture2, picture3, picture4, picture5, picture6])

    const btnRef = React.useRef()
    
    return (
        <div style={{ backgroundColor: '#283618', height: '100vh', width: '100vw'}}>
            <Stack spacing={4} direction='row' align='center'>
                <MenuButton onClick={onOpen} color = {'#000000'}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                <Text color={'#CCD5AE'} fontSize={'20px'} pt ='20px' pl ='5px'>
                        Profile
                </Text>
                <IconButton style={{position: 'absolute', top: '15px', right: '40px' }}color='#CCD5AE' bgColor='#283618'>
                    <IoNotificationsOutline />
                </IconButton>
                <IconButton style={{position: 'absolute', top: '15px', left: '130px' }}color='#CCD5AE' bgColor='#283618'>
                    <FaPerson />
                </IconButton>
            {/*    <Button style={{position: 'absolute', top: '10px', left: '40px' }}colorScheme='red'>UserProfile</Button> */} 
            {/*   <Button style={{position: 'absolute', top: '20px', right: '20px' }}colorScheme='green'>Notif</Button> */} 
                <Button style={{position: 'absolute', top: '15px', right: '70px' }}color='#CCD5AE' bgColor='#283618'>+</Button>
            </Stack>
            {/* <h1 style={{fontSize: 24}}>Profile Page!</h1> */} 
            <Center h="10vh">
            <Box
            position="relative"
            left="-20px" /* Move it to the left */
            width="100px"
            height="100px" 
            bg="#CCD5AE"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white">Circle
            </Box>
            <Stack>
                <Text color={'#CCD5AE'}>@lychee123</Text>
                <Text color={'#CCD5AE'}>10 friends</Text>
            </Stack>
            </Center>

            <Flex
            height="50vh" 
            justifyContent="center" 
            alignItems="center" 
            >
            <Grid
            gridTemplateRows={"repeat(3, minmax(0, 1fr))"}
            gridTemplateColumns={"repeat(3, minmax(0, 1fr))"}
            //templateColumns="repeat(auto-fill, minmax(10vw, 1fr))" 
            //templateRows= {`repeat(${x}, 1fr)`}
            columnGap={1}
            rowGap={3}
            p = {10}
            >
                {ItemsList.map((picture, idx) => (
                    <GridItem key={idx} w='200px'>
                        <Link to={picture.item}>
                        <Box bg='#CCD5AE' display={"flex"} maxWidth={'180px'} borderWidth={'1px'} borderRadius={5} overflow={'hidden'}>
                            <Flex align="center" paddingRight={'15px'} paddingLeft={'15px'} columnGap={'5px'}>
                            <Box p='50px'>
                                {/* <Image
                                    src = {picture.itemColor}
                                /> */}
                                       
                                            <VStack 
                                            spacing="5px"
                                            h="100%"
                                            w="100%"
                                            justifyContent="center" 
                                            alignItems="center"
                                            /* rowGap={'0px'} h = '50px' w = '50px' alignItems={'flex-start'} */ >
                                                {/* <Text textAlign="center" paddingTop='5px' paddingLeft='40px' fontSize={'14px'} as='b'textColor={'gray.800'} >
                                                    {picture.item}
                                                </Text> */}
                                            </VStack>
                                 
                             </Box>
                            </Flex>
                        </Box>
                        </Link>
                    </GridItem>
                ))}

            </Grid>
            </Flex> 
        </div>
    );
}