import React, {Component} from 'react';
import './BreadCrumbs.scss';

export default class BreadCrumb extends Component {
  render() {
    return (
      <div className="bread-crumb">
        <a href="#" className="crumb">participant management</a>
        <img src={require("../../assets/img/chevron-right.svg")} alt="" />
        <a href="#" className="crumb">search results</a>
        <img src={require("../../assets/img/chevron-right.svg")}  alt="" />
        <span className="crumb active">Name</span>
      </div>
    )
  }
}
