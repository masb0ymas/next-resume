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
import { IconDeviceLaptop, IconDevices, IconSocial } from '@tabler/icons'
import { formatDistance } from 'date-fns'

export const MOCK_DATA = [
  {
    id: 1,
    title: 'Karcisbola',
    subTitle: 'Software Engineer ( Fulltime )',
    icon: <IconDevices size={28} stroke={1.5} />,
    description:
      'With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.',
    period: 'Mar 2021 - Present',
    distance: formatDistance(new Date('2021-03-01'), new Date()),
    isActive: true,
  },
  {
    id: 2,
    title: 'Nusantech',
    subTitle: 'Fullstack Developer ( Fulltime )',
    icon: <IconDevices size={28} stroke={1.5} />,
    description:
      'With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.',
    period: 'Sep 2020 - Mar 2021',
    distance: formatDistance(new Date('2020-09-01'), new Date('2021-03-01')),
    isActive: false,
  },
  {
    id: 3,
    title: 'Nusantech',
    subTitle: 'Web Developer ( Fulltime )',
    icon: <IconDeviceLaptop size={28} stroke={1.5} />,
    description:
      'The development of an application using the sprint method, the task that is carried out becomes more neat and directed. I also explore various programming languages. and I build a coding standard that is used in the office, especially for projects and products.',
    period: 'Jun 2019 - Sep 2020',
    distance: formatDistance(new Date('2019-06-01'), new Date('2020-09-01')),
    isActive: false,
  },
  {
    id: 4,
    title: 'Minang IT Camp',
    subTitle: 'Minang Programmer Community',
    icon: <IconSocial size={28} stroke={1.5} />,
    description:
      'I joined this community at the end of 2017. I learned a lot here from versioning with git, learning coding with case studies, and managing a project in the field. And now I manage this community both in terms of websites and participants who want to learn together.',
    period: 'Okt 2017 - Present',
    distance: formatDistance(new Date('2017-10-01'), new Date()),
    isActive: true,
  },
]

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  colorTheme: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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
        theme.colors.gray[6],
        '#FFFFFF',
      ),
    },
  },

  cardActive: {
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
  distance: string
  description: React.ReactNode
  isActive: boolean
  icon: React.ReactNode
}

function Feature({
  id,
  title,
  subTitle,
  description,
  period,
  distance,
  isActive,
  icon,
}: FeatureProps) {
  const { classes } = useStyles()

  return (
    <Paper
      withBorder
      radius="md"
      className={isActive ? classes.cardActive : classes.card}
      key={id}
    >
      <Group>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={
            isActive
              ? { deg: 0, from: 'cyan', to: 'blue' }
              : { deg: 0, from: 'gray', to: '#0e0e0e' }
          }
        >
          {icon}
        </ThemeIcon>
        <Text size="xl" weight={600} className={classes.colorTheme}>
          {title}
        </Text>
      </Group>

      <Stack spacing={5}>
        <Text size="lg" weight={600} mt="md" className={classes.colorTheme}>
          {subTitle}
        </Text>

        <Group position="apart">
          <Text size="sm" weight={500} color="dimmed">
            {period}
          </Text>

          <Text size="sm" weight={500} color="dimmed">
            {distance}
          </Text>
        </Group>
      </Stack>

      <Text size="md" mt="sm">
        {description}
      </Text>
    </Paper>
  )
}

function ExperienceSection() {
  const { classes } = useStyles()

  const title = 'Experience'
  const description = 'My experience in both work and community.'

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

export default ExperienceSection
