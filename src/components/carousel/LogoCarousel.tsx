type IProps = {
  data: {
    src: string
    alt: string
  }[]
}

export default function LogoCarousel(props: IProps) {
  const logos = props.data

  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}
