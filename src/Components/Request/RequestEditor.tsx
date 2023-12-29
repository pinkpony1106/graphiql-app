import style from './request.module.css';
import QueryTextEditor from './QueryTextEditor/QueryTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
// import fetchResult from '../../store/slices/requestSlice';

export default function RequestEditor() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const baseUrl = useSelector((state: RootState) => state.urlValue.url);
  const queryText = useSelector(
    (state: RootState) => state.queryTextValue.queryText
  );
  const headers = useSelector((state: RootState) => state.headersValue.headers);
  const variables = useSelector(
    (state: RootState) => state.variablesValue.variables
  );

  const makeRequest = async () => {
    let parsedVariables: object;
    let parsedHeaders: object;
    try {
      parsedVariables = JSON.parse(variables);
    } catch {
      parsedVariables = {};
    }
    try {
      parsedHeaders = JSON.parse(headers);
    } catch {
      parsedHeaders = {};
    }

    console.log(
      'url:',
      baseUrl,
      'query:',
      queryText,
      'variables:',
      parsedVariables,
      'headers:',
      parsedHeaders
    );

    // dispatch(
    //   fetchResult({
    //     url: baseUrl,
    //     query: queryText,
    //     variables: parsedVariables,
    //     headers: parsedHeaders,
    //   })
    // );
  };

  return (
    <div className={style.requestContainer}>
      <div className={style.requestInnerContainer}>
        <div className={style.buttonsContainer}>
          <div className={style.button}>PRETTIFY</div>
          <div className={style.button} onClick={makeRequest}>
            REQUEST
          </div>
        </div>
        <QueryTextEditor />
      </div>
      <div className={style.variablesAndHeadersContainerVH}>
        <div className={style.buttonsContainerVH}>
          <div className={`${style.button} ${style.buttonVH}`}>open/hide</div>
          <div className={`${style.button} ${style.buttonVH}`}>VARIABLES</div>
          <div className={`${style.button} ${style.buttonVH}`}>HEADERS</div>
        </div>
        V&H
      </div>
    </div>
  );
}

/////base func
// async function makeRequestWithArgs(
//   baseUrlArg: string,
//   headersArg: string,
//   //   operationNameArg = null,
//   queryStringArg: string,
//   variablesArg: string
// ) {
//   const results = await fetch(baseUrlArg, {
//     method: 'POST',
//     headers: { headersArg, 'Content-type': 'application/json' },
//     body: JSON.stringify({
//       //   operationName: operationNameArg,
//       query: queryStringArg,
//       variables: variablesArg,
//     }),
//   });
//   const characters = await results.json();
//   console.log(characters.data);
// }
