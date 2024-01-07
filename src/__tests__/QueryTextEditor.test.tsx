import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { updateQueryTextValue } from '../store/slices/queryTextSlice';
import QueryTextEditor from '../Components/RequestEditor/QueryTextEditor/QueryTextEditor';

const mockStore = configureMockStore();

describe('Query Text Editor Component', () => {
  it('correctly and updates the value of the query text in the store', () => {
    const store = mockStore({
      queryTextValue: {
        queryText: 'query Text',
      },
      requestValue: {
        result: 'Mock Response',
      },
    });

    const { getByDisplayValue } = render(
      <Provider store={store}>
        <QueryTextEditor />
      </Provider>
    );

    expect(getByDisplayValue('query Text')).toBeInTheDocument();

    fireEvent.input(getByDisplayValue('query Text'), {
      target: { value: 'Updated Query' },
    });

    const expectedActions = [updateQueryTextValue('Updated Query')];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
