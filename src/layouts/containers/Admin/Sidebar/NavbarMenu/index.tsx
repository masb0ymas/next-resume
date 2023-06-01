import { createStyles, NavLink } from '@mantine/core'
import _ from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useMenuSidebar, { MainLinkProps } from '~/data/query/useMenuSidebar'

const useStyles = createStyles((theme) => ({
  rootLink: {
    fontWeight: 500,
    textDecoration: 'none',
  },
  navLink: {
    fontSize: theme.fontSizes.md,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  link: {
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    paddingLeft: '20px',
    paddingRight: '20px',
    marginLeft: '20px',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    width: 'auto',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}))

function MainLink(item: MainLinkProps) {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <Link href={item.link ?? '#'} key={item.label} className={classes.rootLink}>
      <NavLink
        label={item.label}
        icon={item.icon}
        component="a"
        href={item.link ?? '#'}
        childrenOffset={0}
        className={classes.navLink}
        active={router.pathname === item.link}
      >
        {!_.isEmpty(item.links) &&
          _.isArray(item.links) &&
          item.links.map((child) => (
            <Link
              href={child.link ?? '#'}
              key={child.label}
              className={classes.rootLink}
            >
              <NavLink
                label={child.label}
                icon={child.icon}
                component="a"
                href={child.link ?? '#'}
                className={classes.link}
                active={router.pathname === child.link}
              />
            </Link>
          ))}
      </NavLink>
    </Link>
  )
}

export default function AdminNavbarMenus() {
  const queryMenuSidebar = useMenuSidebar()
  const { data } = queryMenuSidebar

  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
