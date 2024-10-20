const logos = [
  { src: "/static/brand/slack.svg", alt: "Slack" },
  { src: "/static/brand/sentry.svg", alt: "Sentry" },
  { src: "/static/brand/framer.svg", alt: "Framer" },
  { src: "/static/brand/cloudflare.svg", alt: "Cloudflare" },
  { src: "/static/brand/docker.svg", alt: "Docker" },
  { src: "/static/brand/github.svg", alt: "Github" },
  { src: "/static/brand/atlassian.svg", alt: "Atlassian" },
]

export default function LogoCarousel() {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((item, index) => (
          <li key={index}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((item, index) => (
          <li key={index}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}
