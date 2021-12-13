/* eslint-disable jsx-a11y/alt-text */
import NextLink from 'next/link'
import { 
    Container, 
    Box,Heading, 
    Image, 
    Link,
    useColorModeValue,
    Button,ListItem, List, Icon
} from '@chakra-ui/react'

import Section from '../components/section.js'
import Paragraph  from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Bio, BioYear } from '../components/bio'
import Layout from '../components/layouts/article.js'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
  } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container mt={10}>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos; m a full-stack developer!
            </Box>      

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Lindson Cardoso
                    </Heading>
                    <p>(Full-Stack Developer)</p>
                </Box>
            <Box 
            flexShrink={0}
            mt={{base: 4, md:0}} 
            ml={{md: 6}}
            align="center"
            >
              
            <Image 
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/lin.jpg"
                alt="lindson Cardoso - profile"
                />
            </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">  
                 Work
                </Heading>
                <Paragraph>
                Meu nome é Lindson Cardoso, tenho 21 anos, moro no Brasil, especificamente em Montes Claros - MG. Tenho Formação Técnica em Redes de Computados em 2018, Atualmente estou estudando em uma universidade. Também tenho estudado bastante sozinho para aprender novas tecnologias. Eu sou estudante de Sistema de informação apaixonado por tecnologias.
                Iniciei como Desenvolvimento Front End para Web em 2018 e alguns framework atualmente, especificamente as tecnologias, ReactJS, Mobile com React-Native, desde então venho dedicando todos os dias. {' '}
                </Paragraph>
                <Box align="center" my={4}>
                <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                  Meu portifolio  
                </Button>
                </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
                </Heading>
             <Bio>
                 <BioYear>2000</BioYear>
                 Born in Montes Claros, Brazil.
             </Bio>  
             <Bio>
                 <BioYear>2018</BioYear>
                 Completed the Technology in Computer Networks  at Institute SENAC MG.
             </Bio>  
             <Bio>
                 <BioYear>2019</BioYear>
              To present  Worked at startup ZL Tecnologia from Montes Claros, MG in Brazil.
             </Bio>  
           
            </Section>

            <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥
            </Heading>
            <Paragraph>
                Art, Music,{' '}
                <Link href="#">
                    :(
                </Link>
                , Photography, 
                <Link href="#">
                    :(
                </Link>
            </Paragraph>
            </Section>

            <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
             On the web
            </Heading>

            <List>
            <ListItem>
                <Link href="https://github.com/LindsonCardoso" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                >
                    @LindsonCardoso
                </Button>
                </Link>
            </ListItem>
            <ListItem>
            <Link href="https://twitter.com/LindsonAllves" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @LindsonAllves
              </Button>
            </Link>
          </ListItem>
            </List>


            </Section>

        </Container>
        </Layout>

    )
}


export default Page; 