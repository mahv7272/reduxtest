import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>song list</p>
        <li>
          <span>{this.props.songs[0].title}</span>{" "}
          <button onClick={() => this.props.selectedSong(this.props.songs[0])}>
            selected
          </button>
        </li>
        <li>
          <span>{this.props.songs[1].title} </span>
          <button onClick={() => this.props.selectedSong(this.props.songs[1])}>
            selected
          </button>
        </li>
        <li>
          <span>{this.props.songs[2].title} </span>
          <button onClick={() => this.props.selectedSong(this.props.songs[2])}>
            selected
          </button>
        </li>
        <li>
          <span>{this.props.songs[3].title} </span>
          <button onClick={() => this.props.selectedSong(this.props.songs[3])}>
            selected
          </button>
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong })(SongList);
