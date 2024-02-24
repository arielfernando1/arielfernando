import NextLink from 'next/link'
import { FaLaravel, FaLinux, FaHtml5, FaCss3 } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'
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
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Refactoring
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ariel A.
          </Heading>
          <p>Jr. Developer</p>
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
          Me
        </Heading>
        <Paragraph>
          Passionate about learning new technologies
          and developing projects. My goal is to become a full-stack developer,
          and I am currently exploring various areas such as web development,
          mobile development, and cloud computing.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Ibarra, Ecuador 🇪🇨
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from High School
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2024</BioYear>
          Studied CS at Polytechnic State University of Carchi
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I like
        </Heading>
        <Paragraph>
          Art, music, playing video games, fishing, and watching movies.
        </Paragraph>
      </Section>
      {/* <Section>
        <Heading as="h3" variant="section-title">
          Technologies i use
        </Heading>
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          style={{ width: '100%' }}
        >
          <ListItem>
            <Tooltip label="Laravel" aria-label="Laravel">
              <span>
                <FaLaravel size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Javascript" aria-label="Javascript">
              <span>
                <BiLogoJavascript size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Java" aria-label="Java">
              <span>
                <BiLogoJava size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Spring Boot" aria-label="Spring Boot">
              <span>
                <BiLogoSpringBoot size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="React" aria-label="React">
              <span>
                <BiLogoReact size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="NodeJS" aria-label="NodeJs">
              <span>
                <BiLogoNodejs size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Flutter" aria-label="Flutter">
              <span>
                <BiLogoFlutter size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Linux" aria-label="Linux">
              <span>
                <FaLinux size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="HTML" aria-label="HTML">
              <span>
                <FaHtml5 size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="CSS" aria-label="CSS">
              <span>
                <FaCss3 size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Amazon Web Services" aria-label="AWS">
              <span>
                <BiLogoAws size={70} />
              </span>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip label="Python" aria-label="Python">
              <span>
                <BiLogoPython size={70} />
              </span>
            </Tooltip>
          </ListItem>
        </List>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/arielfernando1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                arielfernando1
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
                ariel593h
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/ariel-aguirre-74b864145/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
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
