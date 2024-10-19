import React from 'react';
import { Input, Flex, Text } from '@chakra-ui/react';
import '../App.css';

function TextBox({message}) {
  return (
    <Flex direction="column" align="center" width="100%">
        <Input placeholder={message} size="md" sx={{ backgroundColor: '#E9E9E9', color: 'black' }}/>
    </Flex>
  );
}

export default TextBox;