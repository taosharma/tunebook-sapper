/* The setMySetting function takes in an array of tunes with a 'mySetting' property; the orderId of the object to change; and a 'newSetting' 
value as a number. It returns an array with the orderId object's mySetting value updated to match the newSetting value. */

function setMySetting(array, orderId, newSetting) {
  const updatedObject = { ...array[orderId], mySetting: newSetting };

  return [
    ...array.slice(0, orderId),
    updatedObject,
    ...array.slice(orderId + 1),
  ];
}

export default setMySetting;
