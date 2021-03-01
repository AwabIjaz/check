import {V_16} from '../styles/Spacing';

//strings
export const BACKGROUND_IMAGE = 'backgroundImage';

//images and icons
const IMAGE_BASE_URL = '../assets/images/';
const ICON_BASE_URL = '../assets/icons/';

export const ARROW_BACK_ICON = require(ICON_BASE_URL + 'arrow-back-white.png');
export const APP_LOGO = require(IMAGE_BASE_URL + 'app-logo.png');

//lists, objects
export const AUTH_INPUTS = [
  {
    label: 'Email',
    name: 'email',
    keyboardType: 'email-address',
  },
  {
    label: 'Password',
    name: 'password',
    secureTextEntry: true,
    bottom: V_16,
    top: V_16,
  },
  {
    label: 'Repeat Password',
    name: 'repeatPassword',
    secureTextEntry: true,
  },
];
