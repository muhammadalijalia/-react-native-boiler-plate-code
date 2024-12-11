let store = null;
let isInternetConnected = false;
let topLoaderRef = null;
let alertModalRef = null;
let dropdownModalRef = null;
let flashAlertModalRef = null;

function setStore(value) {
  store = value;
}

function getStore() {
  return store;
}

function getStoreState() {
  return store?.getState() ?? {};
}

function dispatchAction(action) {
  const {dispatch} = store;
  dispatch(action);
}

function setInternetConnected(connected) {
  isInternetConnected = connected;
}

function getIsInternetConnected() {
  return isInternetConnected;
}

function setTopLoaderRef(value) {
  topLoaderRef = value;
}

function getTopLoaderRef() {
  return topLoaderRef;
}

function getAlertModalRef() {
  return alertModalRef;
}

function setAlertModalRef(ref) {
  alertModalRef = ref;
}
function setFlashAlertModalRef(value) {
  flashAlertModalRef = value;
}

function getFlashAlertModalRef() {
  return flashAlertModalRef;
}

function setDropDownModalRef(ref) {
  dropdownModalRef = ref;
}

function getDropDownModalRef() {
  return dropdownModalRef;
}

export default {
  setStore,
  getStore,
  setInternetConnected,
  getIsInternetConnected,
  getStoreState,
  dispatchAction,
  setTopLoaderRef,
  getTopLoaderRef,
  getAlertModalRef,
  setAlertModalRef,
  setFlashAlertModalRef,
  getFlashAlertModalRef,
  setDropDownModalRef,
  getDropDownModalRef,
};
