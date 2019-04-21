import { createAction } from 'redux-actions';
import axios from 'axios';

export const doHttpRequestRequest = createAction('DO_HTTP_REQUEST_REQUEST');
export const doHttpRequestSuccess = createAction('DO_HTTP_REQUEST_SUCCESS');
export const doHttpRequestFailure = createAction('DO_HTTP_REQUEST_FAILURE');

export const loadPlaces = createAction('LOAD_PLACES');
export const setRotateTimer = createAction('SET_ROTATE_TIMER');
export const setUserIdleTimer = createAction('SET_USER_IDLE_TIMER');
export const switchRotateDirection = createAction('SWITCH_ROTATE_DIRECTION');

export const fetchPlaces = () => async (dispatch) => {
  const requestName = 'fetchPlaces';
  try {
    dispatch(doHttpRequestRequest({ requestName }));
    const places = await axios.get('http://localhost:3000/assets/places.json');
    dispatch(doHttpRequestSuccess({ requestName }));
    const fourPlaces = places.data.places.sort(() => 0.5 - Math.random()).slice(0, 4);
    dispatch(loadPlaces(fourPlaces));
  } catch (e) {
    dispatch(doHttpRequestFailure({ requestName }));
    console.log(`Fetching places is failed with ${e.message}`);
  }
};

export const rotatePlaces = () => (dispatch, getState) => {
  const {
    places: {
      placesList,
      isForwardDirection,
    },
  } = getState();
  if (placesList.length > 0) {
    const lastElement = placesList[placesList.length - 1];
    const firstElement = placesList[0];
    const newPlacesList = (isForwardDirection)
      ? [lastElement, ...placesList.slice(0, 3)]
      : [...placesList.slice(1), firstElement];
    dispatch(loadPlaces(newPlacesList));
    dispatch(resetRotateTimer()); // eslint-disable-line
  }
};

export const resetRotateTimer = () => async (dispatch, getState) => {
  const { places: { rotateTimer } } = getState();
  clearTimeout(rotateTimer);

  const timer = setTimeout(() => dispatch(rotatePlaces()), 5000);
  dispatch(setRotateTimer({ rotateTimer: timer }));
};

export const resetUserIdleTimer = () => async (dispatch, getState) => {
  const {
    places: {
      rotateTimer,
    },
    userIdleTimer,
  } = getState();
  clearTimeout(rotateTimer);
  clearTimeout(userIdleTimer);

  const timer = setTimeout(() => dispatch(rotatePlaces()), 60000);
  dispatch(setUserIdleTimer({ idleTimer: timer }));
};

export const sortPlaces = () => (dispatch, getState) => {
  const { places: { placesList } } = getState();
  const sortedPlacesList = placesList.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });
  dispatch(loadPlaces(sortedPlacesList));
};
