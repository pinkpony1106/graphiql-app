import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUrlValue } from '../../../store/slices/urlSlice';
import { RootState } from '../../../store';

import style from './urlEditor.module.css';

export default function UrlEditor() {
  const UrlTextDiv = useRef<HTMLInputElement>(null);
  const initLUrl = useSelector((state: RootState) => state.urlValue.url);
  const dispatch = useDispatch();

  return (
    <div className={style.urlContainer}>
      <div className={style.urlHeader}>GraphQL Server</div>
      <input
        type="text"
        className={style.urlTextArea}
        ref={UrlTextDiv}
        defaultValue={initLUrl}
        onInput={() => {
          UrlTextDiv.current?.value
            ? dispatch(updateUrlValue(UrlTextDiv.current.value))
            : dispatch(updateUrlValue(''));
        }}
      ></input>
    </div>
  );
}
