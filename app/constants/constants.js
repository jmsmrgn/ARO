export const DROP_NEW_PIN = 'DROP_NEW_PIN';
export const UPDATE_PINS = 'UPDATE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';

const Firebase = require('firebase');
export const ref = new Firebase("https://interruptedlobster.firebaseio.com/tiff");
export const userData = ref.child('user');
