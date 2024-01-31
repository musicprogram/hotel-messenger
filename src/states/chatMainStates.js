import { atom } from "recoil";

export const myListOfChats = atom({
    key: 'myChats', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});