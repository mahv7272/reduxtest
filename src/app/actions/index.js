import Api from "../api/Api";

export const selectedSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: {
      song,
    },
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    const response = await Api.get("/post");
    dispatch({
      type: "FETCH_DATA",
      payload: response,
    });
  };
  // return {
  //   type: "FETCH_DATA",
  // };
};
