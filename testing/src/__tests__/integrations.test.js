import React from 'react';
import { mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  //this initialises moxios and turns off any initiations by axios
  moxios.install();
  //if it sees a request respond to it
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      //modify how moxios responds to request
      status: 200,
      response: [{name: 'Fetched #1'}, {name: "Fetched #2"}]
  });
});

afterEach(() => {
  moxios.uninstall();
});


it('can fetch a list of comments and display them', (done) => {
  //Attempt to rener the entire app

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the 'fetchComments' button and click it
  //one clicked
  wrapped.find('.fetch-comments').simulate('click');

  //Expect to find the list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });

});
