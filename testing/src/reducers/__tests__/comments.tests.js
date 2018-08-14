import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles of actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  //passing in an object with an empty type is the same as passing in an object with no type
  const newState = commentsReducer([], {type: 'afdsfdsfdsfds'});

  expect(newState).toEqual([]);
});
