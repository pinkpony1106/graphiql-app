import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';
import style from './aboutGraphi.module.css';

const requestCode = `{
  hero {
    name
    height
  }
}`;

const responseCode = `{
  "hero": {
    "name": "Luke Skywalker",
    "height": 1.72
  }
}`;

function AboutGraphi() {
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      <div className={style.header}>{t(tKeys.a_query_lng)}</div>
      <div className={style.text}>{t(tKeys.a_query_lang_text)}</div>
      <div className={style.exampleContainer}>
        <div className={style.exampleCodeContainer}>
          <div className={style.exampleCode}>
            <pre>{requestCode}</pre>
          </div>
          <div className={style.exampleCode}>
            <pre>{responseCode}</pre>
          </div>
        </div>
        <div className={style.exampleCodeText}>
          {t(tKeys.a_query_lang_text_2)}
        </div>
      </div>
    </div>
  );
}

export default AboutGraphi;
