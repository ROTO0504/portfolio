import { useEffect, useRef, useState } from "react"

type SaveDataNavigator = Navigator & { connection?: { saveData?: boolean } }

/**
 * カードの動画を、ホバーしている間だけ再生する。
 * ホバーできない端末（スマホ・タブレット）では、カードが画面に 6 割以上入ったら再生し、外れたら止める。
 * 動きを減らす設定やデータセーバーのときは、タッチ端末でも自動では再生しない。
 */
export function useCardVideo<T extends HTMLElement>(hasVideo: boolean) {
  const cardRef = useRef<T>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card || !hasVideo) return
    if (window.matchMedia("(hover: hover)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if ((navigator as SaveDataNavigator).connection?.saveData) return

    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.6,
    })
    observer.observe(card)
    return () => observer.disconnect()
  }, [hasVideo])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (active) {
      // ClientRouter で差し替えられた <video> は読み込みに失敗した状態になっているので読み込み直す
      if (el.error || el.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) el.load()
      // iOS は消音でないと自動で再生させない。属性の反映漏れに備えてここでも消音にする
      el.muted = true
      el.play().catch(() => {})
    } else {
      el.pause()
      el.currentTime = 0
      setVideoReady(false)
    }
  }, [active])

  return {
    cardRef,
    videoRef,
    showVideo: active && videoReady,
    hoverProps: {
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false),
    },
    videoProps: {
      onCanPlayThrough: () => setVideoReady(true),
      onPlaying: () => setVideoReady(true),
    },
  }
}
