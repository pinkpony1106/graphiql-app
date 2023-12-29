import QueryTextEditor from './QueryTextEditor/QueryTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';

import style from './request.module.css';
// import { fetchResult } from '../../store/slices/requestSlice';

export default function RequestEditor() {
  const [variablesVisible, setVariablesVisible] = useState(false);
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
      {!variablesVisible && (
        <div
          className={`${style.variablesAndHeadersContainerVH} ${style.containerClosed}`}
        >
          <div className={style.buttonsContainerVH}>
            <div
              className={`${style.buttonOpenClose} ${style.buttonVH}`}
              onClick={() => setVariablesVisible(!variablesVisible)}
            >
              &#x25B2;
            </div>
            <div className={`${style.button} ${style.buttonVH}`}>VARIABLES</div>
            <div className={`${style.button} ${style.buttonVH}`}>HEADERS</div>
          </div>
        </div>
      )}
      {variablesVisible && (
        <div className={style.variablesAndHeadersContainerVH}>
          <div className={style.buttonsContainerVH}>
            <div
              className={`${style.buttonOpenClose} ${style.buttonVH}`}
              onClick={() => setVariablesVisible(!variablesVisible)}
            >
              &#x25BC;
            </div>
            <div className={`${style.button} ${style.buttonVH}`}>VARIABLES</div>
            <div className={`${style.button} ${style.buttonVH}`}>HEADERS</div>
          </div>
          V&H
        </div>
      )}
    </div>
  );
}
