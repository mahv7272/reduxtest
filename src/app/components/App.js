import ShowApiData  from "./ShowApiData";
import ShowSong from "./ShowSong";
import SongList from "./SongList";

const App = () => {
  return (
    <div>
      <SongList></SongList>
      <ShowSong></ShowSong>
      <ShowApiData></ShowApiData>
    </div>
  );
};

export default App;
