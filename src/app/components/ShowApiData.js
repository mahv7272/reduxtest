import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

export const ShowApiData = (props) => {
    props.fetchData();
  return <div>show api data</div>;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, fetchData )(ShowApiData);
