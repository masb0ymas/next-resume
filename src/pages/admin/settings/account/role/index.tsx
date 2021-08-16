import { NextPageContext } from 'next'
import Account from 'views/Admin/Settings/Account'

export const getServerSideProps = async (ctx: NextPageContext) => {
  return {
    props: {
      query: ctx.query,
    },
  }
}

export default Account
