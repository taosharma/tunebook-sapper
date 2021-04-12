import { tunebookReducerActionTypes } from "../constants";
import setOrder from "./setOrder/setOrder";
import setMySetting from "./setMySetting/setMySetting";

const { SET_ORDER, SET_MY_SETTING } = tunebookReducerActionTypes;

export default function tunebookReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ORDER:
      const { oldOrderId, newOrderId } = payload;
      return setOrder(state, oldOrderId, newOrderId);
      break;
    case SET_MY_SETTING:
      const { orderId, newSetting } = payload;
      return setMySetting(state, orderId, newSetting);
      break;
    default:
      return state;
  }
}
