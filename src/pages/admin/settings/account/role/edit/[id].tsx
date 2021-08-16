import { NextPageContext } from 'next'
import { FormEdit } from 'views/Admin/Settings/Account/Role/Form'

export const getServerSideProps = async (ctx: NextPageContext) => {
  return {
    props: {
      query: ctx.query,
    },
  }
}

export default FormEdit
