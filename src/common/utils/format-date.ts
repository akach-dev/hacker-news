export const formatDate = (timestamp: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat('en', options)

  return formatter.format(timestamp * 1000)
}
