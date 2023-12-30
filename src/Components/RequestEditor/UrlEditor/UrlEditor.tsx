import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUrlValue } from '../../../store/slices/urlSlice';
import { RootState } from '../../../store';

import style from './urlEditor.module.css';

export default function UrlEditor() {
  const UrlTextDiv = useRef<HTMLDivElement>(null);
  const initLUrl = useSelector((state: RootState) => state.urlValue.url);
  const dispatch = useDispatch();
  return (
    <div className={style.urlContainer}>
      <div className={style.urlHeader}>GraphQL Server</div>
      <div
        className={style.urlTextArea}
        contentEditable="true"
        suppressContentEditableWarning={true} // warning muted!
        ref={UrlTextDiv}
        placeholder={initLUrl}
        onInput={() => {
          UrlTextDiv.current?.innerText
            ? dispatch(updateUrlValue(UrlTextDiv.current.innerText))
            : dispatch(updateUrlValue(''));
        }}
      ></div>
    </div>
  );
}
