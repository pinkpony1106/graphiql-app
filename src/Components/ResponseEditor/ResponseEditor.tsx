import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import style from './response.module.css';
import QueryTextEditor from '../RequestEditor/QueryTextEditor/QueryTextEditor';
import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';

export default function Response() {
  const status = useSelector((state: RootState) => state.requestValue.status);
  const { t } = useContext(TranslateContext);

  return (
    <div className={style.responseContainer}>
      {t(tKeys.response)}
      <div>{status}</div>
      <QueryTextEditor isReadOnly />
    </div>
  );
}
