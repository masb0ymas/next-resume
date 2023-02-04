import { createStyles } from '@mantine/core'

const githubStyles = createStyles((theme) => ({
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
}))

export default githubStyles
