import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import VariablesEditor from '../VariablesEditor/VariablesEditor';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Varibles Editor Component', () => {
  it('Updates the value of varibles when editing content', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { getByPlaceholderText } = render(<VariablesEditor />);
    const headersTextArea = getByPlaceholderText('{ your variables }');

    fireEvent.input(headersTextArea, {
      target: { innerText: 'Content-Type: application/json' },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'variablesValue/updateVariablesValue',
      payload: 'Content-Type: application/json',
    });
  });
});
