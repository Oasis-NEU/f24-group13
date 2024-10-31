import React from 'react';
import { supabase, profiles, userposts } from '../database/db';
import NavigationBar from '../components/NavigationBar';
import { Button, Flex, Stack, useDisclosure, Box, Divider } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import { Link } from 'react-router-dom';
import { Image, VStack} from '@chakra-ui/react';
import Carousel from '../components/carousel';
import { Text } from '@chakra-ui/react';
import '../Post.css'
import ColorDisplay from '../components/ColorDisplay';


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
    //const btnRef = React.useRef() // doesnt really need to be here? TBD

    return (
        <div justifyContent = {'center'}>
            <Flex justifyContent={'flex-start'} p = '10px' pb = '5px'>
                <MenuButton onClick={onOpen}></MenuButton> {/* The physical menu button. Must pass onOpen to it so it knows what to do */}
                <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar> {/* The navigation bar. Must pass the states into it */}
            </Flex>
            <div>
                <Flex justifySelf = {'center'} justifyContent={'center'} pl = '30px' pr = '30px' maxHeight={'100vh'} maxWidth={'2177.78'} >
                    <Box p = '10px' height = "700px" width = "40%">
                        <VStack align = 'start' maxWidth={'980px'}>
                            <Box>
                                {/* back arrow icon */}
                                <Text fontSize={'15px'}>Back Button</Text>
                            </Box>
                            <Carousel images = {post.itemPhotos}></Carousel>
                        </VStack>
                    </Box>
                    <Box pr = '10px' pl = '20px' pt = '40px' w = '60%'>
                        <VStack textAlign= 'left' align = 'start' spacing={'0px'}>
                            <Text id = 'item_name'>
                                {post.itemName}
                            </Text>
                            <Text fontSize ='16px' >
                                Size {post.itemSize}
                            </Text>
                            <Flex>
                                {post.itemColors.map((item, index) => (
                                    <ColorDisplay key={index} color={item}></ColorDisplay>
                                ))}
                            </Flex>
                            <Divider p = '5px' borderColor={'595959'}></Divider>
                            <Text className = 'section_heading'>
                                Condition
                            </Text>
                            <Text className = 'description' >
                                {post.itemCondition}
                            </Text>
                            <Divider p = '5px' borderColor={'595959'}></Divider>
                            <Text className = 'section_heading'>
                                Item Details
                            </Text>
                            <Text className = 'description' >
                                {post.itemDetails}
                            </Text>
                            <Divider p = '5px' borderColor={'595959'}></Divider>
                            
                                <Button 
                                    w = '100%'
                                    p = '5px'
                                    marginTop ={'15px'}
                                >
                                    Request Swap
                                </Button>
                            
                        </VStack>
                    </Box>
                </Flex>
            </div>
        </div>
    );

}