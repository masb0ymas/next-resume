import { createStyles, rem } from '@mantine/core'

const portfolioStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(96),
    paddingBottom: rem(96),
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
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
}))

export default portfolioStyles
