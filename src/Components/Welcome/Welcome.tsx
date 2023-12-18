import style from './welcome.module.css';

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
  return (
    <div className={style.welcomeContainer}>
      <div className={style.welcomeExampleContainer}>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>Ask for what you want</div>
          <pre className={style.exampleText}>{requestCode}</pre>
        </div>
        <div className={style.welcomeLogo}></div>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>Get predictable results</div>
          <pre className={style.exampleText}>{responseCode}</pre>
        </div>
      </div>
      <div className={style.button}>Get Started</div>
      <div className={style.welcomeLogoVertical}></div>
    </div>
  );
}
