jest.unmock('../AppContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../AppContainer';

describe('CheckboxWithLabel', () => {
  it('should show hello world title', () => {
    const title = TestUtils.renderIntoDocument(
      <AppContainer />
    );
    const titleNode = ReactDOM.findDOMNode(title);
    expect(titleNode.textContent).toEqual('Hello World');
  });
});
