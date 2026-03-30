import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type BoothItem = {
  id: string
  title: string
  description: string
  imageUrl: string
  boothUrl: string
  backgroundMovie?: string
}

const boothItems: BoothItem[] = [
  {
    id: "fx-console",
    title: "FX Console - ローマ字対応",
    description:
      "After Effectsの「FX Console」プラグインの設定ファイル。ローマ字でエフェクトを検索できるようになります。",
    imageUrl: "/booth-fxconsole.jpg",
    boothUrl: "https://booth.pm/ja/items/6176975",
    backgroundMovie: "https://pub-cc5a3f2a83ec4ac48898b31a8e6bd165.r2.dev/videos/FXConsole.webm",
  },
]

const BoothCardItem = ({ item }: { item: BoothItem }) => {
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
    <div
      className="booth-card"
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={`/downloads/${item.id}`} style={styles.cardLink}>
        <div style={{ ...styles.imageWrap, position: "relative" as const }}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              ...styles.image,
              viewTransitionName: `booth-image-${item.id}`,
              opacity: showVideo ? 0 : 1,
            }}
            loading="lazy"
          />
          {item.backgroundMovie && (
            <video
              ref={videoRef}
              src={item.backgroundMovie}
              muted
              loop
              playsInline
              preload="none"
              onCanPlayThrough={() => setVideoReady(true)}
              style={{
                position: "absolute" as const,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover" as const,
                transition: "opacity 0.3s ease",
                opacity: showVideo ? 1 : 0,
              }}
            />
          )}
        </div>
        <div style={styles.info}>
          <h3 style={styles.title}>{item.title}</h3>
          <p style={styles.desc}>{item.description}</p>
          <a
            href={item.boothUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.boothButton}
            onClick={(e) => e.stopPropagation()}
          >
            BOOTH で入手 →
          </a>
        </div>
      </a>
    </div>
  )
}

export const BoothSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".booth-card"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div ref={sectionRef}>
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>Downloads</h2>
        <p style={styles.sectionSub}>
          クリエイター向けのツール・素材を配布しています
        </p>
      </div>
      <div style={styles.list}>
        {boothItems.map((item) => (
          <BoothCardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-text-secondary)",
    marginBottom: 8,
  },
  sectionSub: {
    fontSize: 13,
    color: "var(--color-text-secondary)",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 20,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    border: "1px solid var(--color-border)",
    backgroundColor: "var(--color-white)",
    textDecoration: "none",
    color: "inherit",
    overflow: "hidden",
    transition: "transform 0.3s var(--ease-out-expo), box-shadow 0.3s ease",
    opacity: 0,
  },
  imageWrap: {
    aspectRatio: "16 / 9",
    overflow: "hidden",
    backgroundColor: "var(--color-bg-subtle)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s var(--ease-out-expo)",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: "16px 20px 12px",
  },
  boothButton: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--color-accent)",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid var(--color-accent)",
    transition: "all 0.2s",
    marginTop: 8,
    alignSelf: "flex-end",
  },
  badge: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "var(--color-accent)",
    width: "fit-content",
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  desc: {
    fontSize: 13,
    color: "var(--color-text-secondary)",
    lineHeight: 1.6,
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .booth-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
    .booth-card:hover img { transform: scale(1.03); }
    .booth-card a[style*="boothButton"]:hover,
    .booth-btn:hover { background: var(--color-accent) !important; color: #fff !important; }
  `
  document.head.appendChild(style)
}
