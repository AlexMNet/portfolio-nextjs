import React, { useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { formatSongTitle } from '../functions/functions'
import TextTransition from './TextTransition'

export default function SpotifyActive({ data, setIsPlaying }) {
  // Set state in useEffect to get rid of Error. See error at bottom
  useEffect(() => {
    setIsPlaying(true)
  }, [])

  if (data.type === 'podcast') {
    return (
      <div className="flex flex-row items-center justify-center mx-auto text-sm text-white dark:text-gray-500 p-2">
        <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
        <a href={data.songUrl} className="hover:text-spotify-green">
          Currently listening to a podcast. Podcast Data not provided by Spotify
          API.
        </a>
      </div>
    )
  }
  return (
    <div className="flex flex-row items-center justify-center mx-auto text-sm text-white dark:text-gray-500 p-2">
      <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
      <a href={data.songUrl} className="hover:text-spotify-green">
        <span className="text-xs md:text-base">
          {formatSongTitle(data.title)} by{' '}
          <TextTransition length={data.artists.length} text={data.artists} />
        </span>{' '}
      </a>
    </div>
  )
}

//Error: Warning: Cannot update a component (`Layout`) while rendering a different component (`SpotifyActive`). To locate the bad setState() call inside `SpotifyActive`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
