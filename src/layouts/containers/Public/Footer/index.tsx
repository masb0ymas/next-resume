import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  rem,
  Text,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
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

  floatButton: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#4dc247',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    zIndex: 9999,
  },
}))

const data = [
  {
    label: 'Linked in',
    url: 'https://www.linkedin.com/in/masb0ymas/',
    icon: <IconBrandLinkedin size={24} stroke={1.5} />,
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/masb0ymas',
    icon: <IconBrandTwitter size={24} stroke={1.5} />,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100000480470670',
    icon: <IconBrandFacebook size={24} stroke={1.5} />,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/masb0ymas/',
    icon: <IconBrandInstagram size={24} stroke={1.5} />,
  },
  {
    label: 'Mastodon',
    url: 'https://mastodon.social/@masb0ymas',
    icon: <IconBrandMastodon size={24} stroke={1.5} />,
  },
]

function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={1280}>
        <Link
          href="https://github.com/masb0ymas"
          passHref
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <UnstyledButton>
            <Tooltip
              label="Github"
              transitionProps={{ transition: 'pop', duration: 300 }}
            >
              <Group noWrap spacing="xs">
                <IconBrandGithub size={28} />
                <Text style={{ fontWeight: 600 }}>@masb0ymas</Text>
              </Group>
            </Tooltip>
          </UnstyledButton>
        </Link>

        <Group spacing={5} className={classes.links} position="right" noWrap>
          {data.map((item) => {
            return (
              <Tooltip
                label={item.label}
                transitionProps={{ transition: 'pop', duration: 300 }}
                key={item.label}
              >
                <Link href={item.url} passHref target="_blank">
                  <ActionIcon size="lg">{item.icon}</ActionIcon>
                </Link>
              </Tooltip>
            )
          })}
        </Group>
      </Container>

      <Link
        href="https://api.whatsapp.com/send/?phone=+6287837554403&text=Hi, I am interested in your portfolio, would you be willing to discuss it with me?"
        passHref
      >
        <Tooltip
          label="Hire me..."
          position="left"
          withArrow
          transitionProps={{ transition: 'slide-left', duration: 300 }}
        >
          <UnstyledButton className={classes.floatButton}>
            <IconBrandWhatsapp size={40} />
          </UnstyledButton>
        </Tooltip>
      </Link>
    </div>
  )
}

export default Footer
