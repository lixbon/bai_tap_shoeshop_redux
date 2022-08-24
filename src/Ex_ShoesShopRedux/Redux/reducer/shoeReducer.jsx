import { bindActionCreators } from "redux";
import { dataShoe } from "../../Data_shoe";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TANG_GIAM_ITEM,
  XEM_CHI_TIET,
} from "../constants/shoeConstants";

let initialState = {
  shoeArr: dataShoe,
  detailShoe: dataShoe[0],
  gioHang: [],
};
export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      state.detailShoe = action.payload;
      return { ...state };
    }
    case ADD_TO_CART: {
      let cloneGioHang = [...state.gioHang];
      let index = state.gioHang.findIndex((item) => {
        return item.id == action.payload.id;
      });
      //TH1 San pham chua co trong gio hang
      if (index == -1) {
        let spGioHang = { ...action.payload, soLuong: 1 };
        cloneGioHang.push(spGioHang);
      } else {
        //TH2 San pham da co trong gio hang
        cloneGioHang[index].soLuong++;
      }
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    case REMOVE_FROM_CART: {
      let cloneGioHang = [...state.gioHang];
      let index = state.gioHang.findIndex((item) => {
        return item.id == action.payload;
      });
      if (index !== -1) {
        cloneGioHang.splice(index, 1);
      }
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    case TANG_GIAM_ITEM: {
      let cloneGioHang = [...state.gioHang];
      let index = state.gioHang.findIndex((item) => {
        return item.id == action.payload.id;
      });

      //TH1 so luong lon hon 1
      if (index !== -1 && action.payload.method == "add") {
        cloneGioHang[index].soLuong++;
      } else if (
        index !== -1 &&
        action.payload.method == "sub" &&
        cloneGioHang[index].soLuong == 1 // so luong =1
      ) {
        cloneGioHang.splice(index, 1);
      } else if (index !== -1 && action.payload.method == "sub") {
        cloneGioHang[index].soLuong--;
      }
      state.gioHang = cloneGioHang;
      return { ...state };
    }

    default:
      return state;
  }
};
