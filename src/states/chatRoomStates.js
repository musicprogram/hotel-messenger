import { atom } from "recoil";

export const chatRoomsArray = atom({
    key: 'chatRoomsArray', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
export const objUpdateRoom = atom({
    key: 'objUpdateRoom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});



export const updateAccessLink = atom({
    key: 'updateAccessLink', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
}); 