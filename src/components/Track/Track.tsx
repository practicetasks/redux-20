import clsx from "clsx";
import './styles.css'
import { LikeButton } from "../LikeButton/LikeButton";
import type {TrackModel} from "../../slices/trackSlice.ts";

export interface TrackProps {
    track: TrackModel;
}

export const Track = ({ track }: TrackProps) => {
    const { duration, id, title } = track;

    return (
        <div className={clsx("trackRoot", "typo")}>
            <div className="trackId">{id}</div>
            <div className={clsx("trackContent", "typo")}>
                <div className="trackTitle">{title}</div>
                <div className="trackDurationContainer">
                    <span className="trackDuration">{duration}</span>
                </div>
            </div>
            <LikeButton track={track} />
        </div>
    );
};
