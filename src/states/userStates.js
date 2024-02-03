import { atom } from "recoil";

export const modalUserSign = atom({
    key: 'modalUserSign', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});


export const numBack = atom({
    key: 'numBack', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
});


//////
const session = localStorage.getItem("session") ? localStorage.getItem("session") : '';

export const localStorageSession = atom({
    key: 'localStorageSession', // unique ID (with respect to other atoms/selectors)
    default: session, // default value (aka initial value)
});