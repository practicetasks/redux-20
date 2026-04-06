import {useSelector} from "react-redux";
import type {RootState} from "./store/store.ts";
import {selectTracks, type TrackModel} from "./slices/trackSlice.ts";
import {Layout} from "./components/Layout/Layout.tsx";
import {TrackList} from "./components/TrackList.tsx";

const App = () => {
    const tracks = useSelector<RootState, TrackModel[]>(selectTracks);

    return (
        <Layout>
            <TrackList tracks={tracks} />
        </Layout>
    );
};


export default App;
