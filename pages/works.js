import { 
Container, Heading,
SimpleGrid, Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbStartOs from '../public/images/works/startOs.png'
import thumbStartAuthn from '../public/images/works/startAuth.png'
import thumbZltecnologiaSite from '../public/images/works/zltecnologia.png'
import thumbWhatsappApi from '../public/images/works/whatsapp.png'


const Works = () => {
 return(
  <Layout title="Works">
  <Container>
   <Heading as="h3" fontSize={20} mb={4} mt={6} >
    Projetos de trabalho
   </Heading>
   <SimpleGrid columns={[1,1,2]} gap={6}mt={6}>
     <Section delay={0.3}>
      <WorkGridItem id="startos" title="StartOS" thumbnail={thumbStartOs}>
       Site desenvolvido em NextJS 
      </WorkGridItem>
     </Section>
     <Section>
      <WorkGridItem id="startAuthn" title="startAuthn" thumbnail={thumbStartAuthn}>
       Ferramenta desenvolvida em Delphi para fins fiscais
      </WorkGridItem>
     </Section>
     <Section>
      <WorkGridItem id="whatsapp-api" title="WhatsApp Api" thumbnail={thumbWhatsappApi}>
       Um cliente WhatsApp API que se conecta por meio do aplicativo de navegador da Web WhatsApp
      </WorkGridItem>
     </Section>

    </SimpleGrid>


      <Section delay={0.2}>
      <Divider my={6}/>
      <Heading as="h3" fontSize={20} mb={4}>
        Colaborações
      </Heading>
      </Section>
      <SimpleGrid column={[1,1,2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem id="zltecnologia" title="ZL Tecnologia - Web Site" thumbnail={thumbZltecnologiaSite}>
          Redesign do antigo site em formato landingPage HTML5
        </WorkGridItem>
      </Section>
      </SimpleGrid>


  </Container>
  </Layout>
 )
}

export default Works


