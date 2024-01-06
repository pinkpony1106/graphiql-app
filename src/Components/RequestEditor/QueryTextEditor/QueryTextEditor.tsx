import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQueryTextValue } from '../../../store/slices/queryTextSlice';
import { RootState } from '../../../store';

import style from './queryTextEditor.module.css';

type QueryTextEditorType = {
  isReadOnly?: boolean;
};

export default function QueryTextEditor({
  isReadOnly = false,
}: QueryTextEditorType) {
  const requestTextDiv = useRef<HTMLPreElement>(null);
  const initQuery = useSelector(
    (state: RootState) => state.queryTextValue.queryText
  );
  const response = useSelector((state: RootState) => state.requestValue.result);
  const dispatch = useDispatch();

  return (
    <>
      <pre
        className={style.requestTextArea}
        contentEditable={!isReadOnly}
        suppressContentEditableWarning={true} // warning muted!
        ref={requestTextDiv}
        placeholder={initQuery}
        onInput={() => {
          requestTextDiv.current?.innerText
            ? dispatch(updateQueryTextValue(requestTextDiv.current.innerText))
            : dispatch(updateQueryTextValue(''));
        }}
      >
        {isReadOnly ? response : null}
      </pre>
      {/* <textarea
        className={style.requestTextArea}
        ref={requestTextDiv}
        placeholder={initQuery}
        readOnly={isReadOnly}
        value={isReadOnly ? response : undefined}
        onInput={() => {
          requestTextDiv.current?.value
            ? dispatch(updateQueryTextValue(requestTextDiv.current.value))
            : dispatch(updateQueryTextValue(''));
        }}
      /> */}
    </>
  );
}
