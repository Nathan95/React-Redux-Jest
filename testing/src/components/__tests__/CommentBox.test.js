import React from 'react';
import CommentBox from '../CommentBox';
import { mount  } from 'enzyme';
import Root from 'Root';

let wrapped;

//before each declare a comment box component
beforeEach(() => {
  wrapped = mount (
    <Root>
      <CommentBox />
    </Root>
  );
});

//cleanup
afterEach(() => {
    wrapped = unmount();
});

//creates comment box for each it declaration
it('has a text area and a button', () {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

describe('the text area', () =>
  beforeEach((){
      //simulate a change event
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    //update the field
    wrapped.update();
  })
  it('has a text area that users can type in', () => {
      //use the value prop from comment box to asset that the value of the textarea is new comment
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

  it('when form is submitted, textarea is emptied', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');

  });
})
