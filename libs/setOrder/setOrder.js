/* The setOrder function takes in an array of objects, each of which has an 'orderId' property; the 'oldOrderId' of the object which
will change position; and the 'newOrderId' which is the desired new position of the object in the array. After the object's position
is changed, the 'orderId' property of the objects will also change accordingly. */

// Array objects up to the newOrderId - 1 will stay the same.
// Place oldOrderId object at the newOrderId position.
// Add 1 to the orderId of every object after the newOrderId position.
// Unless the orderId is equal to oldOrderId, in which case remove that object.

function setOrder(oldOrderedArray, oldOrderId, newOrderId) {
  const updatedObject = { ...oldOrderedArray[oldOrderId], orderId: newOrderId };

  const oldOrderObjects = [...oldOrderedArray.slice(newOrderId)];

  const newOrderObjects = oldOrderObjects.reduce((newOrderObjects, object) => {
    if (object.orderId !== oldOrderId && newOrderObjects.length > 0) {
      return [...newOrderObjects, { ...object, orderId: object.orderId + 1 }];
    }
    if (newOrderObjects.length === 0) {
      return [{ ...object, orderId: object.orderId + 1 }];
    }
    return newOrderObjects;
  }, []);

  const newOrderArray = [
    ...oldOrderedArray.slice(0, newOrderId),
    updatedObject,
    ...newOrderObjects,
  ];

  return newOrderArray;
}

export default setOrder;
