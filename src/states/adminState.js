import { atom } from "recoil";

export const tabAdmin = atom({
    key: 'tabAdmin', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
});

export const myProfile = atom({
    key: 'myProfile', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});