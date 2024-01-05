import QueryTextEditor from './QueryTextEditor/QueryTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchResult } from '../../store/slices/requestSlice';
import { useAppDispatch } from '../../hooks/redux-hook';
import { useContext } from 'react';
import { TranslateContext, tKeys } from '../../Context/Context';

import style from './request.module.css';
import {
  updateOpenHeaders,
  updateOpenVariables,
} from '../../store/slices/openVarsHeadersSlice';
import VariablesEditor from './VariablesEditor/VariablesEditor';
import HeadersEditor from './HeadersEditor/HeadersEditor';
import UrlEditor from './UrlEditor/UrlEditor';
import { updateQueryTextValue } from '../../store/slices/queryTextSlice';

export default function RequestEditor() {
  const { t } = useContext(TranslateContext);
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

  const makePretty = () => {
    const lines = queryText
      .split(/\r\n|\r|\n/g)
      .map((x) => x.trim().replace(/\s+/g, ' '))
      .filter((x) => x != '')
      .join('')
      .split('');

    let tabCounter = 0;
    const tab = '  ';

    const unitedLines = lines
      .map((x) => {
        if (x === '}') {
          if (tabCounter > 0) {
            tabCounter--;
          }
          x = '\n' + `${tab.repeat(tabCounter)}` + `}`;
        }
        if (x === '{') {
          tabCounter++;
          x = `{\n` + `${tab.repeat(tabCounter)}`;
        }
        return x;
      })
      .join('');
    dispatch(updateQueryTextValue(unitedLines));
    console.log(unitedLines);
  };

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
          <div className={style.button} onClick={makePretty}>
            <img src="/requestIcons/prettify.svg" alt="prettity pic"></img>
          </div>
          <div className={style.button} onClick={makeRequest}>
            {t(tKeys.request)}
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
            {t(tKeys.variables)}
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
            {t(tKeys.headers)}
          </div>
        </div>
        {variablesOpen && <VariablesEditor />}
        {headersOpen && <HeadersEditor />}
      </div>
    </div>
  );
}
