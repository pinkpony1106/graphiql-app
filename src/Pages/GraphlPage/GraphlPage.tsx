import Request from '../../Components/Request/Request';
import Response from '../../Components/Response/Response';
import style from './graphlPage.module.css';

function GraphlPage() {
  return (
    <div className={style.container}>
      <Request />
      <Response />
      <div className={style.button}>Docs</div>
    </div>
  );
}

export default GraphlPage;
