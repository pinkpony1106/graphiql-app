import { useContext } from 'react';
import style from './aboutCourse.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';
import { Link } from 'react-router-dom';

function AboutCourse() {
  const { t } = useContext(TranslateContext);
  return (
    <div className={style.container}>
      <div className={style.header}>{t(tKeys.about_course)}</div>
      <div className={style.text}>{t(tKeys.about_course_text)}</div>
      <div className={style.toolsContainer}>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
        <div className={style.toolImage}>
          <div className={style.toolLogo} />
        </div>
      </div>
      <div className={style.text}>{t(tKeys.about_course_text_2)}</div>
      <Link to={'https://rs.school/react/'} target="blank">
        <div className={style.button}>{t(tKeys.joinIn)}</div>
      </Link>
    </div>
  );
}

export default AboutCourse;
