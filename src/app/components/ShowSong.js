import React from "react";
import { connect } from "react-redux";

const ShowSong = (props) => {
  //   console.log("showsong", props);
  return (
    <div>
      show Song
      <div>
        <h2>
          Title:
          {props.songs.title}
        </h2>
        <h2>
          Duration:
          {props.songs.duration}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("showsong state", state);

  return { songs: state.selectedSong };
};

export default connect(mapStateToProps)(ShowSong);
