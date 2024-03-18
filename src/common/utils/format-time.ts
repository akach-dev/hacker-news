export const formatTime = (timestamp: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat('en', options)

  return formatter.format(timestamp * 1000)
}
