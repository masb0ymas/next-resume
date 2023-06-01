import { Center, Footer } from '@mantine/core'
import { BRAND } from '~/config/env'

function AdminFooterLayout() {
  const dateNow = new Date()
  const yearNow = dateNow.getFullYear()

  return (
    <Footer height={60} p="md" style={{ fontSize: 14 }}>
      <Center>
        &copy; {`${yearNow} Created by`}&nbsp;
        <b>{BRAND}</b>
      </Center>
    </Footer>
  )
}

export default AdminFooterLayout
