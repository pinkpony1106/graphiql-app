import style from './aboutGraphi.module.css';

function AboutGraphi() {
  return (
    <div className={style.container}>
      <div className={style.header}>A query language for your API</div>
      <div className={style.text}>
        GraphQL is a query language for APIs and a runtime for fulfilling those
        queries with your existing data. GraphQL provides a complete and
        understandable description of the data in your API, gives clients the
        power to ask for exactly what they need and nothing more, makes it
        easier to evolve APIs over time, and enables powerful developer tools.
      </div>
      <div className={style.exampleContainer}>
        <div className={style.exampleCodeContainer}>
          <div className={style.exampleCode}>
            <pre>
              &#123;{'\n'}
              hero &#123;{'\n'}
              <span className={style.select}>name</span>
              {'\n'}
              <span className={style.select}>height</span>
              {'\n'}
              &#125;{'\n'}
              &#125;{'\n'}
            </pre>
          </div>
          <div className={style.exampleCode}>
            <pre>
              &#123;{'\n'}
              &quot;hero&quot;: &#123;{'\n'}
              &quot;name&quot;: &quot;
              <span className={style.select}>Luke Skywalker</span>&quot;,{'\n'}
              &quot;height&quot;: <span className={style.select}>1.72</span>
              {'\n'}
              &#125;{'\n'}
              &#125;{'\n'}
            </pre>
          </div>
        </div>
        <div className={style.exampleCodeText}>
          Ask for what you need, get exactly that Send a GraphQL query to your
          API and get exactly what you need, nothing more and nothing less.
          GraphQL queries always return predictable results. Apps using GraphQL
          are fast and stable because they control the data they get, not the
          server.
        </div>
      </div>
    </div>
  );
}

export default AboutGraphi;
