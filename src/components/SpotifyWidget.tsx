import { FadeIn } from "./ui/FadeIn";

export default function SpotifyWidget() {
  // Replace this with your own Spotify playlist or artist URL
  // Format: https://open.spotify.com/playlist/PLAYLIST_ID or https://open.spotify.com/artist/ARTIST_ID
  const spotifyEmbedUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0";

  return (
    <section id="spotify" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">What I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Listening To</span></h2>
          <p className="text-slate-400 mt-4">Music fuels my code. Here&apos;s what&apos;s on repeat.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mt-4"></div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card p-6 relative overflow-hidden group hover:bg-white/5 transition-colors">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="currentColor"/>
              </svg>
              <span className="text-green-400 font-bold text-sm uppercase tracking-widest">Spotify Playlist</span>
            </div>

            <iframe
              src={spotifyEmbedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl relative z-10"
              style={{ borderRadius: '12px' }}
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
