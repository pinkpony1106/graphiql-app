import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useContext } from 'react';
import { TranslateContext } from '../../Context/Context';

import style from './response.module.css';

export default function Response() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useContext(TranslateContext);
  const status = useSelector((state: RootState) => state.requestValue.status);
  const response = useSelector((state: RootState) => state.requestValue.result);
  return (
    <div className={style.responseContainer}>
      Response<div>{status}</div>
      <div>{response}</div>
    </div>
  );
}
