import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import style from './response.module.css';
import QueryTextEditor from '../RequestEditor/QueryTextEditor/QueryTextEditor';

export default function Response() {
  const status = useSelector((state: RootState) => state.requestValue.status);

  return (
    <div className={style.responseContainer}>
      Response<div>{status}</div>
      <QueryTextEditor isReadOnly />
    </div>
  );
}
