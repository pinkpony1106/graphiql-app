import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import style from './request.module.css';

export default function Request() {
  const [t] = useContext(TranslateContext);
  return <div className={style.requestContainer}>{t(tKeys.request)}</div>;
}
