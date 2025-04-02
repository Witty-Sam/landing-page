import { Button, Box, ChakraProvider } from "@chakra-ui/react"

const NavBar = () => {

    return(

        <ChakraProvider>
        <Box>

            <img src="/public/images/VidaBlack.png" alt="Vida Logo"/>
            <Button
            onClick={()=>{}}
            >Agent
            </Button>
        </Box>
        </ChakraProvider>
    );
};


export default NavBar;