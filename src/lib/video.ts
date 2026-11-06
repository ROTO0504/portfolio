// 作品動画（R2 の WebM）は AV1。AV1 を再生できない端末（多くの iPhone など）は
// この type を見て WebM を飛ばし、次の <source> の MP4（H.264）を使う。
// レベルは手持ちの動画で最も高い 4.1 に合わせる。
export const WEBM_AV1_TYPE = 'video/webm; codecs="av01.0.09M.08"'
