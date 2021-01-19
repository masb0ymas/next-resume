import React from 'react'
import cx from 'classnames'
import CardImage from 'components/Card/CardImage'
import SectionGrey from 'components/Section/SectionGrey'

function Skill() {
  const skills = [
    {
      imageCover: 'https://picsum.photos/600/400/?random',
      imageLogo:
        'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      title: 'Indramayu All in One',
      subtitle: 'Full Stack ( Frontend & Backend )',
      periode: 'Nov 2018 - Sep 2019',
      link: '',
    },
    {
      imageCover: 'https://picsum.photos/600/400/?random',
      imageLogo:
        'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      title: 'Indramayu Kependudukan',
      subtitle: 'Full Stack ( Frontend & Backend )',
      periode: 'Feb 2019 - Desc 2019',
      link: '',
    },
    {
      imageCover: 'https://picsum.photos/600/400/?random',
      imageLogo:
        'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      title: 'SIMPEL - Kementan',
      subtitle: 'Full Stack ( Frontend & Backend )',
      periode: 'Aug 2019 - Mar 2020',
      link: '',
    },
    {
      imageCover: 'https://picsum.photos/600/400/?random',
      imageLogo:
        'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      title: 'Aplikasi Nota Dinas Elektronik ( Nadine ) - Kemenkeu',
      subtitle: 'Backend ( Microservice )',
      periode: 'May 2020 - Nov 2020',
      link: '',
    },
    {
      imageCover: 'https://picsum.photos/600/400/?random',
      imageLogo:
        'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      title: 'BRI Agro Learning',
      subtitle: 'Full Stack ( Frontend, Backend & Mobile )',
      periode: 'Desc 2020 - Present',
      link: '',
    },
  ]

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
        <ul className="flex items-center justify-center pb-8">
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

        <div className={cx('grid grid-cols-3 gap-6')}>
          {skills.map((item) => (
            <div className="col-auto">
              <CardImage
                imageCover={item.imageCover}
                imageLogo={item.imageLogo}
                title={item.title}
                subtitle={item.subtitle}
                periode={item.periode}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionGrey>
  )
}

export default Skill
