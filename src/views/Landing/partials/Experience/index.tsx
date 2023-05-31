import {
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { IconDeviceLaptop, IconDevices, IconSocial } from '@tabler/icons-react'
import { formatDistance } from 'date-fns'
import React from 'react'
import MyFrameMotion from '~/core/components/MyFrameMotion'
import dummyData from '~/data/dummy/experience.json'
import experienceStyle from './styles'

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
  const { classes } = experienceStyle()

  let renderIcon: React.ReactNode

  switch (icon) {
    case 'device':
      renderIcon = <IconDevices size={28} stroke={1.5} />
      break

    case 'device-laptop':
      renderIcon = <IconDeviceLaptop size={28} stroke={1.5} />
      break

    case 'social':
      renderIcon = <IconSocial size={28} stroke={1.5} />
      break

    default:
      renderIcon = <IconDevices size={28} stroke={1.5} />
      break
  }

  return (
    <MyFrameMotion>
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
            {renderIcon}
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
              {formatDistance(new Date(distance), new Date())}
            </Text>
          </Group>
        </Stack>

        <Text size="md" mt="sm">
          {description}
        </Text>
      </Paper>
    </MyFrameMotion>
  )
}

function ExperienceSection() {
  const { classes } = experienceStyle()

  const title = 'Experience'
  const description = 'My experience in both work and community.'

  const { data } = dummyData

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
