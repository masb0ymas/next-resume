import { Avatar, Center, createStyles, Stack, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.blue[6],
    // backgroundImage: theme.fn.linearGradient(
    //   0,
    //   theme.colors.indigo[6],
    //   theme.colors.cyan[6],
    // ),
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },

  avatar: {
    height: '20vmin',
    width: '20vmin',
    borderRadius: '72px',
    pointerEvents: 'none',
    background: 'white',
    fontSize: '20vmin',
    lineHeight: '20vmin',
    animation: 'pulse infinite 1.2s linear',
  },

  anim: {
    animation: 'pulse infinite 0.6s linear',
  },

  '@global': {
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(0.7)',
        boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)',
      },

      '70%': {
        transform: 'scale(0.8)',
        boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)',
      },

      '100%': {
        transform: 'scale(0.7)',
        boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
      },
    },
  },
}))

interface VerifyPageProps {
  loading: boolean
}

function VerifyPage(props: VerifyPageProps) {
  const { loading } = props

  const { classes, cx } = useStyles()

  const githubPicture =
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

  return (
    <div className={classes.wrapper}>
      <Center>
        <Stack spacing="xs" align="center">
          <Avatar
            src={githubPicture}
            className={cx(classes.avatar, { [classes.anim]: loading })}
          />
          <Text size="lg">Wait a moment . . .</Text>
        </Stack>
      </Center>
    </div>
  )
}

export default VerifyPage
