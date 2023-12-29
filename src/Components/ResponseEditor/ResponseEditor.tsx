import { useSelector } from 'react-redux';
import style from './response.module.css';
import { RootState } from '../../store';

export default function Response() {
  const status = useSelector((state: RootState) => state.requestValue.status);
  const response = useSelector((state: RootState) => state.requestValue.result);
  return (
    <div className={style.responseContainer}>
      Response<div>{status}</div>
      <div>{response}</div>
    </div>
  );
}
