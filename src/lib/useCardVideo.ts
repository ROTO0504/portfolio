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
  const loadedRef = useRef(false)

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
      // ClientRouter で差し替えられた <video> は読み込みに失敗した状態になっていることがある。
      // error や networkState に表れない場合もあるので、状態を見ずに最初の再生の前に必ず読み込み直す
      if (!loadedRef.current || el.error) {
        el.load()
        loadedRef.current = true
      }
      // iOS は消音でないと自動で再生させない。属性の反映漏れに備えてここでも消音にする
      el.muted = true
      el.play().catch(() => {})
    } else {
      el.pause()
      el.currentTime = 0
      setVideoReady(false)
    }
  }, [active])

  // 画像を動画に差し替えるのは、実際に再生が始まってフレームが描かれてから。
  // iOS では自動再生を止められたとき（低電力モードなど）も canplaythrough は来るが、
  // 再生されていない動画は何も描かれないため、その時点で差し替えると画像が白く抜ける
  const handlePlaying = () => {
    const el = videoRef.current
    if (!el) return
    if ("requestVideoFrameCallback" in el) {
      el.requestVideoFrameCallback(() => {
        if (!el.paused) setVideoReady(true)
      })
    } else {
      setVideoReady(true)
    }
  }

  return {
    cardRef,
    videoRef,
    showVideo: active && videoReady,
    hoverProps: {
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false),
    },
    videoProps: {
      onPlaying: handlePlaying,
    },
  }
}
