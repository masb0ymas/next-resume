import {
  Button,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import { IconHeartHandshake } from '@tabler/icons-react'
import Link from 'next/link'
import Dots from '~/core/components/Dots'
import MyFrameMotion from '~/core/components/MyFrameMotion'
import dummyData from '~/data/dummy/github.json'
import githubStyles from './styles'

interface FeatureProps {
  id: number
  title: string
  repositoryURL: string
  githubStatURL: string
}

function Feature({ id, title, repositoryURL, githubStatURL }: FeatureProps) {
  return (
    <MyFrameMotion>
      <Link href={repositoryURL} target="_blank" passHref key={id}>
        <UnstyledButton>
          <Image src={githubStatURL} alt={title} width="100%" />
        </UnstyledButton>
      </Link>
    </MyFrameMotion>
  )
}

function GithubSection() {
  const { classes, cx } = githubStyles()

  const title = 'My Open source github'
  const description = 'My activities on open source github.'

  const { data } = dummyData

  const features = data.map((feature) => (
    <Feature {...feature} key={feature.id} />
  ))

  return (
    <Container
      my="md"
      className={cx(classes.wrapper, classes.inner)}
      size={1280}
    >
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="lg" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={40}
        cols={3}
        spacing="md"
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        {features}
      </SimpleGrid>

      <Container size={1080} p={0} mb={120}>
        <SimpleGrid
          mt="md"
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <MyFrameMotion>
            <Image
              src="https://grs.masb0ymas.com/api/top-langs/?username=masb0ymas&hide_border=true&layout=compact&theme=vue-dark"
              alt="my github board"
            />
          </MyFrameMotion>

          <MyFrameMotion>
            <Image
              src="https://grs.masb0ymas.com/api?username=masb0ymas&show_icons=true&hide_border=true&theme=vue-dark"
              alt="my github board"
            />
          </MyFrameMotion>
        </SimpleGrid>
      </Container>

      <Center>
        <Link href="https://s.id/masb0ymas" passHref target="_blank">
          <Button
            size="lg"
            radius="xl"
            variant="light"
            leftIcon={<IconHeartHandshake />}
          >
            How to support me
          </Button>
        </Link>
      </Center>
    </Container>
  )
}

export default GithubSection
