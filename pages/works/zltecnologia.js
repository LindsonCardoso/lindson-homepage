import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
     <Layout title="Startos" mt={9}>
      <Container mt={6}>
       <Title>
        ZL Tecnologia - Web Site<Badge>2021</Badge>
       </Title>
       <P>
         Redesign do antigo site para empresa ZL Tecnologia.
       </P>
       <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://zltecnologia.com.br/">
            http://zltecnologia.com.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>PLATAFORMA</Meta>
          <span>Web Site</span>
        </ListItem>
        <ListItem>
          <Meta>STACK</Meta>
          <span>Html5,CSS,PHP</span>
        </ListItem>

      </List>

     
      <WorkImage src="/images/works/zltecnologia.png" alt="ZL Tecnologia " />
 
      <WorkImage src="/images/works/zltec-2.png" alt="ZL Tecnologia " />
      <WorkImage src="/images/works/zltec-3.png" alt="ZL Tecnologia " />
      <WorkImage src="/images/works/zltec-4.png" alt="ZL Tecnologia " />
    
      </Container>
     </Layout>
    )
}

export default Work