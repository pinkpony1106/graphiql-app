import style from './aboutTeam.module.css';

function AboutTeam() {
  return (
    <div className={style.container}>
      <div className={style.header}>About our development team</div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>Tatsiana Kulinkovich</div>
          <div className={style.developerInfoText}>
            Ask for what you need, get exactly that Send a GraphQL query to your
            API and get exactly what you need, nothing more and nothing less.
            GraphQL queries always return predictable results.
          </div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <div className={style.link}>GitHub</div>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>Tatsiana Kulinkovich</div>
          <div className={style.developerInfoText}>
            Ask for what you need, get exactly that Send a GraphQL query to your
            API and get exactly what you need, nothing more and nothing less.
            GraphQL queries always return predictable results.
          </div>
          <div className={style.linksContainer}>
            <div className={style.link}>LinkedIn</div>
            <div className={style.link}>GitHub</div>
          </div>
        </div>
      </div>

      <div className={style.developerInfoContainer}>
        <img src="./chick.png" className={style.developerImage} />
        <div className={style.developerInfo}>
          <div className={style.developerInfoHeader}>Tatsiana Kulinkovich</div>
          <div className={style.developerInfoText}>
            Ask for what you need, get exactly that Send a GraphQL query to your
            API and get exactly what you need, nothing more and nothing less.
            GraphQL queries always return predictable results.
          </div>
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
