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
import { IconSchool } from '@tabler/icons-react'
import React from 'react'
import Dots from '~/core/components/Dots'
import MyFrameMotion from '~/core/components/MyFrameMotion'
import dummyData from '~/data/dummy/education.json'
import educationStyles from './styles'

interface FeatureProps {
  id: number
  title: string
  subTitle: string
  period: string
  description: React.ReactNode
}

function Feature({ id, title, subTitle, description, period }: FeatureProps) {
  const { classes } = educationStyles()

  return (
    <MyFrameMotion>
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
    </MyFrameMotion>
  )
}

function EducationSection() {
  const { classes, cx } = educationStyles()

  const title = 'Education & Certification'
  const description = 'Education and certification that I have obtained.'

  const { data } = dummyData

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
