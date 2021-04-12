import tunebookReducer from "./tunebookReducer";
import { tunebookReducerActionTypes } from "../constants";
import tunebook from "../data/tunebook";
import tunebookTestSetOrder from "../data/tunebookTestSetOrder";
import tunebookTestSetMySetting from "../data/tunebookTestSetMySetting";

const { SET_ORDER, SET_MY_SETTING } = tunebookReducerActionTypes;

describe("tunebookReducer cases", () => {
  test("SET_ORDER case correctly updates the order of tunes", () => {
    // Arrange
    const state = [...tunebook];
    const action = {
      type: SET_ORDER,
      payload: { oldOrderId: 4, newOrderId: 1 },
    };
    const expected = tunebookTestSetOrder;
    // Act
    const actual = tunebookReducer(state, action);
    // Assert
    expect(actual).toEqual(expected);
  });
  test("SET_MY_SETTING case correctly changes the mySetting property on a tune", () => {
    // Arrange
    const state = [...tunebook];
    const action = {
      type: SET_MY_SETTING,
      payload: { orderId: 1, newSetting: 13527 },
    };
    const expected = tunebookTestSetMySetting;
    // Act
    const actual = tunebookReducer(state, action);
    // Assert
    expect(actual).toEqual(expected);
  });
});
