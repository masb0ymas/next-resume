import Dots from '@core/components/Dots'
import {
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import Link from 'next/link'

const MOCK_DATA = [
  {
    id: 1,
    title: 'expresso',
    repositoryURL: 'https://github.com/masb0ymas/expresso',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso&theme=vue-dark',
  },
  {
    id: 2,
    title: 'expresso-typeorm',
    repositoryURL: 'https://github.com/masb0ymas/expresso-typeorm',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-typeorm&theme=vue-dark',
  },
  {
    id: 3,
    title: 'expresso-gateway',
    repositoryURL: 'https://github.com/masb0ymas/expresso-gateway',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-gateway&theme=vue-dark',
  },
  {
    id: 4,
    title: 'nextine-admin',
    repositoryURL: 'https://github.com/masb0ymas/nextine-admin',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=nextine-admin&theme=vue-dark',
  },
  {
    id: 5,
    title: 'nextive-admin',
    repositoryURL: 'https://github.com/masb0ymas/nextive-admin',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=nextive-admin&theme=vue-dark',
  },
  {
    id: 6,
    title: 'gofiber-gorm',
    repositoryURL: 'https://github.com/masb0ymas/gofiber-gorm',
    githubStatURL:
      'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=gofiber-gorm&theme=vue-dark',
  },
]

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    fontWeight: 600,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}))

interface FeatureProps {
  id: number
  title: string
  repositoryURL: string
  githubStatURL: string
}

function Feature({ id, title, repositoryURL, githubStatURL }: FeatureProps) {
  return (
    <Link href={repositoryURL} passHref key={id}>
      <UnstyledButton component="a">
        <Image src={githubStatURL} alt={title} width="100%" />
      </UnstyledButton>
    </Link>
  )
}

function GithubSection() {
  const { classes, cx } = useStyles()

  const title = 'My Open source github'
  const description = 'My activities on open source github.'

  const data = MOCK_DATA

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

      <Container size={560} p={0}>
        <Image
          mt="md"
          src="https://github-readme-stats.vercel.app/api?username=masb0ymas&show_icons=true&hide_border=true&theme=vue-dark"
          alt="my github board"
        />
      </Container>
    </Container>
  )
}

export default GithubSection
