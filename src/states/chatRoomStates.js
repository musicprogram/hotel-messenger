import { atom } from "recoil";

export const chatRoomsArray = atom({
    key: 'chatRoomsArray', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});