import { render } from '@testing-library/react';
import RequestEditor from '../Components/RequestEditor/RequestEditor';
import { TranslateContextProvider } from '../Context/Context';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

jest.mock(
  '../Components/RequestEditor/QueryTextEditor/QueryTextEditor.tsx',
  () => () => <div data-testid="query-text-editor" />
);

describe('AboutTeam.test', () => {
  it('should render QueryTextEditor', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <TranslateContextProvider>
            <RequestEditor />
          </TranslateContextProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(getByTestId('query-text-editor')).toBeInTheDocument();
  });
});
