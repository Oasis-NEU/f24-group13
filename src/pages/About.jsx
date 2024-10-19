import React from 'react';
import { chakra, Input, Stack } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import {Box, AbsoluteCenter} from '@chakra-ui/react';

export default function About() {
    return (
        <div style={{ backgroundColor: 'lightblue', width: '1390px', height: '500px' }}>
            <AbsoluteCenter>
                <p style={{ color: 'white' }}>About page!</p>
            </AbsoluteCenter>
      </div>
    );

}