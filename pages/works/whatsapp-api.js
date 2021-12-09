import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
     <Layout title="Startos" mt={6} >
      <Container  mt={9}>
       <Title>
        WhatsApp API<Badge>2021</Badge>
       </Title>
       <P>
        Api cliente WhatsApp para NodeJS que se conecta por meio do aplicativo de navegador da Web WhatsApp.
       </P>
       <List ml={4} my={4}>
        <ListItem>
          <Meta>PLATAFORMA</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>STACK</Meta>
          <span>NodeJS</span>
        </ListItem>

      </List>

    
      </Container>
     </Layout>
    )
}

export default Work