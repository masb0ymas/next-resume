type IProps = {
  data: {
    src: string
    alt: string
  }[]
}

export default function ProjectCarousel(props: IProps) {
  const logos = props.data

  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
        {logos.map((item, index) => (
          <li key={index} className="text-center">
            <a href="#">
              <img className="h-72 w-auto mb-2" src={item.src} alt={item.alt} />
              <span className="text-gray-200">{item.alt}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
        aria-hidden="true"
      >
        {logos.map((item, index) => (
          <li key={index} className="text-center">
            <a href="#">
              <img className="h-72 w-auto mb-2" src={item.src} alt={item.alt} />
              <span className="text-gray-200">{item.alt}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
