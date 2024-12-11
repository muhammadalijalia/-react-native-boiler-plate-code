import {createReducer} from '@reduxjs/toolkit';
import {makeAction} from '../ActionTypes';

// action creators and types
export const updateAppLanguage = makeAction('UPDATE_APP_LANGAUGE');

// init state
const initalState = {
  appLanguage: {
    isRtl: false,
    language: 'en',
    label: 'English',
  },
};

// init reducer
export default createReducer(initalState, builder => {
  builder.addCase(updateAppLanguage, (state, action) => {
    state.appLanguage = action.payload;
  });
});

// selectors
export const getAppLanguage = state => state.language.appLanguage;
