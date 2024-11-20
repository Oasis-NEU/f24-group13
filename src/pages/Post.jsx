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
import './styles.css'
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
        <div>
            {menuBar()}
            <div>
                <Flex>
                    
                </Flex>
            </div> 
        </div>
    );

}