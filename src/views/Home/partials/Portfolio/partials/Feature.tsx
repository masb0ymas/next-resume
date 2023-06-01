/* eslint-disable react/no-unused-prop-types */
import { AspectRatio, Avatar, Card, Group, Image, Text } from '@mantine/core'
import Link from 'next/link'
import MyFrameMotion from '~/core/components/MyFrameMotion'
import portfolioStyles from '../styles'

interface FeatureProps {
  id: number
  src: string
  logoSrc: string
  title: string
  slug: string
  job: string
  stack: string
  description: string
}

function Feature({ id, src, logoSrc, title, slug, job }: FeatureProps) {
  const { classes } = portfolioStyles()

  return (
    <Link href={`/p/${slug}`} passHref style={{ textDecoration: 'none' }}>
      <MyFrameMotion>
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
      </MyFrameMotion>
    </Link>
  )
}

export default Feature
