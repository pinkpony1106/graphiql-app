import { useContext, useState } from 'react';
import Request from '../../Components/Request/Request';
import Response from '../../Components/Response/Response';
import SchemaInfo from '../../Components/SchemaInfo/SchemaInfo';
import style from './graphlPage.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      {schemaVisible ? <SchemaInfo /> : null}
      <Request />
      <Response />
      <div
        className={style.button}
        onClick={() => setSchemaVisible(!schemaVisible)}
      >
        {t(tKeys.docs)}
      </div>
    </div>
  );
}

export default GraphlPage;
