import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = placeName => ({
  type: ADD_PLACE,
  placeName: placeName,
});

export const deletePlace = () => ({
  type: DELETE_PLACE,
});
