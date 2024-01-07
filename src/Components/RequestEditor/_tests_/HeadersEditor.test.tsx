import { fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import HeadersEditor from "../HeadersEditor/HeadersEditor";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('Headers Editor Component', () => {
    it('Updates the value of headers when editing content', () => {
        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

        const { getByPlaceholderText } = render(<HeadersEditor />);
        const headersTextArea = getByPlaceholderText('{ your headers }');

        fireEvent.input(headersTextArea, { target: { innerText: 'Content-Type: application/json' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'headersValue/updateHeadersValue',
            payload: 'Content-Type: application/json',
        });
    });
});