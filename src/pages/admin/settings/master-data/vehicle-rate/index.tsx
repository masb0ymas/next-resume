import { NextPageContext } from 'next'
import Master from 'views/Admin/Settings/Master'

export const getServerSideProps = async (ctx: NextPageContext) => {
  return {
    props: {
      query: ctx.query,
    },
  }
}

export default Master
