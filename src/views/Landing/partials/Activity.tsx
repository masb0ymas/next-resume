import React from 'react'
import cx from 'classnames'
import Section from 'components/Section/partials/Experience'

function Activity() {
  return (
    <Section
      title={'Open source github'}
      subtitle={`
      My activities on open source github
      `}
    >
      <div className={cx('grid grid-rows-3 grid-flow-col gap-4')}>
        <div className="row-span-3">
          <div className="my-2">
            <a href="https://github.com/masb0ymas/boilerplate-express-typescript-sequelize">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=boilerplate-express-typescript-sequelize&theme=vue-dark" />
            </a>
          </div>
          <div className="my-2">
            <a href="https://github.com/masb0ymas/express-gateway-typescript">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=express-gateway-typescript&theme=vue-dark" />
            </a>
          </div>
          <div className="my-2">
            <a href="https://github.com/masb0ymas/express-mongoose-typescript">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=express-mongoose-typescript&theme=vue-dark" />
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <img
            className="text-center flex flex-col justify-center"
            src="https://github-readme-stats.vercel.app/api?username=masb0ymas&show_icons=true&hide_border=true&theme=vue-dark"
            alt="my board github"
          />
        </div>
        <div className="col-span-2">
          <a href="https://github.com/masb0ymas/koala-sequelize-typescript">
            <img src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=koala-sequelize-typescript&theme=vue-dark" />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Activity
