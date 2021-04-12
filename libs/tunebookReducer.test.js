import tunebookReducer from "./tunebookReducer";
import { SET_ORDER, SET_MY_SETTING } from "../constants";
import tunebook from "../data/tunebook";
import tunebookTestSetOrder from "../data/tunebookTestSetOrder";

describe("SET_ORDER", () => {
  test("SET_ORDER case correctly changes the order of tunes", () => {
    // Arrange
    const state = tunebook;
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
});
