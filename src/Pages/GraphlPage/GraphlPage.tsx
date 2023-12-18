import { useState } from 'react';
import Request from '../../Components/Request/Request';
import Response from '../../Components/Response/Response';
import SchemaInfo from '../../Components/SchemaInfo/SchemaInfo';
import style from './graphlPage.module.css';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  return (
    <div className={style.container}>
      {schemaVisible ? <SchemaInfo /> : null}
      <Request />
      <Response />
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
