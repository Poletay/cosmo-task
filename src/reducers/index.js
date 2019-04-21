import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const requestsStare = handleActions({
  [actions.doHttpRequestRequest](state, { payload: { requestName } }) {
    return { ...state, [requestName]: 'requested' };
  },
  [actions.doHttpRequestFailure](state, { payload: { requestName } }) {
    return { ...state, [requestName]: 'failed' };
  },
  [actions.doHttpRequestSuccess](state, { payload: { requestName } }) {
    return { ...state, [requestName]: 'successed' };
  },
}, {});

const places = handleActions({
  [actions.loadPlaces](state, { payload }) {
    return {
      ...state,
      placesList: payload,
    };
  },
  [actions.setRotateTimer](state, { payload: { rotateTimer } }) {
    return {
      ...state,
      rotateTimer,
    };
  },
  [actions.switchRotateDirection](state) {
    const { isForwardDirection } = state;
    return {
      ...state,
      isForwardDirection: !isForwardDirection,
    };
  },
}, {});

const userIdleTimer = handleActions({
  [actions.setUserIdleTimer](state, { payload: { idleTimer } }) {
    return idleTimer;
  },
}, {});

export default combineReducers({
  requestsStare,
  places,
  userIdleTimer,
});
