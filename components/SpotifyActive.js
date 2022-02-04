import React, { useState, useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs'
import TextLoop from 'react-text-loop'
import { formatSongTitle } from '../functions/functions'

export default function SpotifyActive({ data }) {
    // let isMobile = window.matchMedia('(max-width: 500px)').matches

    return (
        <div className="flex items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black p-2">
            <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
            <a href={data.songUrl} className="hover:text-spotify-green">
                <span className="text-xs md:text-base">
                    {formatSongTitle(data.title)} by
                    <TextLoop className="ml-1 justify-center items-center">
                        {data.artists.map((artist, idx) => (
                            <span key={idx} className="">
                                {artist.name}
                            </span>
                        ))}
                    </TextLoop>
                </span>{' '}
            </a>
        </div>
    )
}
