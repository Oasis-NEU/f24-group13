import {HStack, Text, Box } from "@chakra-ui/react";

function ColorDisplay({color}) {
    var hex = pickColor(color);

    return (

        <HStack marginTop = {'8px'} marginBottom = {'5px'} marginRight={'10px'} spacing={'5px'}>
            <Box
                w = '14px'
                h = '14px' 
                
                borderRadius = 'full'
                bg = {`#${hex}`}
                outlineColor = '595959'
            ></Box>
            <Text fontSize={'14px'}>{color}</Text>

        </HStack>
    );
}

function pickColor(color) {
    var hex;

    switch (color) {
        case 'Red':
            hex = 'FF0000';
            break;
        case 'Orange':
            hex = 'FF8300';
            break;
        case 'Yellow':
            hex = 'FFEC00';
            break;
        case 'Green':
            hex = '00B439';
            break;    
        case 'Blue':
            hex = '001FFF';
            break;  
        case 'Purple':
            hex = '8300FF';
            break;
        case 'Pink':
            hex = 'FF5EA';
            break;
        case 'Gold':
            hex = 'CFA000';
            break;
        case 'Silver':
            hex = 'D1D1D1';
            break;    
        case 'White':
            hex = 'FFFFFF';
            break;  
        case 'Grey':
            hex = '909090';
            break;
        default:
            hex = '000000';
            break;         
    }

    return hex;
}

export default ColorDisplay;