// 正则匹配时间
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString) {
  const lyricStrings = lyricString.split('\n')

  const lyricInfo = []
  for (const lineString of lyricStrings) {
    const timeResult = timeRegExp.exec(lineString)
    if (!timeResult) continue
    // 获取歌词时间
    const minute = timeResult[1] * 60 *1000
    const second = timeResult[2] * 1000
    const millsecond = timeResult[3].length === 2 ? timeResult[3] * 10 : timeResult[3] * 1
    const time = minute + second + millsecond
    // 获取歌词文本
    const text = lineString.replace(timeRegExp, '')
    lyricInfo.push({ time, text })
  }
  return lyricInfo
}