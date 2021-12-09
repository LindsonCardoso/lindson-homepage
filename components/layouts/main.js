import Head from 'next/head'
import NavBar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
 const Main = ({children, router}) => {

    return(
        <Box as="main" pb={8}>
         <Head> 
             <meta name="viewport" content="width=device-width, initial-scale=1"/>
             <meta name="description" content="Lindson Cardopso homepage" />
            <meta name="author" content="Lindson Cardoso" />
            <meta name="author" content="lindsonCardoso" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/logos.png" type="image/x-icon" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@LindsonAllves" />
        
            <meta property="og:site_name" content="Lindson Cardoso Homepage" />
             <title>Lindson Cardoso - Homepage</title>
         </Head>

        <NavBar path={router.asPath}/>

        <Container maxW="container.md" pt={14}>
         {children}
         <Footer/>
        </Container>
        </Box>
    )
}

export default Main

