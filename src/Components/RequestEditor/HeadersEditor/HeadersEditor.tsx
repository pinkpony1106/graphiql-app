import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateHeadersValue } from '../../../store/slices/headersSlice';

import style from './headersEditor.module.css';

export default function HeadersEditor() {
  const HeadersTextDiv = useRef<HTMLPreElement>(null);
  const dispatch = useDispatch();
  return (
    <div className={style.headersContainer}>
      <pre
        className={style.headersTextArea}
        contentEditable="true"
        suppressContentEditableWarning={true}
        ref={HeadersTextDiv}
        placeholder="{ your headers }"
        onInput={() => {
          HeadersTextDiv.current?.innerText
            ? dispatch(updateHeadersValue(HeadersTextDiv.current.innerText))
            : dispatch(updateHeadersValue(''));
        }}
      ></pre>
    </div>
  );
}
