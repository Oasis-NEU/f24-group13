import React from 'react';
import { Center, Grid, GridItem } from '@chakra-ui/react'
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
import { Icon } from '@chakra-ui/react';
import { LiaUserFriendsSolid } from "react-icons/lia";
import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { supabase } from '../database/db';




function Menu() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Flex p={'10px'} >
                    <MenuButton onClick={onOpen} buttonColor = {'#E9EDC9'} ></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                    <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                    <Center h = '100%'>
                        <Icon as={"LiaUserFriendsSolid"} h = '120%' w = '35px' color = '#E9EDC9' strokeWidth={'.00'}/>
                    </Center>
                    <Text fontSize={'21px'} pt ='5px' pl ='10px' textColor={'#E9EDC9'} fontWeight={'600'}>
                        Friends
                    </Text>
            </Flex>
        </div>
    );
}

function getFriendsList() {

    const friend1 = {
        profileUrl:'/',
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
        profileUrl:'/signup',
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
    const friend5 = {
        profileUrl:'/profile',
        profileimgUrl:'test-images/spungbob.jpg',
        itemsAvailable: 2,
        username:'yourmom._.2',
        displayName:'Your Mother2',
    }

    return ([friend1, friend2, friend3, friend4, friend5])
}

export default function Friends() {

    const [FriendsList, setFriends] = useState(getFriendsList);
    const removeFollower = (e,username) => {
        e.preventDefault();
        setFriends(currentList => currentList.filter(friend => friend.username !== username))
    };


    function FriendBox(friend) {
        return (
            <Link to={friend.profileUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box w = '100%' h = '120px' bg = 'black' borderRadius={'5px'} minW={{base: '500px', md: '650px',lg: '475px'}}
                    backgroundColor = '#E9EDC9' p = '20px'
                > 
                    <Flex w = '100%' h = '100%' alignItems={'center'} gap="0" justifyContent="space-between" pl = '10px' pr = '10px'>
                        <Image 
                            src = {friend.profileimgUrl}
                            borderRadius = "full"
                            w = '86px'
                            h = '86px'
                            objectFit = "cover"
                            border = '1px'
                            borderColor= '#283618'
                        />
                        <VStack w = "50%" align={'start'} spacing = '0' gap = '0' al>
                            <Text fontSize={'1.25em'} fontWeight={'400'} letterSpacing="wide" >
                                {friend.displayName}
                            </Text>
                            <Text fontSize={'.7em'} letterSpacing="wide">
                                @{friend.username}
                            </Text>
                            <Text pt = {'.75em'} fontSize={'.75em'} letterSpacing="wide">
                                {friend.itemsAvailable} available items
                            </Text>
                        </VStack>
                        <Button 
                            h='35px'
                            w= '25%'
                            border='transparent'
                            bg = '#283618'
                            textColor= '#CCD5AE'
                            borderRadius='3px' 
                            fontSize={'13px'}
                            letterSpacing={'wider'}
                            _focus={{
                                outline: 'none',
                                boxShadow: 'none' 
                            }}
                            _hover = {{
                                border: 'transparent',
                                outline: '#3B5024',
                                bg: '#3B5024',
                                transition: "background-color 0.2s ease"
                            }}
                            onClick={(e) => removeFollower(e,friend.username)}
                            >
                                Remove
                        </Button>
                    </Flex>    
                </Box>
            </Link>    
        );
    }

    return (
        <div style= {{ backgroundColor:'#283618', minHeight: '100vh'}}>
            {Menu()}
            <div w = '100vh' display="flex">
                <Box maxWidth = {{base: "800px", lg: "1300px"}} justifySelf={'center'} >
                    <div>
                        <InputGroup pt = '20px' pl = '51px' pr = '51px'
                            startElement = {<LuSearch color="#E9EDC9" />} 
                            minW={{base: '500px', md: '650px',lg: '475px'}}
                            >
                            <Input placeholder="Search" 
                                textColor = '#E9EDC9'
                                borderColor= '#E9EDC9'
                                _hover = {{
                                    borderColor: '#E9EDC9',
                                    background: 'transparent',
                                    boxShadow: 'none'
                                }}
                                _focus = {{
                                    borderColor: '#E9EDC9',
                                    background: 'transparent',
                                    boxShadow: 'none'
                                }}
                                _placeholder={{
                                    textColor:'#E9EDC9'
                                }}
                                />
                        </InputGroup>
                    </div>
                    <div>
                        <Grid
                            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                            gap={6}
                            columnGap={8}
                            p = {'50px'}
                            pt = {'40px'}
                        >
                            {FriendsList.map((friend, idx) => (
                                <GridItem key={idx}>
                                    {FriendBox(friend)}
                                </GridItem>
                            ))}
                        </Grid>
                    </div>
                </Box>  
            </div>  
        </div>
    );

}