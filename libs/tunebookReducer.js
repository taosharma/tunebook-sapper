import { SET_ORDER, SET_MY_SETTING } from "../constants";
import setOrder from "./setOrder/setOrder";
import setMySetting from "./setMySetting/setMySetting";

export default function tunebookReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ORDER:
      const { oldOrderId, newOrderId } = payload;
      return setOrder(state, oldOrderId, newOrderId);
      break;
    case SET_MY_SETTING:
      const { newSetting, orderId } = payload;
      return;
      break;
    default:
      return state;
  }
}
