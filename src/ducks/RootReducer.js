import {combineReducers} from 'redux';

import requestFlags from './requestFlags';
import network from './network';
import testPost from './testPost';
import language from './language';

const appReducer = combineReducers({
  requestFlags,
  network,
  testPost,
  language,
});

export default appReducer;
