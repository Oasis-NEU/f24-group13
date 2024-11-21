import React from 'react';
import { supabase, profiles, userposts } from '../database/db';
import NavigationBar from '../components/NavigationBar';
import { Button, Flex, Stack, useDisclosure, Box, Divider, HStack } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import { Link } from 'react-router-dom';
import { Icon, Image, VStack} from '@chakra-ui/react';
import Carousel from '../components/carousel';
import { Text } from '@chakra-ui/react';
import { IoIosArrowRoundBack } from "react-icons/io";




import '../Post.css'
import './styles.css'
import ColorDisplay from '../components/ColorDisplay';
import { base } from 'framer-motion/client';


export default function Post() {

    const post = {
        itemName: "Y2K Low Rise Jeans",
        itemSize: "4",
        itemColors: ["Blue","Grey"],
        itemCondition:"In good condition\nLightly worn",
        itemDetails: "Juicy Couture 602 Jeans\nLow rise, light wash\ny2k style!",
        itemPhotos: ["test-images/FrontOfJuicyJeans.jpg","test-images/BackOfJuicyJeans.jpg",
            "test-images/JuicyJeansPocketClose.jpg","test-images/JuicyJeansPocketBack.jpg"]
    }

    const { isOpen, onOpen, onClose } = useDisclosure() // the use states

    function menuBar() {
        return (
            <div>
                <Flex p={'10px'} >
                        <MenuButton onClick={onOpen} buttonColor={'#283618'} ></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                        <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
                </Flex>
            </div>
        );
    }

    return (
        <div style= {{ backgroundColor:'#FEFAE0', minHeight: '100vh'}}>
            {menuBar()}
            <div>
                <Flex w = '100%' direction={{base: 'column', md: 'row'}} justifyContent={'center'} pl = '10px' pr = '10px'>
                    <VStack spacing={0} h = '100%' w = {{base: '100%', md: '450px', lg: '600px'}} >
                        <HStack h = '20px' w = '100%' spacing={0} justifyContent={'start'} display={{base: 'none', md: 'inherit'}}>
                            <Icon as = {IoIosArrowRoundBack} m = '0px' h = '100%' w = '25px' strokeWidth={0}
                                color = '#283618'
                            />
                            <Text fontSize={'15px'} fontWeight={'light'} textColor={'#283618'} >
                                Back to Closet
                            </Text>
                        </HStack>
                        <VStack overflow = 'auto' h = {{base:'500px', md: '575px'}} w = {{base: '500px', md: '450px', lg: '600px'}}
                            spacing={'0'}
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {post.itemPhotos.map((url, index) => (
                                <Image key={index} src={url} />
                            ))}
                        </VStack> 
                    </VStack>
                    <VStack minW={{base: '100%', md: '380px', lg: '50%'}} maxW = '580px'
                        textAlign={{base: 'center', md:'left'}} 
                        justifyContent={{base: 'center', md: 'left'}}
                        p = {{base: '0px', md: '20px'}}
                        spacing={'0'}
                    >
                            <Text w = '100%' fontSize={'25px'} fontWeight={'600'} textColor={'#283618'}>{post.itemName}</Text>
                            <Text w = '100%' textColor={'#283618'} fontSize={'16px'}>Size {post.itemSize}</Text>
                            <HStack w = '100%' justifyContent={{base: 'center', md: 'left'}}>
                                {post.itemColors.map((color, index) => (
                                    <ColorDisplay color={color}></ColorDisplay>
                                ))}
                            </HStack>
                            <Text w = '100%' textColor={'#283618'} fontWeight={'600'} fontSize={'20px'} mt ='20px'>
                                Condition
                            </Text>
                            <Text w = '100%' whiteSpace={'pre-line'} textColor={'#283618'} minH ='50px'>
                                {post.itemCondition}
                            </Text>
                            <Text w = '100%' textColor={'#283618'} fontWeight={'600'} fontSize={'20px'} mt ='20px'>
                                Item Details
                            </Text>
                            <Text w = '100%' textColor={'#283618'} whiteSpace={'pre-line'} minH = '80px'>
                                {post.itemDetails}
                            </Text>
                            <Button w = '100%' textColor={'#283618'} backgroundColor={'#CBCBB0'} mt ='20px'
                                _hover = {{
                                    bg:'#9CA084',
                                    border: 'transparent',
                                    outline: 'none',
                                    textColor: '#CBCBB0',
                                    boxShadow: 'none'
                                }}
                                _focus = {{
                                    border: 'transparent',
                                    outline: 'none',
                                    boxShadow: 'none'
                                }}
                            >Request Swap</Button>
                    </VStack>
                </Flex>
            </div> 
        </div>
    );

}