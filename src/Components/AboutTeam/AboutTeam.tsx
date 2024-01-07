import { useContext } from 'react';
import style from './aboutTeam.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';
import { Link } from 'react-router-dom';

function AboutTeam() {
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      <div className={style.header}>{t(tKeys.about_team)}</div>

      <div className={style.developerInfoContainer}>
        <img src="./devImage/Tanya.JPG" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.tania)}</div>
          <div className={style.developerInfoText}>{t(tKeys.tania_text)}</div>
          <div className={style.linksContainer}>
            <Link
              to={'https://www.linkedin.com/in/tatiana-kulinkovich-892410230/'}
              target="blank"
            >
              <div className={style.link}>LinkedIn</div>
            </Link>
            <Link to={'https://github.com/bogdanovich231'} target="blank">
              <div className={style.link}>GitHub</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./devImage/Anna.jpg" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.anna)}</div>
          <div className={style.developerInfoText}>{t(tKeys.anna_text)}</div>
          <div className={style.linksContainer}>
            <Link
              to={'https://ru.linkedin.com/in/anna-dvor-20b50a153'}
              target="blank"
            >
              <div className={style.link}>LinkedIn</div>
            </Link>
            <Link to={'https://github.com/annFromEarth'} target="blank">
              <div className={style.link}>GitHub</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./devImage/Julia.PNG" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>{t(tKeys.julia)}</div>
          <div className={style.developerInfoText}>{t(tKeys.julia_text)}</div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <Link to={'https://github.com/pinkpony1106'} target="blank">
              <div className={style.link}>GitHub</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
