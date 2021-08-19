import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Divider } from 'antd'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import './_slickTheme.css'
import './_slick.css'

function MyGithub() {
  const data = [
    {
      id: 1,
      title: 'expresso',
      urlRepo: 'https://github.com/masb0ymas/expresso',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso&theme=vue-dark',
    },
    {
      id: 2,
      title: 'expresso-mongose',
      urlRepo: 'https://github.com/masb0ymas/expresso-mongose',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-mongose&theme=vue-dark',
    },
    {
      id: 3,
      title: 'expresso-gateway',
      urlRepo: 'https://github.com/masb0ymas/expresso-gateway',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-gateway&theme=vue-dark',
    },
    {
      id: 4,
      title: 'express-functions-typescript',
      urlRepo: 'https://github.com/masb0ymas/express-functions-typescript',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=express-functions-typescript&theme=vue-dark',
    },
    {
      id: 5,
      title: 'nexys',
      urlRepo: 'https://github.com/chornos13/nexys',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=chornos13&repo=nexys&theme=vue-dark',
    },
    {
      id: 6,
      title: 'gintama',
      urlRepo: 'https://github.com/masb0ymas/gintama',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=gintama&theme=vue-dark',
    },
  ]

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <Title color="#269e9a">{`My Open source github`}</Title>
      <Text>{`My activities on open source github`}</Text>

      <Divider />

      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link href={item.urlRepo} key={item.id}>
              <a>
                <img src={item.urlImage} alt={item.title} width="100%" />
              </a>
            </Link>
          )
        })}
      </Slider>
    </React.Fragment>
  )
}

export default MyGithub
