import { useEffect, useRef } from "react"
import gsap from "gsap"

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const lines = root.querySelectorAll("[data-hero-line]")

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(lines, { opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { y: 24, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,filter",
        },
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="container" style={styles.hero}>
      <h1 style={styles.title} aria-label="映像で培った表現力を、Webに。">
        <span data-hero-line style={styles.line} aria-hidden="true">映像で培った表現力を、</span>
        <span data-hero-line style={styles.line} aria-hidden="true">Webに。</span>
      </h1>
      <div style={styles.side}>
        <p data-hero-line style={styles.lead}>
          フロントエンドからバックエンド、インフラまで。モーショングラフィックス・映像制作の経験を活かして、Webをつくっています。
        </p>
        <p data-hero-line style={styles.fields}>Web / Motion Graphics / Video</p>
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px 64px",
    paddingTop: "clamp(64px, 12vw, 160px)",
    paddingBottom: "clamp(16px, 4vw, 48px)",
  },
  title: {
    fontSize: "clamp(30px, 5.2vw, 60px)",
    fontWeight: 700,
    lineHeight: 1.35,
    letterSpacing: "0.02em",
  },
  line: {
    display: "block",
    opacity: 0,
  },
  side: {
    flex: "0 1 360px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  lead: {
    fontSize: 14,
    lineHeight: 1.9,
    color: "var(--color-text-secondary)",
    opacity: 0,
  },
  fields: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.1em",
    color: "var(--color-text)",
    opacity: 0,
  },
}
