import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
     <Layout title="Startos" mt={6} >
      <Container>
       <Title>
        StartOS - ERP FISCAL<Badge>2021</Badge>
       </Title>
       <P>
         Site desenvolvido para empresa ZL Tecnologia - Start OS {' '}
         ERP de emissão NFCe e NFe.
       </P>
       <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://startos.com.br/">
            https://startos.com.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web Site</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/startOs.png" alt="Start Os" />
      <WorkImage src="/images/works/start-2.png" alt="Start Os" />
      <WorkImage src="/images/works/start-3.png" alt="Start Os" />

      </Container>
     </Layout>
    )
}

export default Work