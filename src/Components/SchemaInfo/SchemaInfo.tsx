import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import style from './schemaInfo.module.css';

export default function SchemaInfo() {
  const { t } = useContext(TranslateContext);
  return <div className={style.responseContainer}>{t(tKeys.schemaInfo)}</div>;
}
