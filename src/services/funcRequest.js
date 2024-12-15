import axios from "axios";
import api from "./config";

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// const fetchToken = createAsyncThunk("token/fetchToken", () => {
//   return api
//     .post("token/get")
//     .then((res) => res.json())
//     .then((data) => data);
// });
// const tokenSlice = createSlice({
//   name: "token",
//   initialState,
//   extraReducers: (Builder) => {
//     Builder.addCase(fetchToken.pending, (state, action) => {
//       state.loading = true;
//     });
//     Builder.addCase(fetchToken.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = "";
//     });
//     Builder.addCase(fetchToken.rejected, (state, action) => {
//       state.loading = false;
//       state.data = [];
//       state.error = action.error.message;
//     });
//   },
// });
//دریافت توکن
const tokenData = async (data) => {
  // return await api.post("token/get", data);
  const response = await api.post("token/get", data);

  return response;
};
//  جهت دریافت اطالعات تبدیالت

const conversions = async (data) => {
  console.log("تبدیلات", data);
  const res = await api.post("maps/conversions", data);
  console.log("conversions", res);
  return res;
};
//جهت دریافت دسته بندی ها
const category = async (data) => {
  const res = await api.post("maps/category", data);
  return res;
};
//جستجو اماکن
const search_auto = async (data) => {
  const res = await api.post("maps/search_auto", data);
  return res;
};
//category_marker
const category_marker = async (data) => {
  console.log("category_marker", data);
  const res = await api.post("maps/category_marker", data);
  console.log("مارکر", res);
  return res;
};
// category_sub
const category_sub = async (data) => {
  // console.log('ساب' , data);
  const res = await api.post("maps/category_sub", data);
  // console.log("category_sub", res);
  return res;
};
const category_ = async (data) => {
  // console.log('زیرمجموعه ها' , data);
  const res = await api.post("maps/category_sub", data);
  // console.log("category_", res);
  return res;
};
//جستجو خیابان
const searchStreet = async (txt) => {
  console.log("txt", txt);
  const res = await axios.post(
    "https://map.ir//search/v2/autocomplete",
    {
      Headers: {
        "Content-Type": "application/json",
      },
      'x-api-key': 'WsLdHK46I5Wfr5xgI0ynjjyiw9Fyhydu',
      body: `${txt}`,
    },
  );
  console.log("ResMap", res);
  return res;
};
// export default tokenSlice.reducer
export {
  // tokenData,
  conversions,
  category_sub,
  // fetchToken,
  tokenData,
  category,
  search_auto,
  category_marker,
  category_,
  searchStreet,
};
