import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Work } from "@/lib/works"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  works: Work[]
  enableViewTransition?: boolean
}

const WorkCardItem = ({ work, enableViewTransition = true }: { work: Work; enableViewTransition?: boolean }) => {
  const [hovered, setHovered] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const showVideo = hovered && videoReady

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (hovered) {
      el.play().catch(() => {})
    } else {
      el.pause()
      el.currentTime = 0
      setVideoReady(false)
    }
  }, [hovered])

  return (
    <a
      href={`/works/${work.slug}`}
      className="work-card"
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageWrap}>
        {work.eyecatch && (
          <img
            src={work.eyecatch}
            alt={work.title}
            style={{
              ...styles.image,
              ...(enableViewTransition ? { viewTransitionName: `work-image-${work.slug}` } : {}),
              opacity: showVideo ? 0 : 1,
            }}
            loading="lazy"
          />
        )}
        {work.backgroundMovie && (
          <video
            ref={videoRef}
            src={work.backgroundMovie}
            muted
            loop
            playsInline
            preload="none"
            onCanPlayThrough={() => setVideoReady(true)}
            style={{
              ...styles.video,
              opacity: showVideo ? 1 : 0,
            }}
          />
        )}
      </div>
      <div style={styles.info}>
        <div style={styles.meta}>
          {work.category && (
            <span style={styles.category}>{work.category}</span>
          )}
          <span style={styles.year}>{work.year}</span>
        </div>
        <h3 style={styles.title}>{work.title}</h3>
      </div>
    </a>
  )
}

export const WorkGrid = ({ works, enableViewTransition = true }: Props) => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const isBack =
      performance.getEntriesByType("navigation").length === 0 ||
      (window.navigation && window.navigation.currentEntry?.index !== undefined
        ? document.referrer !== ""
        : false)

    const cards = gridRef.current.querySelectorAll(".work-card")

    if (isBack || sessionStorage.getItem("works-visited")) {
      gsap.set(cards, { y: 0, opacity: 1 })
    } else {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        },
      )
    }

    sessionStorage.setItem("works-visited", "1")

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [works])

  return (
    <div ref={gridRef} style={styles.grid}>
      {works.map((work) => (
        <WorkCardItem key={work.slug} work={work} enableViewTransition={enableViewTransition} />
      ))}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
    gap: 24,
  },
  card: {
    textDecoration: "none",
    color: "inherit",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "var(--color-white)",
    border: "1px solid var(--color-border)",
    transition: "transform 0.3s var(--ease-out-expo), box-shadow 0.3s ease",
  },
  imageWrap: {
    aspectRatio: "16 / 10",
    overflow: "hidden",
    backgroundColor: "var(--color-bg-subtle)",
    position: "relative" as const,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s var(--ease-out-expo), opacity 0.3s ease",
  },
  video: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transition: "opacity 0.3s ease",
  },
  info: {
    padding: "16px 20px 20px",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--color-accent)",
    letterSpacing: "0.03em",
  },
  year: {
    fontSize: 12,
    color: "var(--color-text-secondary)",
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.5,
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .work-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
    .work-card:hover img { transform: scale(1.03); }
  `
  document.head.appendChild(style)
}
