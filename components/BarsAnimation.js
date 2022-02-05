export default function BarsAnimation() {
    return (
        <div className="relative inline-block h-6 ml-2">
            <div className="absolute bottom-0 h-full w-0.5 bg-spotify-green animate-spotifyBars1 "></div>
            <div className="absolute bottom-0 left-1 h-full w-0.5 bg-spotify-green animate-spotifyBars2 "></div>
            <div className="absolute bottom-0 left-2 h-full w-0.5 bg-spotify-green animate-spotifyBars3 "></div>
            <div className="absolute bottom-0 left-3 h-full w-0.5 bg-spotify-green animate-spotifyBars4 "></div>
            <div className="absolute bottom-0 left-4 h-full w-0.5 bg-spotify-green animate-spotifyBars5 "></div>
            <div className="absolute bottom-0 left-5 h-full w-0.5 bg-spotify-green animate-spotifyBars6 "></div>
        </div>
    )
}
