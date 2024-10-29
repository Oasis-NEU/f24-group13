import { Button, ButtonGroup } from '@chakra-ui/react';

function menuButton({onClick}) {

    return (<Button 
        onClick = {onClick}
        justifyContent='center'
        bg="transparent" 
        border='0px' 
        fontSize={'20px'} 
        borderRadius='0px' 
        height={'35px'} 
        width={'15px'}
        
        _hover = {{
            border: 'transparent',
            background: 'transparent',
            fontSize: '25px'
        }}
        _focus={{ 
            outline: "none",      
            boxShadow: "none"       
            }}
        >
        =    
    </Button>
);
}

export default menuButton;