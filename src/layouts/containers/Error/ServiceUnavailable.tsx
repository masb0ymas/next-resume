import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  rem,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 120,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: rem(460),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
  },
}))

function ServiceUnavailable() {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>503</div>
        <Title className={classes.title}>All of our servers are busy</Title>
        <Text size="lg" align="center" className={classes.description}>
          We cannot handle your request right now, please wait for a couple of
          minutes and refresh the page. Our team is already working on this
          issue.
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  )
}

export default ServiceUnavailable
