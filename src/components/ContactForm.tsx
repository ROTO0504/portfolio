import { useEffect, useRef } from "react"
import gsap from "gsap"

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    )
  }, [])

  return (
    <div ref={ref} style={styles.wrap}>
      <p style={styles.lead}>
        映像制作・モーショングラフィックス・Web制作のご相談はお気軽にどうぞ。
      </p>
      <a href="mailto:contact@roto.work" style={styles.email}>
        contact@roto.work
      </a>
      <div style={styles.links}>
        <a
          href="https://www.youtube.com/@roto_works"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          YouTube
        </a>
        <span style={styles.dot} />
        <a
          href="https://x.com/ROTO_and"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          X
        </a>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    textAlign: "center",
    padding: "80px 0",
    opacity: 0,
  },
  lead: {
    fontSize: 15,
    color: "var(--color-text-secondary)",
    lineHeight: 1.8,
    marginBottom: 32,
  },
  email: {
    display: "inline-block",
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: "var(--color-text)",
    textDecoration: "none",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease, color 0.3s ease",
    paddingBottom: 4,
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 40,
  },
  link: {
    fontSize: 14,
    color: "var(--color-text-secondary)",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    backgroundColor: "var(--color-border)",
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .contact-section a[href^="mailto"]:hover { border-color: var(--color-accent); color: var(--color-accent); }
    .contact-section a:hover { color: var(--color-text) !important; }
  `
  document.head.appendChild(style)
}
