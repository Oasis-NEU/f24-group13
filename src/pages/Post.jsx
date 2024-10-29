import React from 'react';
import supabase from '../database/db';
import NavigationBar from '../components/NavigationBar';
import { Button, useDisclosure } from '@chakra-ui/react';
import MenuButton from '../components/MenuButton';
import { Link } from 'react-router-dom';

export default function Post() {

    const post = {
        itemName: "",
        itemSize: "",
        itemColors: ["Blue","Grey"],
        itemCondition:"In good condition\nLightly worn",
        itemDetails: "Juicy Couture 602 Jeans\nLow rise, light wash\ny2k style!",
        itemPhotos: ["",""]
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    //const btnRef = React.useRef()

    return (
        <div>
            <MenuButton onClick={onOpen}></MenuButton>
            <NavigationBar isOpen={isOpen} onClose={onClose} ></NavigationBar>
        </div>
    );

}