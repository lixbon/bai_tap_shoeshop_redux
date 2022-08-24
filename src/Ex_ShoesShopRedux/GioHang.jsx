import React, { Component } from "react";
import { connect } from "react-redux";
import _default from "react-redux/es/components/connect";
import {
  REMOVE_FROM_CART,
  TANG_GIAM_ITEM,
} from "./Redux/constants/shoeConstants";

class GioHang extends Component {
  renderTbody = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index.toString() + item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            {""}
            <img src={item.image} alt="" style={{ width: 80 }} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleTangGiamItem(item.id, "add");
              }}
              className="btn btn-primary"
            >
              +
            </button>
            <span className="mx-3"> {item.soLuong}</span>
            <button
              onClick={() => {
                this.props.handleTangGiamItem(item.id, "sub");
              }}
              className="btn btn-success"
            >
              -
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container py-5">
        <table className="table text-left">
          <thead className="text-primary">
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Image</td>
              <td>Quantity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
        {this.props.gioHang == 0 && (
          <p className="mt-5 text-center">Chưa có sản phẩm trong giỏ hàng</p>
        )}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    gioHang: state.shoeReducer.gioHang,
  };
};
let mapDispatchTopProps = (dispath) => {
  return {
    handleRemove: (value) => {
      dispath({
        type: REMOVE_FROM_CART,
        payload: value,
      });
    },
    handleTangGiamItem: (id, method) => {
      dispath({
        type: TANG_GIAM_ITEM,
        payload: { id: id, method: method },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchTopProps)(GioHang);
