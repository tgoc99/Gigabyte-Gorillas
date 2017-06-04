import { combineReducers } from 'redux';
import user from './FetchUser';
import auth from './Auth';
import routes from './Routes';
import sendPhotos from './SendPhoto';
import habit from './Habit';
import day from './Day';
import modal from './Modal';
import visibleUser from './VisibleUser';
import settings from './Settings'

const rootReducer = combineReducers({
  routes,
  auth,
  day,
  user,
  sendPhotos,
  habit,
  modal,
  visibleUser,
  settings,
});

export default rootReducer;
