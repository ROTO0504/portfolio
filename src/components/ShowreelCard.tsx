import { useEffect, useRef, useState } from "react"

export const ShowreelCard = () => {
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
    <div style={styles.wrapper}>
      <div
        style={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={styles.thumb}>
          <img
            src="https://img.youtube.com/vi/10331qcWriU/maxresdefault.jpg"
            alt="Showreel 2024"
            style={{ ...styles.img, opacity: showVideo ? 0 : 1 }}
          />
          <video
            ref={videoRef}
            src="https://pub-cc5a3f2a83ec4ac48898b31a8e6bd165.r2.dev/videos/REEL2024.webm"
            muted
            loop
            playsInline
            preload="none"
            onCanPlayThrough={() => setVideoReady(true)}
            style={{ ...styles.video, opacity: showVideo ? 1 : 0 }}
          />
        </div>
        <div style={styles.footer}>
          <span style={styles.label}>Showreel 2024</span>
          <a
            href="https://www.youtube.com/watch?v=10331qcWriU"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ytButton}
            className="yt-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
            YouTube で見る
          </a>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "relative" as const,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid var(--color-border)",
    transition: "transform 0.3s var(--ease-out-expo), box-shadow 0.3s",
  },
  thumb: {
    aspectRatio: "16 / 9",
    background: "var(--color-dark)",
    position: "relative" as const,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
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
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
  ytButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    fontWeight: 600,
    color: "var(--color-text-secondary)",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 100,
    border: "1px solid var(--color-border)",
    transition: "all 0.2s",
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    .yt-btn:hover { border-color: #ff0000; color: #ff0000 !important; }
  `
  document.head.appendChild(style)
}
