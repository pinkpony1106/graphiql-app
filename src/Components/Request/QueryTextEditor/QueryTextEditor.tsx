import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import style from './queryTextEditor.module.css';
import { updateQueryTextValue } from '../../../store/slices/queryTextSlice';

export default function QueryTextEditor() {
  const requestTextDiv = useRef<HTMLPreElement>(null);
  const dispatch = useDispatch();
  return (
    <>
      <pre
        className={style.requestTextArea}
        contentEditable="true"
        suppressContentEditableWarning={true} // warning muted!
        ref={requestTextDiv}
        onInput={() => {
          requestTextDiv.current?.innerText
            ? dispatch(updateQueryTextValue(requestTextDiv.current.innerText))
            : dispatch(updateQueryTextValue(''));
        }}
      >
        type your request here
      </pre>
    </>
  );
}
