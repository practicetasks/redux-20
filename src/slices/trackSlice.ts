import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const tracks: TrackModel[] = [
    {
        id: 1,
        title: "Moonage DayDream",
        duration: "4:39",
        isLiked: false,
    },
    {
        id: 2,
        title: "The Man Who Sold The World",
        duration: "3:59",
        isLiked: false,
    },
    {
        id: 3,
        title: "Starman",
        duration: "4:14",
        isLiked: false,
    },
];

export interface TrackModel {
    id: number;
    title: string;
    duration: string;
    isLiked: boolean;
}

interface TrackListState {
    tracks: TrackModel[];
}

const initialState: TrackListState = {
    tracks,
};

const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<TrackModel>) => {
            const track = state.tracks.find((t) => t.id === action.payload.id);
            if (track) {
                track.isLiked = !track.isLiked;
            }
        },
    },
    selectors: {
        selectTracks: (state) => state.tracks
    }
});

export const { toggleLike } = tracksSlice.actions;
export const { selectTracks } = tracksSlice.selectors;

export default tracksSlice.reducer;

// 1. Тест где у track isLiked должен поменяться на true
// 2. Тест где ничего не должно поменяться, из-за некорректного id
// 3. Тест где у track isLiked должен поменяться на false
// 4. Тест где у track isLiked должен поменяться на true, при повтороном вызове на false
