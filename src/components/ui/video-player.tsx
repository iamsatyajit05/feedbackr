'use client';
import HoverVideoPlayer from 'react-hover-video-player';

export default function VideoPlayer({ video, thumbnail }: { video: string, thumbnail: string }) {
    return (
        <HoverVideoPlayer
            videoSrc={video}
            pausedOverlay={
                <img
                    src={thumbnail}
                    alt={thumbnail}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            }
            loadingOverlay={
                <div className="loading-overlay">
                    <div className="loading-spinner" />
                </div>
            }
        />
    );
}