export function formatSongTitle(title) {
  return (
    title
      //Remove all text including and after hyphen
      .replace(/\-.*/, '')
      //Remove all text including and after (
      .replace(/\(.*/, '')
      //Remove all text in parenthesis and including parenthesis
      .replace(/\([^()]*\)/g, '')
      //Trim any white space left over
      .trim()
  )
}
