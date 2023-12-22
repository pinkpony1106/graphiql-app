import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import style from './response.module.css';

export default function Response() {
  const [t] = useContext(TranslateContext);
  return <div className={style.responseContainer}>{t(tKeys.response)}</div>;
}
