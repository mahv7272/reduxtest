import {combineReducers,} from "redux"




const songReducer = () => {
  return [
    { title: "parvaneh", duration: "5:20" },
    { title: "kandam", duration: "4:11" },
    { title: "gorg vahshi", duration: "3:45" },
    { title: "khandan", duration: "4:40" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload.song;
  }
  return selectedSong;
};
 
export default combineReducers({
    songs: songReducer,
    selectedSong:selectedSongReducer
})