import { MENU_FOCUS_ON, MENU_FOCUS_OFF } from 'constants/actions';

const menuFocus = (state = false, action) => {
  switch (action.type) {
    case MENU_FOCUS_ON:
      return true;
    case MENU_FOCUS_OFF:
      return false;
    default:
      return state;
  }
}

export default menuFocus;
