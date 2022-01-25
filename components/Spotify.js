import useSWR from 'swr'
import { BsSpotify } from 'react-icons/bs'
import SpotifyActive from './SpotifyActive'
import SpotifyInactive from './SpotifyInactive'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Spotify() {
    const { data, error } = useSWR('/api/spotify', fetcher)
    if (error) return <></>
    if (!data)
        return (
            <div className="flex items-center justify-center mx-auto text-sm text-white dark:text-gray-500 bg-black  h-10">
                <BsSpotify className="text-spotify-green mr-1 text-base md:text-3xl animate-spinSpotify" />{' '}
                <p className="text-xs md:text-base">Loading Spotify Data</p>
            </div>
        )

    if (data.isPlaying) {
        return <SpotifyActive data={data} />
    }

    return <SpotifyInactive />
}
