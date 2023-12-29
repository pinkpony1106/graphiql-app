import { useState } from 'react';
import RequestEditor from '../../Components/Request/RequestEditor';
import ResponseEditor from '../../Components/ResponseEditor/ResponseEditor';
import SchemaInfo from '../../Components/SchemaInfo/SchemaInfo';
import style from './graphlPage.module.css';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  return (
    <div className={style.container}>
      {schemaVisible ? <SchemaInfo /> : null}
      <RequestEditor />
      <ResponseEditor />
      <div
        className={style.button}
        onClick={() => setSchemaVisible(!schemaVisible)}
      >
        Docs
      </div>
    </div>
  );
}

export default GraphlPage;
