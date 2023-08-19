import { ActionReducer } from '@ngrx/store';
import { merge, pick } from 'lodash-es';

const localStorageKey = '__app_storage__';
const stateKeys = ['favorites'];

export function photosStorageMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  let onInit = true;
  return function (state, action) {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }

    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}

// TODO: move this to a service
function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey) ?? '{}');
}
