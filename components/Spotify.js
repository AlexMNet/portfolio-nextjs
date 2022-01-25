import useSWR from 'swr'
import { BsSpotify } from 'react-icons/bs'
import SpotifyActive from './SpotifyActive'
import SpotifyInactive from './SpotifyInactive'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Spotify() {
    const { data, error } = useSWR('/api/spotify', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    if (data.isPlaying) {
        return <SpotifyActive data={data} />
    }

    return <SpotifyInactive />
}
