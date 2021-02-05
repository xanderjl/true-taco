const availableTimes = (startTime, endTime, iterator) => {
  let s = new Date(startTime).getTime()
  const e = new Date(endTime).getTime()
  const i = iterator * 60 * 1000
  const times = [s]

  while (s < e - i) {
    times.push(s + i)
    s = s + i
  }

  return times
}

export default availableTimes
