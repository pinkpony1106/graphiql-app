import { useContext } from 'react';
import style from './aboutTeam.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';

function AboutTeam() {
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      <div className={style.header}>{t(tKeys.about_team)}</div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.tania)}</div>
          <div className={style.developerInfoText}>{t(tKeys.tania_text)}</div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <div className={style.link}>GitHub</div>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.anna)}</div>
          <div className={style.developerInfoText}>{t(tKeys.anna_text)}</div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <div className={style.link}>GitHub</div>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.julia)}</div>
          <div className={style.developerInfoText}>{t(tKeys.julia_text)}</div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <div className={style.link}>GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
