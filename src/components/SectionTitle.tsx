import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  title: string
  sub?: string
}

export const SectionTitle = ({ title, sub }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { y: 20, opacity: 0, filter: "blur(4px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
        },
      },
    )
  }, [])

  return (
    <div ref={ref} style={styles.wrap}>
      <h2 style={styles.title}>{title}</h2>
      {sub && <p style={styles.sub}>{sub}</p>}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    marginBottom: 48,
    opacity: 0,
  },
  title: {
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 700,
    letterSpacing: "0.05em",
    lineHeight: 1.2,
  },
  sub: {
    marginTop: 12,
    fontSize: 14,
    color: "var(--color-text-secondary)",
    letterSpacing: "0.02em",
  },
}
