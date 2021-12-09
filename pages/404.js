import NextLink from 'next/link'
import {
Box,
Heading,
Text,
Container,
Divider,
Button
} from '@chakra-ui/react'

const NotFound = ( ) => {
    return(
        <Container>
        <Heading as="h1">Conteudo Nao Encontrado</Heading>
          <Text> The page you&apos;re looking for was not found.</Text>
          <Divider my={6}/>
          <Box my={6} align="center">
           <NextLink href="/">
            <Button colorScheme="teal">Retornar para tela inicial</Button>
           </NextLink>
          </Box>
        </Container>
    )
}

export default NotFound