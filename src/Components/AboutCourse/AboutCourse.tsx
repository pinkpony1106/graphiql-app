import style from './aboutCourse.module.css';

function AboutCourse() {
  return (
    <div className={style.container}>
      <div className={style.header}>About the course</div>
      <div className={style.text}>
        RS School is free-of-charge and community-based education program
        conducted by The Rolling Scopes developer community since 2013.
      </div>
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
      <div className={style.text}>
        The core technologies of the course that we delved into during the
        program.
      </div>
      <div className={style.button}>Join In</div>
    </div>
  );
}

export default AboutCourse;
