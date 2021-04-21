import axios from "axios";
import { handleActions } from "redux-actions";
import { SERVER } from "../../config";

const getProductListDataAPI = () => axios.get(`${SERVER}/products`);

const GET_PRODUCT_LIST_DATA = "GET_PRODUCT_LIST_DATA";
const GET_PRODUCT_LIST_DATA_SUCEESS = "GET_PRODUCT_LIST_DATA_SUCEESS";
const GET_PRODUCT_LIST_DATA_FAILURE = "GET_PRODUCT_LIST_DATA_FAILURE";

export const getProductListData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LIST_DATA });
  try {
    const res = await getProductListDataAPI();
    dispatch({ type: GET_PRODUCT_LIST_DATA_SUCEESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_PRODUCT_LIST_DATA_FAILURE, payload: e });
  }
};

const initState = {
  productList: [],
  loading: false,
  error: null,
};

export default handleActions(
  {
    [GET_PRODUCT_LIST_DATA_SUCEESS]: (state, { payload: data }) => ({
      ...state,
      productList: data,
      loading: false,
    }),
    [GET_PRODUCT_LIST_DATA]: (state, { payload: data }) => ({
      ...state,
      loading: true,
    }),
    [GET_PRODUCT_LIST_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      loading: false,
      error: error,
    }),
  },
  initState
);
