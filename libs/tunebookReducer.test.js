import tunebookReducer from "./tunebookReducer";
import { SET_ORDER, SET_MY_SETTING } from "../constants";
import tunebook from "../data/tunebook";
import tunebookTest from "../data/tunebookTest";

describe.skip("SET_ORDER", () => {
  test("SET_ORDER case correctly changes the order of tunes", () => {
    // Arrange
    const state = tunebook;
    const action = {
      type: SET_ORDER,
      payload: { currentIndex: 4, newIndex: 1 },
    };
    const expected = tunebookTest;
    // Act
    const actual = tunebookReducer(state, action);
    // Assert
    expect(actual).toEqual(expected);
  });
});
