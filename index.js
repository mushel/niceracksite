
import _ from 'lodash';
import {MDCRipple} from '@material/ripple/index';
import {MDCMenu} from '@material/menu';

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = false;
menu.setFixedPosition(true);

  
