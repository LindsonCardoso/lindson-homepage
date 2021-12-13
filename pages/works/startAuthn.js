import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph.js'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
     <Layout title="StartAuth"  mt={6}>
      <Container>
       <Title>
        Monitor de contigência Fiscal <Badge>2021</Badge>
       </Title>
       <P>
       Ferramenta automática de contigência notas fiscais para windows. 

       </P>
       <List ml={4} my={4}>
        <ListItem>
          <Meta>PLATAFORMA</Meta>
          <span>Windows 10</span>
        </ListItem>
        <ListItem>
          <Meta>STACK</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>ÚLTIMA ATUALIZAÇÃO</Meta>
          <span>08/12/2021</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/startAuth.png" alt="startAuth" />

      </Container>
     </Layout>
    )
}

export default Work