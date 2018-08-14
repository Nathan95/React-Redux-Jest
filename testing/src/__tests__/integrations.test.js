import React from 'react';
import { mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => ({
  //Attempt to rener the entire app

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the 'fetchComments' button and click it

  //Expect to find the list of comments
})
