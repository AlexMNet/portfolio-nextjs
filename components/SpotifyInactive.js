import React, { useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs'
import useSWR from 'swr'
import { formatSongTitle } from '../functions/functions'
import TextTransition from './TextTransition'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function SpotifyInactive({ setIsPlaying }) {
  useEffect(() => {
    setIsPlaying(false)
  }, [])
  const { data, error } = useSWR('/api/lastPlayed', fetcher)
  if (error) return <></>

  if (!data)
    return (
      <div className="flex items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black  h-10">
        <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
        <p className="text-xs md:text-base">Loading Spotify Data</p>
      </div>
    )

  return (
    <div className="flex items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black  h-10">
      <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl" />{' '}
      <a href={data.trackLink} className="hover:text-spotify-green">
        <span className="text-xs md:text-base">
          Last Played {formatSongTitle(data.title)} by{' '}
          <TextTransition length={data.artists.length} text={data.artists} />
        </span>
      </a>
    </div>
  )
}
