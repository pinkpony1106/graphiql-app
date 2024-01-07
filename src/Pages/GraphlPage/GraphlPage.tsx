import { useContext, useEffect, useState } from 'react';
import RequestEditor from '../../Components/RequestEditor/RequestEditor';
import ResponseEditor from '../../Components/ResponseEditor/ResponseEditor';
import style from './graphlPage.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';
import Schema from '../../Components/SchemaInfo/Schema';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function GraphlPage() {
  const [schemaVisible, setSchemaVisible] = useState(false);
  const { t } = useContext(TranslateContext);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/signIn');
      }
    });
  }, [navigate]);

  return (
    <div className={style.container}>
      {schemaVisible ? <Schema /> : null}
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
