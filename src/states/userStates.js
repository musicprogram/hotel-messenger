import { atom } from "recoil";
import { decryptData } from "../utils";
import { secretKeyLocalHost } from "../conts";

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


let userMain = localStorage.getItem("user") ? localStorage.getItem("user") : null;

export const localStorageUser = atom({
    key: 'localStorageUser', // unique ID (with respect to other atoms/selectors)
    default: userMain, // default value (aka initial value)
});

export const localStorageObj = atom({
    key: 'localStorageObj', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});