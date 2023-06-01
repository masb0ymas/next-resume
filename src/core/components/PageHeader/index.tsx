import {
  ActionIcon,
  createStyles,
  Grid,
  Group,
  Text,
  Title,
} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import _ from 'lodash'

interface PageHeaderProps {
  title: string
  subTitle?: string | null
  onBack?: () => void
  children?: React.ReactNode
}

export const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 600,
    fontFamily: `${theme.fontFamily}`,
  },
}))

function PageHeader(props: PageHeaderProps) {
  const { title, subTitle, children, onBack } = props
  const { classes } = useStyles()

  return (
    <Grid columns={24}>
      <Grid.Col xs={_.isEmpty(children) ? 24 : 12}>
        <Group spacing="sm" my="auto">
          {onBack && (
            <ActionIcon component="a" onClick={onBack}>
              <IconArrowLeft size={18} />
            </ActionIcon>
          )}

          <Title size="h3" className={classes.title}>
            {title}
          </Title>

          {subTitle && <Text weight={400}>{subTitle}</Text>}
        </Group>
      </Grid.Col>

      {children && (
        <Grid.Col xs={12} style={{ textAlign: 'right' }}>
          {children}
        </Grid.Col>
      )}
    </Grid>
  )
}

export default PageHeader
