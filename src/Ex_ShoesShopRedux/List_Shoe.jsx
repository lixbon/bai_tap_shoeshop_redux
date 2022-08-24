import React, { Component } from "react";
import Item_Shoe from "./Item_Shoe";
import { connect } from "react-redux";

class List_Shoe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoeArr.map((item, index) => {
            return (
              <div key={index.toString() + item.id} className="col-3">
                <Item_Shoe detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(List_Shoe);
