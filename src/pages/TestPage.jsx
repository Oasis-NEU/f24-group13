import React, { useState } from 'react';
import { Flex, Grid, Text, Input, useDisclosure, GridItem, HStack, IconButton, Button, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, profiles, userposts } from '../database/db';
import NavigationBar from '../components/NavigationBar';
import MenuButton from '../components/MenuButton';
import { FaPlus } from "react-icons/fa";
import { small } from 'framer-motion/client';

export default function TestPage() {

    return (
        <div>
            {/* <HStack margin="10">
                <IconButton aria-label="Make a new post" variant="solid" backgroundColor="black" textColor="white">
                    <FaPlus />
                </IconButton> */}
                {/* <Button variant="outline">Outline</Button> */}
            {/* </HStack> */}

            <Flex direction="column" align="center" justify="center" height="100vh" padding={4}>
                <Grid
                    templateColumns="repeat(1, 1fr)" // creating 1 column, column will take up full available width 
                    gap={4} // space between grid items vertically and horizontally
                    width="100%" // sets the width of the grid container to 100% of the flex container's width
                    maxWidth="400px" // limits how wide the grid can become
                    justifyItems="center" // centers the content of each grid cell horizontally
                >
                    <Input
                        placeholder='post title'
                    />
                    <Input
                        placeholder='size'
                    />
                    <Input 
                        placeholder='color'
                    />
                    <Button>post</Button>
                    <Text textAlign="center"> {/* ensures text is centered */}
                        don't have an account?
                    </Text>
                </Grid>
            </Flex>
        </div>
    );
}
