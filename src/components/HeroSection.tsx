import { useEffect, useRef } from "react"
import gsap from "gsap"

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2 },
    )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
        "-=0.6",
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4",
      )
  }, [])

  return (
    <section ref={containerRef} style={styles.hero}>
      <div style={styles.content}>
        <div ref={lineRef} style={styles.line} />
        <h1 ref={titleRef} style={styles.title}>
          ROTO
        </h1>
        <p ref={subtitleRef} style={styles.subtitle}>
          Video / Motion Graphics / Web
        </p>
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    minHeight: "80dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  line: {
    width: 48,
    height: 1,
    backgroundColor: "#1a1a1a",
    transformOrigin: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: "clamp(48px, 10vw, 96px)",
    fontWeight: 700,
    letterSpacing: "0.15em",
    lineHeight: 1,
    opacity: 0,
  },
  subtitle: {
    fontSize: "clamp(13px, 2vw, 16px)",
    color: "#6b6b6b",
    letterSpacing: "0.1em",
    fontWeight: 400,
    opacity: 0,
  },
}
