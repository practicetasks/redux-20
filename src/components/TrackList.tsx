import type {TrackModel} from "../slices/trackSlice.ts";
import {Track} from "./Track/Track.tsx";

interface TrackListProps {
    tracks: TrackModel[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
    return (
        <div className="trackList">
            {tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
};
