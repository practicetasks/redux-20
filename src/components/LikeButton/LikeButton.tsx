import { useDispatch } from "react-redux";
import {toggleLike, type TrackModel} from "../../slices/trackSlice.ts";
import type {AppDispatch} from "../../store/store.ts";

interface LikeButtonProps {
    track: TrackModel;
}

export const LikeButton = ({ track }: LikeButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(toggleLike(track));
    };

    return (
        <button className="like-button" onClick={handleClick}>
            {track.isLiked ? "дизлайк" : "лайк"}
        </button>
    );
};
