import {SET_ORDER, SET_MY_SETTING} from "../constants"

function tunebookReducer(state, action) {
    const {type, payload} = action

    switch(type) {
        case SET_ORDER:
        // Change the orderNumber property of each tune according to what has changed.
        break;
        case SET_MY_SETTING:
        // Change the mySetting property of the tune to the selected setting.
        break;
        default:
        return state;
    }
}