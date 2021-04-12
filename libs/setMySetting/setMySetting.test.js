import setMySetting from "./setMySetting";

const oldArray = [{ mySetting: 1 }];
const newArray = [{ mySetting: 2 }];

//TODO: Test edges cases.

describe("the setMySetting function", () => {
  test("the setMy function changes the the mySetting property of an object to the desired setting", () => {
    // Arrange
    const array = oldArray;
    const orderId = 0;
    const newSetting = 2;
    const expected = newArray;
    // Act
    const actual = setMySetting(array, orderId, newSetting);
    // Assert
    expect(actual).toEqual(expected);
  });
});
