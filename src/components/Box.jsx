import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import '../App.css';
import { small } from 'framer-motion/client';

function Box({message}, {buttonColor}) {
  return (
    <Flex direction="column" align="center" width="100%">
        <Button backgroundColor={buttonColor}>
          <Text>{message}</Text>
        </Button>
    </Flex>
  );
}

export default Box;