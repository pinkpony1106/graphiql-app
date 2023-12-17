import style from './welcome.module.css';

export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <div className={style.welcomeExampleContainer}>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>Ask for what you want</div>
          <pre className={style.exampleText}>
            &#123;{'\n'}
            project(name: &quot;GraphQL&quot;) &#123;{'\n'}
            tagline{'\n'}
            &#125;{'\n'}
            &#125;{'\n'}
          </pre>
        </div>
        <div className={style.welcomeLogo}></div>
        <div className={style.welcomeExample}>
          <div className={style.exampleHeader}>Get predictable results</div>
          <pre className={style.exampleText}>
            &#123;{'\n'}
            &quot;project&quot;: &#123;{'\n'}
            &quot;tagline&quot;: &quot;A query language&quot;{'\n'}
            &#125;{'\n'}
            &#125;{'\n'}
          </pre>
        </div>
      </div>
      <div className={style.button}>Get Started</div>
      <div className={style.welcomeLogoVertical}></div>
    </div>
  );
}
