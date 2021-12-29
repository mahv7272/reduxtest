import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

export const ShowApiData = (props) => {
  const dataApi = props.fetchData();
  console.log("dataapi", dataApi);
  return (
    <div>
      show api data
      <h2>{props.postShow}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {    
  console.log("api", state);
  return { postShow: state.post };
};

export default connect(mapStateToProps, { fetchData })(ShowApiData);
