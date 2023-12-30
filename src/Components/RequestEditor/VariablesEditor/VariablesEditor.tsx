import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateVariablesValue } from '../../../store/slices/variablesSlice';

import style from './variablesEditor.module.css';

export default function VariablesEditor() {
  const VariablesTextDiv = useRef<HTMLPreElement>(null);
  const dispatch = useDispatch();
  return (
    <div className={style.variablesContainer}>
      <pre
        className={style.variablesTextArea}
        contentEditable="true"
        suppressContentEditableWarning={true} // warning muted!
        ref={VariablesTextDiv}
        placeholder="{ your variables }"
        onInput={() => {
          VariablesTextDiv.current?.innerText
            ? dispatch(updateVariablesValue(VariablesTextDiv.current.innerText))
            : dispatch(updateVariablesValue(''));
        }}
      ></pre>
    </div>
  );
}
