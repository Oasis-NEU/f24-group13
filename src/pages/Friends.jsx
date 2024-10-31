import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Button, ButtonGroup, useDisclosure} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuButton from '../components/MenuButton';
import NavigationBar from '../components/NavigationBar';


export default function Friends() {
    var x = 3;
    const friend1 = {
        profileUrl:'/about',
        profileimgUrl:'test-images/ghost.jpg',
        itemsAvailable: 5,
        username:'coolperson99',
        displayName:'Cool Friend',
    }
    const friend2 = {
        profileUrl:'/home',
        profileimgUrl:'test-images/profilepic.jpg',
        itemsAvailable: 6,
        username:'alsoacoolperson100',
        displayName:'Sally',
    }
    const friend3 = {
        profileUrl:'/sign-in',
        profileimgUrl:'test-images/joe.jpg',
        itemsAvailable: 0,
        username:'deeznutz69',
        displayName:'Joe Jonas',
    }
    const friend4 = {
        profileUrl:'/profile',
        profileimgUrl:'test-images/spungbob.jpg',
        itemsAvailable: 2,
        username:'yourmom._.',
        displayName:'Your Mother',
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [FriendsList, setFriends] = useState([friend1, friend2, friend3,friend4]);

    const removeFollower = (e,username) => {
        e.preventDefault();
        setFriends(currentList => currentList.filter(friend => friend.username !== username))
    };

    return (
        <div>
            <div>
                <Flex p={'10px'} >
                    <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                    <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                    <Text fontSize={'20px'} pt ='5px' pl ='5px'>
                        Friends
                    </Text>
                </Flex>
            </div>
            <div justifyContent = 'center'>
                <Flex justifyContent= "center" w = '100%'>
                    <Grid
                        templateColumns='repeat(2, 1fr)'
                        templateRows= {`repeat(${x}, 1fr)`} gap={6}
                        p = {10}
                        >
                        {FriendsList.map((friend, idx) => (
                            <GridItem key={idx} w = '400px'>
                                <Link to={friend.profileUrl}>
                                <Box display = "flex" borderWidth = '1px' borderRadius = {5} overflow = 'hidden' >
                                    <Flex align= "center" paddingRight={'15px'} paddingLeft={'15px'} columnGap={'0px'}>
                                        <Image 
                                            src = {friend.profileimgUrl}
                                            borderRadius = "full"
                                            w = '75px'
                                            h = '75px'
                                            objectFit = "cover"
                                            p = '2'
                                        />
                                        <Box p='15px'>
                                            <VStack rowGap={'0px'} w = '180px' alignItems={'flex-start'} >
                                                <Text textAlign="left" fontSize={'14px'} as='b'textColor={'gray.800'} >
                                                    {friend.displayName}
                                                </Text>
                                                <Text textAlign="left" fontSize={'10px'} textColor={'gray.700'} pb ='5px' >
                                                    @{friend.username}
                                                </Text>
                                                <Text textAlign="left" fontSize={'11'} textColor={'gray.500'}>
                                                    {friend.itemsAvailable} items available
                                                </Text>
                                            </VStack>
                                        </Box>
                                        <Button 
                                            h='25px'
                                            border='transparent'
                                            borderRadius='3px' 
                                            fontSize={'11px'}
                                            _focus={{
                                                outline: 'none',
                                                boxShadow: 'none' 
                                            }}
                                            _hover = {{
                                                border: 'transparent',
                                                outline: 'none',
                                                bg: "gray.200",
                                                transition: "background-color 0.2s ease"
                                            }}
                                            onClick={(e) => removeFollower(e,friend.username)}
                                            >
                                                Remove
                                        </Button>
                                    </Flex>
                                </Box>
                                </Link>
                            </GridItem>
                        ))}
                    </Grid>
                </Flex>
            </div>
        </div>


    );

}