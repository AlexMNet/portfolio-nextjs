import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import { formatSongTitle } from '../functions/functions'
import TextTransition from './TextTransition'
import BarsAnimation from './BarsAnimation'

export default function SpotifyActive({ data }) {
    let isDesktop = window.matchMedia('(min-width: 768px)').matches

    return (
        <div className="flex flex-row items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black p-2">
            <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
            <a href={data.songUrl} className="hover:text-spotify-green">
                <span className="text-xs md:text-base">
                    {formatSongTitle(data.title)} by{' '}
                    <TextTransition
                        length={data.artists.length}
                        text={data.artists}
                    />
                </span>{' '}
            </a>
        </div>
    )
}
