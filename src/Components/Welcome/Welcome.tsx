import { useContext } from 'react';
import style from './welcome.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';

const requestCode = `{
  project(name: "GraphQL") {
    tagline
  }
}`;

const responseCode = `{
  "project": {
    "tagline": "A query language”
  }
}`;

export default function Welcome() {
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.welcomeContainer}>
      <div className={style.welcomeExampleContainer}>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>{t(tKeys.ask_for)}</div>
          <pre className={style.exampleText}>{requestCode}</pre>
        </div>
        <div className={style.welcomeLogo}></div>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>{t(tKeys.get_results)}</div>
          <pre className={style.exampleText}>{responseCode}</pre>
        </div>
      </div>
      <div className={style.button}>{t(tKeys.get_started)}</div>
      <div className={style.welcomeLogoVertical}></div>
    </div>
  );
}
