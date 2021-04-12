/* The setMySetting function takes in an object with a 'mySetting' property and a 'newSetting' value as a number. It returns the object 
with the mySetting value updated to match the newSetting value. */

function setMySetting(array, orderId, newSetting) {
  const updatedObject = { ...array[orderId], mySetting: newSetting };

  return [
    ...array.slice(0, orderId),
    updatedObject,
    ...array.slice(orderId + 1),
  ];
}

export default setMySetting;
