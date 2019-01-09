
import _ from 'lodash';
import {MDCRipple} from '@material/ripple/index';
import {MDCMenu} from '@material/menu';
import {MDCTextField} from '@material/textfield';
import {MDCFormField} from '@material/form-field';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const menu = new MDCMenu(document.querySelector('.mdc-menu'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
menu.open = false;
menu.setFixedPosition(true);

  
