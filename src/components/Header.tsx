import { useState } from "react"

type Props = {
  pathname: string
}

const navItems = [
  { href: "/", label: "Top" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const Header = ({ pathname }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <a href="/" style={styles.logo}>
          ROTO
        </a>

        <nav style={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                ...styles.navLink,
                color: isActive(item.href) ? "#1a1a1a" : "#6b6b6b",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          style={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span
            style={{
              ...styles.menuLine,
              transform: isOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            style={{
              ...styles.menuLine,
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              ...styles.menuLine,
              transform: isOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </div>

      {isOpen && (
        <div style={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                ...styles.mobileNavLink,
                color: isActive(item.href) ? "#1a1a1a" : "#6b6b6b",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "rgba(250, 250, 250, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--color-border)",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "0.05em",
    color: "#1a1a1a",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: 32,
  },
  navLink: {
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s",
    letterSpacing: "0.02em",
  },
  menuButton: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    padding: 4,
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  menuLine: {
    display: "block",
    width: 20,
    height: 1.5,
    backgroundColor: "#1a1a1a",
    transition: "all 0.3s ease",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px 24px",
    gap: 16,
    borderBottom: "1px solid var(--color-border)",
  },
  mobileNavLink: {
    fontSize: 16,
    fontWeight: 500,
    textDecoration: "none",
    padding: "8px 0",
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = `
    @media (max-width: 768px) {
      header nav { display: none !important; }
      header button[aria-label="Menu"] { display: flex !important; }
    }
  `
  document.head.appendChild(style)
}
