import Dots from '@core/components/Dots'
import {
  Container,
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { IconSchool } from '@tabler/icons'
import React from 'react'

export const MOCK_DATA = [
  {
    id: 1,
    title: 'Computer Science',
    subTitle: 'Universitas Putra Indonesia YPTK Padang',
    description:
      'I continue my education in computer science, understand how to analyze a problem and find a solution, then this is applied to an application / software. Besides that, we also understand AI in broad outline, not in detail, such as: machine learning, deep learning, and neural networks.',
    period: 'Agust 2013 - Mar 2017',
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

  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.blue[6],
        theme.colors.cyan[6],
      ),
    },
  },
}))

interface FeatureProps {
  id: number
  title: string
  subTitle: string
  period: string
  description: React.ReactNode
}

function Feature({ id, title, subTitle, description, period }: FeatureProps) {
  const { classes } = useStyles()

  return (
    <Paper withBorder radius="md" className={classes.card} key={id}>
      <Group>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'cyan', to: 'blue' }}
        >
          <IconSchool size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" weight={500}>
          {title}
        </Text>
      </Group>

      <Stack spacing={5}>
        <Text size="lg" weight={600} mt="md">
          {subTitle}
        </Text>

        <Text size="sm" weight={500} color="dimmed">
          {period}
        </Text>
      </Stack>

      <Text size="md" mt="sm">
        {description}
      </Text>
    </Paper>
  )
}

function EducationSection() {
  const { classes, cx } = useStyles()

  const title = 'Education & Certification'
  const description = 'Education and certification that I have obtained.'

  const data = MOCK_DATA

  const features = data.map((feature) => (
    <Feature {...feature} key={feature.id} />
  ))

  return (
    <Container className={cx(classes.inner, classes.wrapper)} size={1280}>
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
        cols={2}
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

export default EducationSection
