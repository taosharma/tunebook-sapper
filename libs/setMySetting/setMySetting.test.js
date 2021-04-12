import setMySetting from "./setMySetting";

const oldObject = { mySetting: 1 };
const newObject = { mySetting: 2 };

describe("the setMySetting function", () => {
  test("the setMy function changes the the mySetting property of an object to the desired setting", () => {
    // Arrange
    const object = oldObject;
    const newSetting = 2;
    const expected = newObject;
    // Act
    const actual = setMySetting(object, newSetting);
    // Assert
    expect(actual).toEqual(expected);
  });
});
