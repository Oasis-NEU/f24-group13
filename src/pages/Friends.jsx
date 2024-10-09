import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


export default function Friends() {
    var x = 3;
    const friend1 = {
        profileUrl:'test-images/ghost.jpg',
        profileimgUrl:'test-images/ghost.jpg',
        itemsAvailable: 5,
        username:'coolperson99',
        displayName:'Cool Friend',
    }
    const friend2 = {
        profileUrl:'test-images/ghost.jpg',
        profileimgUrl:'test-images/profilepic.jpg',
        itemsAvailable: 6,
        username:'alsoacoolperson100',
        displayName:'Sally',
    }
    const friend3 = {
        profileUrl:'test-images/ghost.jpg',
        profileimgUrl:'test-images/joe.jpg',
        itemsAvailable: 0,
        username:'deeznutz69',
        displayName:'Joe Jonas',
    }
    const friend4 = {
        profileUrl:'test-images/ghost.jpg',
        profileimgUrl:'test-images/spungbob.jpg',
        itemsAvailable: 2,
        username:'yourmom._.',
        displayName:'Your Mother',
    }

    const Friends = []
    Friends.push(friend1);
    Friends.push(friend2);
    Friends.push(friend3);
    Friends.push(friend4);


    return (
        <div>
            <Flex justifyContent= "center" w = '100vw'>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    templateRows= {`repeat(${x}, 1fr)`} gap={6}
                    p = {10}
                    >
                    {Friends.map((friend, idx) => (
                        <GridItem key={idx} w = '400px'>
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
                                        borderRadius='3px' 
                                        fontSize={'11px'}
                                        _focus={{
                                            outline: 'none',
                                            boxShadow: 'none' 
                                        }}
                                        >
                                            Remove
                                    </Button>
                                </Flex>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </div>

    );

}