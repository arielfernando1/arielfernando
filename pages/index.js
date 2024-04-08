import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLaravel, FaReact, FaPhp} from 'react-icons/fa'
import { SiLivewire } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import SkillItem from '../components/skill_item'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

function Home() {
  const t = useTranslations('ariel')
  const keys = ['hobbies.list']
  return (
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
            <p>{t('me.profession')}</p>
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
            {t('me.title')}
          </Heading>
          <Paragraph>{t('me.description')}</Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('bio.title')}
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            {t('bio.birthdate')}
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            {t('bio.graduated_highschool')}
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            {t('bio.graduated_college')}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('skills.title')}
          </Heading>
          <List display="flex" flexWrap="wrap" justifyContent="center" style={{width: '100%'}}> 
            <SkillItem icon={<FaReact size={64} color="#61DAFB" />} name="React" />
            <SkillItem icon={<SiLivewire size={64} />} name="Livewire" />
            <SkillItem icon={<FaLaravel size={64} color="#FF2D20" />} name="Laravel" />
            <SkillItem icon={<FaPhp size={64} color="#777BB4" />} name="PHP" />
            <SkillItem icon={<BiLogoSpringBoot size={64} color="#6DB33F" />} name="Spring Boot" />
            
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('social.title')}
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
              <Link
                href="https://www.linkedin.com/in/ariel-aguirre-74b864145/"
                target="_blank"
              >
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
}
export async function getServerSideProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  }
}
export default Home
// export { getServerSideProps } from '../components/chakra'
