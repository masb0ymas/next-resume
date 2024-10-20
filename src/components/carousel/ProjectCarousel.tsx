import clsx from "clsx"

type IProps = {
  data: {
    thumbnail: string
    title: string
    slug: string | null
  }[]
  imgStyle?: string
}

export default function ProjectCarousel(props: IProps) {
  const projects = props.data
  const { imgStyle } = props

  function Carousel() {
    return projects.map((item, index) => {
      const link = item.slug ? `/project/${item.slug}` : "#"

      return (
        <li key={index} className="text-center">
          <a href={link}>
            <img
              className={clsx("h-72 w-auto mb-2", imgStyle)}
              src={item.thumbnail}
              alt={item.title}
            />
            <span className="text-gray-200 font-semibold">{item.title}</span>
          </a>
        </li>
      )
    })
  }

  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
        {Carousel()}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
        aria-hidden="true"
      >
        {Carousel()}
      </ul>
    </div>
  )
}
