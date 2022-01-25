import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import Ticker from 'react-ticker'

export default function SpotifyActive({ data }) {
    // let isMobile = window.matchMedia('(max-width: 500px)').matches

    return (
        <div className="flex items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black  h-10">
            <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
            <p className="text-xs md:text-base">
                Currently Playing {data.title} by {data.artist}
            </p>
        </div>
    )

    // return (
    //     <div className="w-screen bg-black text-white">
    //         <Ticker mode="await">
    //             {({ index }) => (
    //                 <div className="flex flex-row w-screen justify-center items-center p-2">
    //                     <BsSpotify className="text-green-600 mr-1 text-3xl animate-spinSpotify" />{' '}
    //                     <p className="text-xs md:text-base">
    //                         Currently Playing {data.title} by {data.artist}
    //                     </p>
    //                 </div>
    //             )}
    //         </Ticker>
    //     </div>
    // )
}
