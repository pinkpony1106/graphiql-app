import { useContext, useState } from 'react';
import RequestEditor from '../../Components/RequestEditor/RequestEditor';
import ResponseEditor from '../../Components/ResponseEditor/ResponseEditor';
import SchemaInfo from '../../Components/SchemaInfo/SchemaInfo';
import style from './graphlPage.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      {schemaVisible ? <SchemaInfo /> : null}
      <RequestEditor />
      <ResponseEditor />
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
