import NextLink from 'next/link'
import { FaLaravel, FaLinux, FaHtml5, FaCss3 } from 'react-icons/fa'
import {
  BiLogoJavascript,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoFlutter,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoAws,
  BiLogoPython
} from 'react-icons/bi'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Refactoring
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ariel Fernando
          </Heading>
          <p>Computer Science Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ariel.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a CS student who is passionate about learning new technologies
          and developing projects. My goal is to become a full-stack developer,
          and I am currently exploring various areas such as web development,
          mobile development, and cloud computing. I am eager to expand my
          knowledge and skills in these domains.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born Ibarra, Ecuador 🇪🇨
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from High School
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Studying Computer Science at Polytechnic State University of Carchi
        </BioSection>
        {/* <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {/* Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link> */}
          Art, music, playing video games, fishing, and learning new things.
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Technologies i use
        </Heading>
        {/* Icons */}
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          style={{ width: '100%' }}
        >
          <ListItem>
            <FaLaravel size={70} />
          </ListItem>
          <ListItem>
            <BiLogoJavascript size={70} />
          </ListItem>
          <ListItem>
            <BiLogoJava size={70} />
          </ListItem>
          <ListItem>
            <BiLogoSpringBoot size={70} />
          </ListItem>
          <ListItem>
            <BiLogoReact size={70} />
          </ListItem>
          <ListItem>
            <BiLogoNodejs size={70} />
          </ListItem>
          <ListItem>
            <BiLogoFlutter size={70} />
          </ListItem>
          <ListItem>
            <FaLinux size={70} />
          </ListItem>
          <ListItem>
            <FaHtml5 size={70} />
          </ListItem>
          <ListItem>
            <FaCss3 size={70} />
          </ListItem>
          <ListItem>
            <BiLogoAws size={70} />
          </ListItem>
          <ListItem>
            <BiLogoPython size={70} />
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/arielfernando1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @arielfernando1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ariel593h" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ariel593h
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
