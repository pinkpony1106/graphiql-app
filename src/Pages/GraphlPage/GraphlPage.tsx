import { useState } from 'react';
import Request from '../../Components/Request/Request';
import Response from '../../Components/Response/Response';
import style from './graphlPage.module.css';
import Schema from '../../Components/SchemaInfo/Schema';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  return (
    <div className={style.container}>
      {schemaVisible ? <Schema /> : null}
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
