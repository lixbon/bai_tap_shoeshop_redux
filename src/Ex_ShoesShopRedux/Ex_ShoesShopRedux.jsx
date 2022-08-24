import React, { Component } from "react";
import { dataShoe } from "./Data_shoe";
import Detail_Shoe from "./Detail_Shoe";
import GioHang from "./GioHang";
import List_Shoe from "./List_Shoe";

export default class Ex_ShoesShopRedux extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
    gioHang: [],
  };

  render() {
    return (
      <div>
        <GioHang />
        <List_Shoe />
        <Detail_Shoe />
      </div>
    );
  }
}
