import QueryTextEditor from './QueryTextEditor/QueryTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchResult } from '../../store/slices/requestSlice';
import { useAppDispatch } from '../../hooks/redux-hook';

import style from './request.module.css';
import {
  updateOpenHeaders,
  updateOpenVariables,
} from '../../store/slices/openVarsHeadersSlice';
import VariablesEditor from './VariablesEditor/VariablesEditor';
import HeadersEditor from './HeadersEditor/HeadersEditor';
import UrlEditor from './UrlEditor/UrlEditor';

export default function RequestEditor() {
  const dispatch = useDispatch();
  const dispatchAsync = useAppDispatch();

  const baseUrl = useSelector((state: RootState) => state.urlValue.url);
  const queryText = useSelector(
    (state: RootState) => state.queryTextValue.queryText
  );
  const headers = useSelector((state: RootState) => state.headersValue.headers);
  const variables = useSelector(
    (state: RootState) => state.variablesValue.variables
  );

  const variablesOpen = useSelector(
    (state: RootState) => state.openVariablesHeaders.openVariables
  );
  const headersOpen = useSelector(
    (state: RootState) => state.openVariablesHeaders.openHeaders
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

    dispatchAsync(
      fetchResult({
        url: baseUrl,
        query: queryText,
        variables: parsedVariables,
        headers: parsedHeaders,
      })
    );
  };

  return (
    <div className={style.requestContainer}>
      <UrlEditor />
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
          <div
            className={`${style.button} ${style.buttonVH} ${
              variablesOpen && style.buttonActive
            }`}
            onClick={() => {
              if (!variablesOpen) {
                dispatch(updateOpenVariables(true));
                dispatch(updateOpenHeaders(false));
              }
              if (variablesOpen) {
                dispatch(updateOpenVariables(false));
                dispatch(updateOpenHeaders(false));
              }
            }}
          >
            VARIABLES
          </div>
          <div
            className={`${style.button} ${style.buttonVH} ${
              headersOpen && style.buttonActive
            }`}
            onClick={() => {
              if (!headersOpen) {
                dispatch(updateOpenVariables(false));
                dispatch(updateOpenHeaders(true));
              }
              if (headersOpen) {
                dispatch(updateOpenVariables(false));
                dispatch(updateOpenHeaders(false));
              }
            }}
          >
            HEADERS
          </div>
        </div>
        {variablesOpen && <VariablesEditor />}
        {headersOpen && <HeadersEditor />}
      </div>
    </div>
  );
}
