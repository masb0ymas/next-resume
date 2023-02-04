import dummyData from '@data/dummy/portfolio.json'
import {
  AspectRatio,
  Avatar,
  Card,
  Container,
  Divider,
  Group,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import { useState } from 'react'
import portfolioStyles from './styles'

interface FeatureProps {
  id: number
  src: string
  logoSrc: string
  title: string
  job: string
  stack: string
  description: string
}

export function Feature({
  id,
  src,
  logoSrc,
  title,
  job,
  stack,
  description,
}: FeatureProps) {
  const { classes } = portfolioStyles()
  const [opened, setOpened] = useState(false)

  return (
    <>
      <UnstyledButton onClick={() => setOpened(true)}>
        <Card key={id} p="md" radius="md" withBorder className={classes.card}>
          <AspectRatio ratio={16 / 9}>
            <Image src={src} alt={`${title}`} fit="contain" />
          </AspectRatio>

          <Text
            color="dimmed"
            size="xs"
            transform="uppercase"
            weight={700}
            mt="md"
          >
            {title}
          </Text>

          <Group position="apart" mt={5}>
            <Text
              className={classes.description}
              style={{ textAlign: 'left', fontWeight: 900 }}
            >
              {job}
            </Text>

            <Avatar src={logoSrc} />
          </Group>
        </Card>
      </UnstyledButton>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={`${title} - ${job}`}
        size="70%"
      >
        <Divider my="lg" variant="dashed" />

        <Image src={src} alt={`${title}`} fit="contain" />

        <Divider my="lg" variant="dashed" />

        <Stack spacing="sm">
          <Group>
            <Text weight={600}>Job : </Text>
            <Text>{job}</Text>
          </Group>

          <Group>
            <Text weight={600}>Stack : </Text>
            <Text>{stack}</Text>
          </Group>

          <Group>
            <Text weight={600}>Description : </Text>
            <Text>{description}</Text>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}

function PortfolioSection() {
  const { classes } = portfolioStyles()

  const title = 'Skill & Portfolio'
  const description =
    'My skills and experience gained while working on projects.'

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
