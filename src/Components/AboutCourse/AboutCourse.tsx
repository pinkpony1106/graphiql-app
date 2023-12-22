import { useContext } from 'react';
import style from './aboutCourse.module.css';
import { TranslateContext, tKeys } from '../../Context/Context';

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
      <div className={style.button}>{t(tKeys.joinIn)}</div>
    </div>
  );
}

export default AboutCourse;
