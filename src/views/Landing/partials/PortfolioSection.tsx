import {
  AspectRatio,
  Avatar,
  Card,
  Container,
  createStyles,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

export const MOCK_DATA = [
  {
    id: 1,
    src: '/static/website-app-karcisbola.png',
    logoSrc: '/static/karcisbola-logo.png',
    title: 'Karcisbola',
    description: 'Fullstack ( Frontend & Backend )',
  },
  {
    id: 2,
    src: '/static/website-bri-agro-learning.png',
    logoSrc: '/static/bri-agro-logo.png',
    title: 'BRI Agro Learning',
    description: 'Fullstack ( Frontend, Backend, Mobile )',
  },
  {
    id: 3,
    src: '/static/website-nadine.png',
    logoSrc: '/static/kemenkeu-logo.png',
    title: 'Nadine (Kemenkeu)',
    description: 'Backend ( Microservice )',
  },
  {
    id: 4,
    src: '/static/website-kementan.png',
    logoSrc: '/static/kementan-logo.png',
    title: 'SIMPEL (Kementan)',
    description: 'Fullstack ( Frontend & Backend )',
  },
  {
    id: 5,
    src: '/static/website-indramayu-kependudukan.png',
    logoSrc: '/static/indramayu-logo.jpg',
    title: 'Indramayu Kependudukan',
    description: 'Fullstack ( Frontend & Backend )',
  },
  {
    id: 6,
    src: '/static/website-indramayu-satu.png',
    logoSrc: '/static/indramayu-logo.jpg',
    title: 'Indramayu All In One',
    description: 'Fullstack ( Frontend & Backend )',
  },
]

interface FeatureProps {
  id: number
  src: string
  logoSrc: string
  title: React.ReactNode
  description: React.ReactNode
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontWeight: 600,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

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

  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
}))

export function Feature({
  id,
  src,
  logoSrc,
  title,
  description,
}: FeatureProps) {
  const { classes } = useStyles()

  return (
    <Card
      key={id}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={src} alt={`${title}`} fit="contain" />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {title}
      </Text>

      <Group position="apart" mt={5}>
        <Text
          className={classes.description}
          style={{ textAlign: 'left', fontWeight: 900 }}
        >
          {description}
        </Text>

        <Avatar src={logoSrc} />
      </Group>
    </Card>
  )
}

function PortfolioSection() {
  const { classes } = useStyles()

  const title = 'Skill & Portfolio'
  const description =
    'My skills and experience gained while working on projects.'

  const data = MOCK_DATA

  const features = data.map((feature) => (
    <Feature {...feature} key={feature.id} />
  ))

  return (
    <Container className={classes.wrapper} size={1280}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="lg" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={40}
        cols={3}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}

export default PortfolioSection
