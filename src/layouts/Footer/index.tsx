import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={1280}>
        <Link href="https://github.com/masb0ymas" passHref>
          <UnstyledButton component="a">
            <Group noWrap spacing="xs">
              <IconBrandGithub size={28} />
              <Text style={{ fontWeight: 600 }}>@masb0ymas</Text>
            </Group>
          </UnstyledButton>
        </Link>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://twitter.com/masb0ymas" passHref>
            <ActionIcon size="lg" component="a">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </Link>

          <Link href="https://www.instagram.com/masb0ymas/" passHref>
            <ActionIcon size="lg" component="a">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  )
}

export default Footer
