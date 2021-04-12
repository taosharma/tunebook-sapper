import setOrder from "./setOrder";

const oldOrderedArray = [
  { orderId: 0, name: "originally-zero" },
  { orderId: 1, name: "originally-one" },
  { orderId: 2, name: "originally-two" },
  { orderId: 3, name: "originally-three" },
  { orderId: 4, name: "originally-four" },
];

const newOrderedArray = [
  { orderId: 0, name: "originally-zero" },
  { orderId: 1, name: "originally-four" },
  { orderId: 2, name: "originally-one" },
  { orderId: 3, name: "originally-two" },
  { orderId: 4, name: "originally-three" },
];

describe("the setOrder function", () => {
  test("the setOrder function changes the index", () => {
    // Arrange
    const array = oldOrderedArray;
    const oldOrderId = 4;
    const newOrderId = 1;
    const expected = newOrderedArray;
    // Act
    const actual = setOrder(array, oldOrderId, newOrderId);
    // Assert
    expect(actual).toEqual(expected);
  });
});
