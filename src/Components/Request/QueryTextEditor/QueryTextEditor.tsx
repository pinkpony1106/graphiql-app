import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQueryTextValue } from '../../../store/slices/queryTextSlice';
import { RootState } from '../../../store';

import style from './queryTextEditor.module.css';

export default function QueryTextEditor() {
  const requestTextDiv = useRef<HTMLPreElement>(null);
  const initQuery = useSelector(
    (state: RootState) => state.queryTextValue.queryText
  );
  const dispatch = useDispatch();
  return (
    <>
      <pre
        className={style.requestTextArea}
        contentEditable="true"
        suppressContentEditableWarning={true} // warning muted!
        ref={requestTextDiv}
        placeholder={initQuery}
        onInput={() => {
          requestTextDiv.current?.innerText
            ? dispatch(updateQueryTextValue(requestTextDiv.current.innerText))
            : dispatch(updateQueryTextValue(''));
        }}
      ></pre>
    </>
  );
}
