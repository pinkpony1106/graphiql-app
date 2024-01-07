import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQueryTextValue } from '../../../store/slices/queryTextSlice';
import { RootState } from '../../../store';

import styles from './queryTextEditor.module.css';
import classNames from 'classnames';

type QueryTextEditorType = {
  isReadOnly?: boolean;
};

export default function QueryTextEditor({
  isReadOnly = false,
}: QueryTextEditorType) {
  const requestTextDiv = useRef<HTMLTextAreaElement>(null);
  const initQuery = useSelector(
    (state: RootState) => state.queryTextValue.queryText
  );
  const response = useSelector((state: RootState) => state.requestValue.result);
  const dispatch = useDispatch();

  return (
    <>
      <textarea
        className={classNames(styles.requestTextArea, {
          [styles.wide]: isReadOnly,
        })}
        ref={requestTextDiv}
        // placeholder={initQuery}
        readOnly={isReadOnly}
        spellCheck="false"
        // value={isReadOnly ? response : undefined}
        value={isReadOnly ? response : initQuery}
        onInput={() => {
          requestTextDiv.current?.value
            ? dispatch(updateQueryTextValue(requestTextDiv.current.value))
            : dispatch(updateQueryTextValue(''));
        }}
      />
    </>
  );
}
