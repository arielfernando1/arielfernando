import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Stocker">
    <Container>
      <Title>
        Stocker <Badge>2022-?</Badge>
      </Title>
      A Small Business Store Manager.
      <List ml={4} my={4}>
        <ListItem>
          <Meta>repo</Meta>
          <Link href="https://github.com/arielfernando1/stocker">
            https://github.com/arielfernando1/stocker <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, MySQL, Livewire, TailwindCSS</span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <span>Soon</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/stocker_01.png" alt="Stocker" />
      <WorkImage src="/images/works/stocker_02.png" alt="Inkdrop" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
