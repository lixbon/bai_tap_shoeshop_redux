import React, { Component } from "react";
import Detail_Shoe from "./Detail_Shoe";
import GioHang from "./GioHang";
import List_Shoe from "./List_Shoe";

export default class Ex_ShoesShopRedux extends Component {
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
