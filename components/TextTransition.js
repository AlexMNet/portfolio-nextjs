import React, { useState, useEffect } from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'

export default function TextTransition({ text, length }) {
  // let isMobile = window.matchMedia('(max-width: 500px)').matches
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <ReactTextTransition
      inline
      springConfig={presets.stiff}
      text={text.map((a) => a.name.slice(0, 15))[index % length]}
    />
  )
}

//springConfig Presets: default, gentle, molasses, slow, stiff, wobbly
