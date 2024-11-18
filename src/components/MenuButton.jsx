import { Button, ButtonGroup } from '@chakra-ui/react';
import { Icon, IconButton } from '@chakra-ui/react'
import { HiMenu } from "react-icons/hi";

function MenuButton({onClick, buttonColor}) {

    return (<IconButton 
        onClick = {onClick}
        justifyContent='center'
        bg="transparent" 
        border='0px' 
        fontSize={'20px'} 
        borderRadius='0px' 
        height={'35px'} 
        width={'15px'}
        textColor={buttonColor}
        
        _hover = {{
            border: 'transparent',
            background: 'transparent',
        }}
        _focus={{ 
            outline: "none",      
            boxShadow: "none"       
            }}
        >
        <Icon as={HiMenu} h = '100%' w = '25px' color = '#E9EDC9' strokeWidth={'.00'}
                _hover = {{
                    border: 'transparent',
                    background: 'transparent',
                    w: '28px'
                }}
        />    
    </IconButton>
    );
}

export default MenuButton;