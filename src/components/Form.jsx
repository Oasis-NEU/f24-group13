import React, { useState } from 'react';
import { Flex, Grid, Text, Input, useDisclosure, GridItem, HStack, IconButton, Button, Stack, Center } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, profiles, userposts } from '../database/db';
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';
import { FaPlus } from "react-icons/fa";
import { small } from 'framer-motion/client';

function Form({isOpen,onClose}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <HStack margin="10">
                <IconButton aria-label="Make a new post" variant="solid" backgroundColor="black" textColor="white">
                    <FaPlus />
                </IconButton>
                {/* <Button variant="outline">Outline</Button> */}
            </HStack>
        </div>
    );
}
