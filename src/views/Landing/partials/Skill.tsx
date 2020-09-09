import React from 'react'
import cx from 'classnames'
import CardImage from 'components/Card/CardImage'
import SectionGrey from 'components/Section/SectionGrey'

function Skill() {
  return (
    <SectionGrey>
      <div>
        <p className={cx('text-3xl font-medium mb-8 text-center')}>
          Skill & Portfolio
        </p>
        <p className={cx('text-center')}>
          My skills and experience gained while working on projects
        </p>
      </div>

      <div className={cx('my-8 mx-auto')}>
        <ul className="flex items-center justify-center">
          <li className="mr-3">
            <button
              className="text-center block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
              type="button"
            >
              All
            </button>
          </li>
          <li className="mr-3">
            <button
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
              type="button"
            >
              Web Design
            </button>
          </li>
          <li className="mr-3">
            <button
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
              type="button"
            >
              Frontend
            </button>
          </li>
          <li className="mr-3">
            <button
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
              type="button"
            >
              Backend
            </button>
          </li>
          <li className="mr-3">
            <button
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
              type="button"
            >
              Mobile Apps
            </button>
          </li>
          <li className="mr-3">
            <button
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
              type="button"
            >
              Other
            </button>
          </li>
        </ul>

        <div className={cx('flex flex-wrap -mx-1 lg:-mx-4 my-6')}>
          <CardImage
            imageCover={'https://picsum.photos/600/400/?random'}
            imageLogo={
              'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
            }
            title={'Project Title'}
            subtitle={'Project Sub Title'}
            periode={'11/1/19'}
          />

          <CardImage
            imageCover={'https://picsum.photos/600/400/?random'}
            imageLogo={
              'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
            }
            title={'Project Title'}
            subtitle={'Project Sub Title'}
            periode={'11/1/19'}
          />

          <CardImage
            imageCover={'https://picsum.photos/600/400/?random'}
            imageLogo={
              'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
            }
            title={'Project Title'}
            subtitle={'Project Sub Title'}
            periode={'11/1/19'}
          />
        </div>
      </div>
    </SectionGrey>
  )
}

export default Skill
