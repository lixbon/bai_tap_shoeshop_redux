import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, XEM_CHI_TIET } from "./Redux/constants/shoeConstants";
class Item_Shoe extends Component {
  render() {
    let { name, image, description, price } = this.props.detail;
    return (
      <Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-title" style={{ color: "red" }}>
              {name}
            </h6>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{ color: "blue" }}>
              Price: ${price}
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.props.handleAddtoCart(this.props.detail);
              }}
            >
              Add to cart
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                this.props.handleViewDetail(this.props.detail);
              }}
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

let mapDispatchTopProps = (dispath) => {
  return {
    handleViewDetail: (value) => {
      dispath({
        type: XEM_CHI_TIET,
        payload: value,
      });
    },
    handleAddtoCart: (value) => {
      dispath({
        type: ADD_TO_CART,
        payload: value,
      });
    },
  };
};
export default connect(null, mapDispatchTopProps)(Item_Shoe);
